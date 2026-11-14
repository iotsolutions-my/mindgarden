const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const s=fs.readFileSync(path.join(__dirname,'..','city.html'),'utf8');
const a=s.indexOf('const EVENT_VENUES=');const b=s.indexOf('function finishMission(',a);
assert(a>0&&b>a);
const make=(counts,pop=6684,visitors=2750,traffic=37,safety=94)=>{
 const city={population:pop,tourists:visitors,traffic,safety,utilityDebug:{roadCoverage:98}};
 return new Function('city','count','lang','return (function(){'+s.slice(a,b)+';return {eventAttendanceEstimate,eventReadinessHtml};})()')(city,k=>counts[k]||0,'en');
};
const model=make({road:400,park:12,sports:3,hall:1,arena:2,eventhall:2,wtc:1});
for(const type of ['merdeka','cny','raya','thaipusam','deepavali','openhouse']){
 const e=model.eventAttendanceEstimate(type,1);
 assert(e.publicEvent,`${type} uses public event model`);
 assert(e.attendance>400,`${type} doesn't get locked at 75 attendees`);
 assert.equal(e.residentAttendees+e.visitorAttendees,e.attendance);
 assert(e.safeCapacity>=e.attendance);
 assert(!model.eventReadinessHtml(type).includes('Relevant venues'),`${type} readiness not venue based`);
}
const all=model.eventAttendanceEstimate('merdeka',1);
assert(all.attendance>1000, 'Large city public festival draws a crowd');
const small=make({road:20,park:1},300,40).eventAttendanceEstimate('merdeka',1);
assert(small.attendance<all.attendance,'crowd scales with population and visitors');
const exhibition=model.eventAttendanceEstimate('expo',1);
assert.equal(exhibition.attendance,Math.round(Math.min(75,exhibition.demand)*.88*Math.min(1,.94)*1),'Expo keeps temporary venue cap');
const noHalls=make({road:400,park:10},6684,2750).eventAttendanceEstimate('merdeka',1);
assert(noHalls.attendance>1000,'Outdoor public festival works without halls');
console.log('Public festival regression tests passed, Merdeka expected attendance:',all.attendance, 'small-town:',small.attendance);
