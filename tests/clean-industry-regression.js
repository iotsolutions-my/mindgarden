// Node regression: node tests/clean-industry-regression.js
const fs=require('fs'),assert=require('assert'),vm=require('vm'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'../city.html'),'utf8');
const m=html.match(/function recalc\(\)\{([\s\S]*?)\n\}\s*\/\/ One meaningful decision per day/);
assert(m,'recalc block missing');
function world(clean=0,forests=0){
 const tiles=Array(1600).fill('empty');let k=0;
 const counts={home:70,apartment:28,condo:18,hospital:16,clinic:25,police:18,fire:8,waterplant:18,tower:24,substation:22,road:310,forest:forests,wetland:3,factory:32-clean,esgfactory:clean,warehouse:10,logistics:8,mall:5,shop:12,office:15,solar:7,windfarm:6,hydro:1,nuclear:1};
 for(const [type,n] of Object.entries(counts))for(let i=0;i<n;i++)tiles[k++]=type;
 const city={tiles,streetClosures:[],operations:[],signals:[],sensors:[],traffic:45,water:80,power:88,disruption:0,goodwill:0,mayorPolicy:'balanced',mayorDepartment:'balanced',mayorTax:'standard',mayorStrategy:'resilience'};
 const ctx={operationBenefit:()=>0,MAYOR_POLICIES:['balanced','transport','safety','tourism','housing','industry'],city,SIZE:40,clamp:(v,a,b)=>Math.max(a,Math.min(b,v)),count:type=>tiles.filter(t=>t===type).length,activeTreatmentCount:()=>18,adjacentPond:()=>true,utilityCoverage:()=>({plants:18,towers:24,depots:0,substations:22,hydroUnits:1,water:1,power:1,road:1,waterResidents:4500,powerResidents:4500,roadResidents:4500,totalPlants:18,totalSubstations:22}),subwayNetwork:()=>0,roadComponents:()=>[],nearRoadIndices:()=>[],navigableSea:()=>new Set(),validPort:()=>false,mayorFactor:()=>1,ensureMayorState:()=>{},Math,Number,Map};
 vm.createContext(ctx);vm.runInContext(m[0].replace(/\s*\/\/ One meaningful decision per day[\s\S]*$/,''),ctx);ctx.recalc();return ctx.city;
}
const conventional=world(0,5),converted=world(16,5),green=world(16,30);
assert(converted.pollution<conventional.pollution,'cleaner industries must reduce pollution');
assert(converted.jobs>conventional.jobs,'clean-tech conversion preserves and slightly expands jobs');
assert(converted.environmentDebug.topSources.some(s=>s.type==='esgfactory'),'clean tech is listed with residual emissions');
assert(green.pollution<converted.pollution,'forests mitigate pollution');
assert(Object.keys(green.pollutionZones).sort().join(',')==='ne,nw,se,sw','quad breakdown available');
for(const city of [conventional,converted,green])for(const k of ['pollution','ecoScore','health','power','water','jobs','safety','traffic'])assert(Number.isFinite(city[k]),'finite '+k);
assert(conventional.ecoScore<=Math.round(110-conventional.pollution*.48),'ESG must reflect environmental burden');
console.log('PASS: cleaner factory emissions, maintained jobs, mitigation, quadrants, finite indicators');
