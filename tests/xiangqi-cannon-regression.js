// Run with: node tests/xiangqi-cannon-regression.js
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
for(const file of ['xiangqi.html','chess.html']){
 const html=fs.readFileSync(path.join(__dirname,'..',file),'utf8');
 const a=html.indexOf('const MGXiangqi=(()=>{'), z=html.indexOf('})();',a)+5;
 assert(a>=0&&z>a,'Xiangqi engine found');
 const eng=vm.runInNewContext(html.slice(a,z).replace('const MGXiangqi=',''),{});
 const mk=(positions,turn=1)=>{let b=Array(90).fill('.');positions.forEach(([r,c,p])=>b[r*9+c]=p);return {b,t:turn,full:21,half:0}};
 const generals=[[0,4,'k'],[9,4,'K']];
 // Without a screen, black cannon must NOT check red general.
 let noScreen=mk([...generals,[6,4,'c'],[4,3,'p']]);
 assert.equal(eng.attacked(noScreen,1),false,`${file}: cannon without screen`);
 assert(eng.legal(noScreen).length>0,`${file}: no-screen board has legal moves`);
 assert.equal(eng.result(noScreen),'');
 // Exactly one intermediate piece => cannon does check.
 let oneScreen=mk([...generals,[6,4,'c'],[8,4,'P'],[4,3,'p']]);
 assert.equal(eng.attacked(oneScreen,1),true,`${file}: cannon over one screen`);
 // Two pieces => cannot check.
 let twoScreens=mk([...generals,[6,4,'c'],[7,4,'P'],[8,4,'P'],[4,3,'p']]);
 assert.equal(eng.attacked(twoScreens,1),false,`${file}: cannon with two screens`);
 // Opposing generals must not be allowed to face directly.
 assert.equal(eng.attacked(mk(generals),1),true,`${file}: flying general`);
 // Reproduce the user screenshot at move #21.
 let screenshot=mk([
 [0,2,'e'],[0,3,'a'],[0,4,'k'],[0,5,'a'],[0,6,'e'],[0,7,'r'],
 [1,4,'h'],[2,0,'r'],[2,6,'h'],[3,1,'C'],[3,2,'p'],[3,4,'p'],[3,6,'p'],[3,7,'C'],
 [4,0,'p'],[4,8,'p'],[5,2,'P'],[5,5,'H'],[5,6,'P'],[6,0,'P'],[6,4,'c'],[6,8,'P'],
 [9,1,'R'],[9,2,'E'],[9,3,'A'],[9,4,'K'],[9,5,'A'],[9,6,'E'],[9,7,'R']]);
 assert.equal(eng.attacked(screenshot,1),false,`${file}: screenshot not check`);
 assert(eng.legal(screenshot).length>0,`${file}: red has legal moves`);
 assert.equal(eng.result(screenshot),'',`${file}: no incorrect Black wins`);
 // Ensure standard initial position has 44 legal moves.
 assert.equal(eng.legal(eng.init()).length,44,`${file}: opening legal count`);
 console.log(file+': Xiangqi cannon / screenshot tests PASS');
}
