const fs=require('node:fs'),assert=require('node:assert/strict'),vm=require('node:vm');
const src=fs.readFileSync(require('node:path').join(__dirname,'..','city.html'),'utf8');
function extract(start,end){const i=src.indexOf(start),j=src.indexOf(end,i);assert(i>0&&j>i,`missing ${start}`);return src.slice(i,j);}
const code=extract('const OPERATIONS={','function rng()');
// More focused extraction to avoid requiring browser DOM, while testing the exact game functions.
const snippet=code;
assert(src.includes("eventhall:3200,wtc:9500"));
assert(src.includes('function trafficNeighbours(i)'));
assert(src.includes('function renderOperations()'));
assert(src.includes("if(t==='eventhall')"));
assert(src.includes("if(t==='wtc')"));
assert(src.includes('city.streetClosures=[];city.operations=city.operations.map'));
assert(src.includes("streetFestival(issue.type,choice)"));
assert(src.includes("for(const next of trafficNeighbours(node))"));
assert(src.includes("for(const nxt of trafficNeighbours(cur))"));
const root={streetClosures:[],operations:[],budget:10000,tiles:Array(100).fill('empty')};
const ctx={city:root,SIZE:10,Math,Number,Set,Map,Array,Date,clamp:(v,a,b)=>Math.max(a,Math.min(b,v)),notify:()=>{},T:{low:'low'},lang:'en',pushNotification:()=>{},renderUI:()=>{},refreshCars:()=>{},save:()=>{},recalc:()=>{},eventReadinessHtml:()=>'',TWO:null};
// Evaluates operations + road functions in a test-only VM rather than executing the game UI.
let ops=code;
// Used function declarations are not called until test explicitly does so.
vm.createContext(ctx);
vm.runInContext(`function isRoadTile(t){return t==='road'||t==='bridge'};`+ops+"\n"+extract('function roadNeighbours(i)','function refreshCars()'),ctx);
function idx(x,y){return y*10+x}
for(let x=2;x<=6;x++){root.tiles[idx(x,3)]='road';root.tiles[idx(x,5)]='road';}
for(let y=3;y<=5;y++){root.tiles[idx(2,y)]='road';root.tiles[idx(6,y)]='road';}
root.tiles[idx(4,2)]='temple';root.tiles[idx(4,4)]='hall';
assert.equal(ctx.findCelebrationRoad('cny')>=0,true,'CNY event should find a road with detour');
const cut=ctx.findCelebrationRoad('cny');root.streetClosures.push(cut);
assert.equal(ctx.roadNeighbours(cut).length>0,true,'utility road graph remains connected');
assert.equal(ctx.trafficNeighbours(cut).length,0,'vehicles excluded from road closure');
ctx.operateCity('shuttle');assert.equal(root.budget,9680);assert.equal(ctx.operationBenefit('discount'),4);ctx.operateCity('shuttle');assert.equal(root.budget,9680,'same active project cannot be paid for twice');
ctx.operateCity('clinic');assert.equal(ctx.operationBenefit('health'),4);
assert.equal(ctx.eventAttendanceEstimate===undefined,true);
console.log('PASS: new facilities, cultural closure/detour, independent traffic routing, no duplicate project charges');
