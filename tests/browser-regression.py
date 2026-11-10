from playwright.sync_api import sync_playwright
from pathlib import Path
p=Path('/mnt/data/mindgarden-v3.2.17/city.html').as_uri()
with sync_playwright() as play:
 browser=play.chromium.launch(headless=True, executable_path='/usr/bin/chromium',args=['--no-sandbox','--enable-webgl','--use-gl=swiftshader'])
 page=browser.new_page(viewport={'width':1000,'height':720})
 errs=[]
 page.on('pageerror',lambda e:errs.append(str(e)))
 page.evaluate("""() => {let map={};Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:k=>map[k]??null,setItem:(k,v)=>{map[k]=String(v)},removeItem:k=>{delete map[k]}}})}""")
 page.set_content(Path('/mnt/data/mindgarden-v3.2.17/city.html').read_text(),wait_until='domcontentloaded')
 page.wait_for_timeout(1100)
 print('title',page.title(), 'errors',errs[:2]);
 print('mission',page.locator('#dailyMission').inner_text()[:240]);
 print('road count',page.locator('[data-quick="road"]').count())
 state=page.evaluate('''() => eval('({day:city.day,index:city.missionIndex,issue:city.activeIssue&&city.activeIssue.type,mapSize:SIZE,helicopters:aircraftHubs.filter(h=>h.kind==="airport").length})')''')
 print('state',state)
 # Force a mission on existing road: IoT sensor, verify it is completable.
 a=page.evaluate('''() => eval(`(() => { const n=city.tiles.findIndex(t=>t==='road'); if(n<0)city.tiles[0]='road'; const i=n<0?0:n; city.missionIndex=0; city.missionPlan[0]='build_sensor'; city.activeIssue={day:city.day,type:'build_sensor',resolved:false,choice:-1,plot:-1,baseline:city.sensors.length};city.missionDueAt=0;reviewMissionIndex=null;selectedTool='road';renderUI();return i;})()`)''')
 print('sensor mission instructions',page.locator('#dailyMission').inner_text()[:240]);
 page.locator('#missionBuild').click()
 print('selected tool',page.evaluate('() => eval("selectedTool")'))
 page.evaluate(f'''() => eval(`build({a})`)''')
 print('after mission',page.evaluate('''() => eval('({index:city.missionIndex,issue:city.activeIssue&&city.activeIssue.resolved,due:city.missionDueAt>0})')'''))
 for lang in ['ms','zh','zt','en']:
  page.select_option('#cityLanguage',lang)
  print('language',lang,'mission',page.locator('#dailyMission').inner_text()[:55])
 page.screenshot(path='/mnt/data/mindgarden-v3.2.17-test.png')
 print('errors after',errs[:8])
 browser.close()
