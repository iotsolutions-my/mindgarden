from playwright.sync_api import sync_playwright
from pathlib import Path
import json
with sync_playwright() as pw:
 b=pw.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader'])
 page=b.new_page(viewport={'width':1100,'height':850})
 errs=[];page.on('pageerror',lambda e:errs.append(str(e)))
 page.set_content((Path(__file__).resolve().parents[1] / 'city.html').read_text(),wait_until='domcontentloaded')
 page.wait_for_timeout(250)
 result=page.evaluate('''() => {
 const orig=JSON.parse(JSON.stringify(city)); const side=SIZE;
 const put=(x,z,t)=>{city.tiles[z*side+x]=t};
 const blank=()=>Array(side*side).fill('empty');
 const tests=[];
 // Test 1: Connected supply must not produce 'plant disconnected' warning
 city.tiles=blank();for(let x=8;x<35;x++)put(x,20,'road');
 put(10,21,'waterplant');put(10,22,'pond');put(12,21,'substation');put(14,21,'home');put(16,21,'apartment');put(18,21,'condo');
 put(24,21,'office');put(25,21,'hotel');put(26,21,'tour');put(28,21,'zoo');
 recalc();renderUI();
 const u=city.utilityDebug;const note=$('utilityNote').textContent;
 tests.push({name:'Connected plants detected',ok:u.plants===1&&u.substations===1&&u.waterResidents===144&&u.powerResidents===144,details:u});
 tests.push({name:'No false disconnected warning',ok:!note.includes('no access to a road')&&!note.includes('Substation is disconnected')&&note.includes('Residents with water access: 144/144'),details:note});
 // Test 2: disconnected plant is diagnosed without mislabelling the other
 put(10,20,'empty');recalc();renderUI();
 const after=city.utilityDebug, afterNote=$('utilityNote').textContent;
 tests.push({name:'Road loss reduces source access',ok:after.plants===0&&after.totalPlants===1&&after.waterResidents===0,details:after});
 // Restore road then inspect density upgrades
 put(10,20,'road');recalc();
 city.budget=20000;selectedTool='condo';const housingBefore=city.population;
 build(14+21*side);const housingAfter=city.population;
 tests.push({name:'Upgrade house to condo',ok:city.tiles[14+21*side]==='condo'&&housingAfter-housingBefore===72,details:{housingBefore,housingAfter}});
 // Force known tourists/job routes
 city.mayorPolicy='balanced';recalc();let balanced=mayorActivityRevenue();
 city.mayorPolicy='tourism';recalc();let tourism=mayorActivityRevenue();
 city.mayorPolicy='industry';recalc();let industry=mayorActivityRevenue();
 tests.push({name:'Policy returns vary',ok:tourism>balanced&&tourism!==industry,details:{balanced,tourism,industry,visitors:city.tourists}});
 // Verify no mutation of city day by a building upgrade
 tests.push({name:'City day unaffected by upgrading',ok:city.day===orig.day,details:city.day});
 // language switching labels
 for(const lc of ['ms','zh','zt','en']){lang=lc;renderUI();if(!$('housingReport').textContent)tests.push({name:'Language '+lc,ok:false});}
 tests.push({name:'Multi-language labels remain',ok:$('housingReport').textContent.includes('Residential density'),details:$('housingReport').textContent});
 return tests;
 }''')
 for x in result:print(('PASS' if x['ok'] else 'FAIL')+' '+x['name']+' '+str(x.get('details',''))[:300])
 print('JavaScript errors:', errs)
 assert all(x['ok'] for x in result) and not errs
 b.close()
