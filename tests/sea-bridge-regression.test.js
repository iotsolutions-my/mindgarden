const fs=require('fs');const vm=require('vm');const html=fs.readFileSync(require('path').resolve(__dirname,'../city.html'),'utf8');
function extract(start,end){const a=html.indexOf(start);if(a<0)throw Error('missing start '+start);const b=html.indexOf(end,a+start.length);if(b<0)throw Error('missing end '+end);return html.slice(a,b)}
const code=[extract('function waterNeighbours(index','function makeCity()'),extract('function isRoadTile(type)','function utilityCoverage()'),extract('function roadNeighbours(i)','function refreshCars()'),extract('function build(i)','const BRIDGE_I18N='),extract('function expandCity(){','let city;try{')].join('\n');
const s=60,tiles=Array(s*s).fill('empty');const idx=(x,z)=>z*s+x;const city={tiles,signals:[],sensors:[],terrainCleared:[],budget:10000,autoSeaExpand:false};
const context={SIZE:s,city,COST:{road:80,bridge:480,sea:0},lang:'en',selectedTool:'road',T:{low:'not enough',undoNone:'none',removed:'removed',occupied:'occupied',roadOnly:'road only',sensorOnly:'sensor only'},BRIDGE_I18N:{en:{built:'bridge built',removed:'bridge removed',waterOnly:'sea required'}},COAST_I18N:{en:{cleared:'sea cleared',sea:'sea placed',occupied:'occupied'}},undoStack:[],focusTile:0,notify:(v)=>{},terrainAt:()=> 'plain',recalc:()=>{},checkBuildMission:()=>{},checkDailyMilestones:()=>{},save:()=>{},refreshCars:()=>{},renderUI:()=>{},navigableSea:null,Math,Set,Map,Number,JSON,Array,console};
vm.createContext(context);vm.runInContext(code,context);
const assert=(v,name)=>{if(!v)throw Error('FAIL '+name);console.log('PASS',name)};
city.tiles[idx(59,25)]='sea';city.tiles[idx(58,25)]='sea';city.tiles[idx(57,25)]='sea';city.tiles[idx(56,25)]='seaport';
const b0=city.budget;context.build(idx(58,25));assert(city.tiles[idx(58,25)]==='bridge','road on sea builds bridge');assert(city.budget===b0-480,'bridge price');
assert(context.navigableSea().has(idx(57,25)),'bridge maintains waterway to boundary');assert(context.portDock(idx(56,25),context.navigableSea())===idx(57,25),'seaport dock sea');const shipRoute=context.seaPath(idx(57,25),idx(59,25),context.navigableSea());assert(shipRoute.length===3&&shipRoute.every(i=>['sea','bridge'].includes(city.tiles[i])),'ship crosses only water/bridge');
city.tiles[idx(58,24)]='road';city.tiles[idx(58,26)]='road';assert(context.roadPath(idx(58,24),idx(58,26)).length===3,'bridge connects road traffic');
const b1=city.budget;context.selectedTool='bulldoze';context.build(idx(58,25));assert(city.tiles[idx(58,25)]==='sea','bulldozer restores sea');assert(city.budget===b1+216,'bridge demolition refund');
context.selectedTool='bridge';context.build(idx(58,24));assert(city.tiles[idx(58,24)]==='road','bridge tool refuses land');
// isolated sea should not be navigable
city.tiles=Array(s*s).fill('empty');city.tiles[idx(23,22)]='sea';assert(!context.navigableSea().has(idx(23,22)),'inland pond cannot create port');
// bridge at coast boundary must not create an open ocean by itself
city.tiles[idx(0,22)]='bridge';city.tiles[idx(1,22)]='sea';assert(!context.navigableSea().has(idx(1,22)),'coast must touch real sea boundary');
// Test expansion of a manually tailored coastline (autoSeaExpand=false).
const map=Array(s*s).fill('empty');
for(let i=0;i<70;i++)map[idx(12+i%10,12+Math.floor(i/10))]='home';
map[idx(59,24)]='sea';map[idx(58,24)]='bridge';map[idx(57,24)]='sea';map[idx(56,24)]='seaport';
city.tiles=map;city.autoSeaExpand=false;city.day=44;city.budget=16000;city.events=[];
context.NU={expandOK:'expanded'};context.MAX_CITY_SIZE=144;context.localStorage={setItem:()=>{}};context.view={zoom:17};
context.EXPAND_FEEDBACK={en:{limit:'limit',plots:'plots',funds:'funds'}};
// Assign SIZE to the VM global so expandCity can resize it.
context.expandCity();
const size2=context.SIZE,off=6;
const oldToNew=(x,z)=>(z+off)*size2+(x+off);
assert(size2===72,'map expands to 72x72');
assert(city.tiles[oldToNew(56,24)]==='seaport','existing seaport preserved');
assert(city.tiles[oldToNew(58,24)]==='bridge','existing bridge preserved');
assert(city.tiles[24+off<72?(24+off)*size2+71:-1]==='sea','customized right coast connects to new edge');
assert(city.day===44,'day preserved after expansion');
assert(context.navigableSea().has(oldToNew(57,24)),'shipping route remains accessible after expansion');
console.log('All unit checks completed.');
