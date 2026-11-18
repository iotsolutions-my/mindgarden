// Test the actual extracted game functions in a small mocked DOM.
const fs=require('fs'), assert=require('assert'), vm=require('vm');
const html=fs.readFileSync(require('path').join(__dirname,'../city.html'),'utf8');
function fn(name,next){const a=html.indexOf('function '+name+'('), b=html.indexOf('function '+next+'(',a);assert(a>=0&&b>a,name+' missing');return html.slice(a,b)}
const diag=html.slice(html.indexOf('const TRAFFIC_GOAL_STATUS='),html.indexOf('function renderDevelopmentDiagnostic('));
const check=fn('checkDailyMilestones','renderDailyMilestones');
const el={innerHTML:'',querySelectorAll:()=>[]};
const city={day:66,traffic:19,budget:1000,mayorPolicy:'transport',mayorDepartment:'transport',trafficDebug:{demand:2780,capacity:2107,fuelReliability:100,connectedFuel:12,connectedTaxi:0,policyDiscount:13},dailyMilestones:{day:66,goals:[{kind:'traffic',target:19,done:false}],awarded:0}};
const q={traffic:'Congestion diagnostics',current:'Current congestion',target:'Milestone target',gap:'Reduction still needed',demand:'Traffic demand',capacity:'Transport capacity',power:'Power shortage',policy:'Transport reduction',influence:'estimated',warning:'warning',actual:'after construction',road:'Road',bus:'Bus',station:'Subway',signal:'Signal',estimate:'Estimate',transport:'Transport'};
const ctx={city,lang:'en',PLANNING_COPY:{en:q},TAXI_LANG:{en:'Taxi'},L:{en:{petrol:'Petrol'}},$:()=>el,ensureDailyMilestones:()=>{},mayorFactor:()=>1,clamp:(v,a,b)=>Math.max(a,Math.min(b,v)),predictCongestion:()=>19,selectPlanningTool:()=>{},MAYOR_POLICIES:['balanced','transport'],Number,Math,DC:{done:'Done'},pushNotification:()=>{},currentCount:()=>0,metricValue:()=>0};
vm.createContext(ctx);
vm.runInContext(diag+'\n'+check,ctx);
ctx.checkDailyMilestones();assert.equal(city.budget,1120,'award on achievement');assert.equal(city.dailyMilestones.goals[0].achievedValue,19);
ctx.checkDailyMilestones();assert.equal(city.budget,1120,'reward only once');
ctx.renderTrafficDiagnostic();assert(el.innerHTML.includes('19%')&&el.innerHTML.includes('Milestone already completed'));
city.traffic=25;city.trafficDebug.demand=2690;city.dailyMilestones={day:67,goals:[{kind:'traffic',target:24,done:false}],awarded:0};city.day=67;
ctx.renderTrafficDiagnostic(19);assert(el.innerHTML.includes('25%'),'live traffic');assert(el.innerHTML.includes('24%'),'current target');assert(!el.innerHTML.includes('Milestone already completed'),'new goal not completed');
city.traffic=23;ctx.checkDailyMilestones();ctx.renderTrafficDiagnostic();assert(el.innerHTML.includes('23%'));assert.equal(city.dailyMilestones.goals[0].achievedValue,23);assert.equal(city.budget,1240);
city.traffic=26;ctx.renderTrafficDiagnostic();assert(el.innerHTML.includes('26%'));assert(el.innerHTML.includes('23%'));assert.equal(city.budget,1240);
city.dailyMilestones={day:68,goals:[{kind:'build',key:'park',baseline:0,done:false}],awarded:0};city.day=68;ctx.renderTrafficDiagnostic();assert.equal(el.innerHTML,'','old diagnostic cleared when no traffic goal');
console.log('PASS: live score, current target, new day, milestone snapshot, no repeat reward, old panel removed');
