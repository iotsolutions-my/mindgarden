// Run: node tests/health-pollution-regression.js
const fs=require('fs'),assert=require('assert'),vm=require('vm');
const html=fs.readFileSync(require('path').join(__dirname,'../city.html'),'utf8');
const block=html.match(/function recalc\(\)\{([\s\S]*?)\n\}\s*\/\/ One meaningful decision per day/);
assert(block,'recalc block missing');
function world(opts={}){
 const tiles=Array(1600).fill('empty');let k=0;for(const [type,n] of Object.entries({home:95,apartment:35,condo:27,hospital:opts.hospitals??8,clinic:opts.clinics??12,police:12,fire:6,waterplant:15,tower:18,substation:24,road:310,forest:opts.forests??12,wetland:opts.wetlands??3,factory:opts.factories??18,warehouse:opts.warehouses??15,logistics:12,mall:8,shop:18,office:20,solar:7,windfarm:4,...opts.extra}))for(let i=0;i<n;i++)tiles[k++]=type;
 const city={tiles,streetClosures:[],operations:[],signals:[],sensors:[],traffic:65,water:85,power:80,disruption:0,goodwill:0,mayorPolicy:'balanced',mayorTax:'standard',mayorDepartment:'balanced',shippingRoutes:0,portConnected:false};
 const ctx={operationBenefit:()=>0,MAYOR_POLICIES:['balanced','transport','safety','tourism','housing','industry'],city,SIZE:40,clamp:(v,a,b)=>Math.max(a,Math.min(b,v)),count:t=>tiles.filter(x=>x===t).length,activeTreatmentCount:()=>15,adjacentPond:()=>false,utilityCoverage:()=>({plants:15,towers:18,depots:0,substations:24,hydroUnits:0,water:opts.waterCoverage??1,power:opts.powerCoverage??1,road:opts.roadCoverage??1,waterResidents:6000,powerResidents:6000,roadResidents:6000,totalPlants:15,totalSubstations:24}),subwayNetwork:()=>0,roadComponents:()=>[],nearRoadIndices:()=>[],navigableSea:()=>new Set(),validPort:()=>false,mayorFactor:()=>1,ensureMayorState:()=>{},Math,Number,Map};
 vm.createContext(ctx);vm.runInContext(block[0].replace(/\s*\/\/ One meaningful decision per day[\s\S]*$/,''),ctx);ctx.recalc();return ctx.city;
}
const base=world();assert(Number.isFinite(base.health));assert(Number.isFinite(base.safety));assert(Number.isFinite(base.traffic));assert(Number.isFinite(base.pollution));
const shortage=world({hospitals:1,clinics:1});const improved=world({hospitals:3,clinics:5});assert(improved.health>shortage.health,'health should respond to new care facilities when underserved');
const dirty=world({factories:42,warehouses:28,forests:0,wetlands:0});const cleaner=world({factories:42,warehouses:28,forests:35,wetlands:18});assert(cleaner.pollution<dirty.pollution,'green mitigation should reduce pollution');assert(cleaner.health>dirty.health,'cleaner environment should increase health');
const aboveDemand=world({hospitals:70,clinics:65});assert(aboveDemand.healthDebug.oversupplied,'should identify surplus medical capacity');assert(base.pollution<100,'moderate-density city should not auto saturate pollution');
const unsafe=world({extra:{police:1,fire:1}});const safe=world({extra:{police:18,fire:10}});assert(safe.safety>unsafe.safety,'police and fire service should improve safety when undersupplied');
const weakWater=world({waterCoverage:.45});const strongerWater=world({waterCoverage:1});assert(strongerWater.water>weakWater.water,'better water coverage should improve utility percentage');assert(strongerWater.health>weakWater.health,'health should respond to reliable water');
const busy=world({extra:{road:70,transport:0}});const mobilised=world({extra:{road:310,transport:22}});assert(mobilised.traffic<busy.traffic,'transport capacity should reduce congestion');
for(const c of [base,shortage,improved,dirty,cleaner,aboveDemand,unsafe,safe,weakWater,strongerWater,busy,mobilised])for(const k of ['health','safety','traffic','water','power','pollution','happy','tourists','ecoScore'])assert(Number.isFinite(c[k])&&c[k]>=0,'bad indicator '+k);
console.log('PASS: medical, environmental, safety, water, transport, saturation, finite indicators');
