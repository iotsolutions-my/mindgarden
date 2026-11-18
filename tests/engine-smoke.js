const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
function load(file,key){let x=vm.createContext({});let t=fs.readFileSync(path.join(__dirname,'..',file),'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];vm.runInContext(t+'\nthis.ex='+key,x);return x.ex;}
let c=load('chess.html','MGChess'),x=load('xiangqi.html','MGXiangqi');
let s=c.init();assert.equal(c.legal(s).length,20);assert.equal(s.b[115],'Q');assert.equal(s.b[3],'q');
function playCoord(state,engine,from,to,prom=''){let m=engine.legal(state).find(m=>m.f===from&&m.to===to&&(m.prom||'')===prom);assert(m,`not legal ${from}->${to}`);return engine.put(state,m)}
const at=(file,rank)=>(8-rank)*16+'abcdefgh'.indexOf(file);
// Fool's mate
s=playCoord(s,c,at('f',2),at('f',3));s=playCoord(s,c,at('e',7),at('e',5));s=playCoord(s,c,at('g',2),at('g',4));s=playCoord(s,c,at('d',8),at('h',4));assert(c.result(s).includes('checkmate'));console.log('Western chess fool\'s mate: OK');
// Castling and en-passant
s=c.init();for(let [a,b] of [['e2','e4'],['e7','e5'],['g1','f3'],['b8','c6'],['f1','c4'],['g8','f6']])s=playCoord(s,c,at(a[0],+a[1]),at(b[0],+b[1]));assert(c.legal(s).some(m=>m.flag==='castle'));console.log('Western castling:', 'OK');
s=c.init();for(let [a,b] of [['e2','e4'],['a7','a6'],['e4','e5'],['d7','d5']])s=playCoord(s,c,at(a[0],+a[1]),at(b[0],+b[1]));assert(c.legal(s).some(m=>m.flag==='ep'));console.log('Western en passant: OK');
let z=x.init();assert.equal(x.legal(z).length,44);let cleared={b:Array(90).fill('.'),t:1,full:1,half:0};cleared.b[x.idx(9,4)]='K';cleared.b[x.idx(0,4)]='k';assert(x.attacked(cleared,1),'flying generals must be check');cleared.b[x.idx(5,4)]='P';assert(!x.attacked(cleared,1),'pawn blocks generals');console.log('Xiangqi flying general: OK');
// cannons jump exactly one screen to capture
let cannon={b:Array(90).fill('.'),t:1,full:1,half:0};cannon.b[x.idx(9,4)]='K';cannon.b[x.idx(0,3)]='k';cannon.b[x.idx(7,0)]='C';cannon.b[x.idx(5,0)]='P';cannon.b[x.idx(2,0)]='r';assert(x.legal(cannon).some(m=>m.f===x.idx(7,0)&&m.to===x.idx(2,0)),'cannon capture screen');cannon.b[x.idx(5,0)]='.';assert(!x.legal(cannon).some(m=>m.f===x.idx(7,0)&&m.to===x.idx(2,0)),'cannon cannot capture without screen');console.log('Xiangqi cannon rule: OK');
// xiangqi elephant cross river prohibited
z=x.init();assert(x.legal(z).filter(m=>z.b[m.f]==='E').every(m=>Math.floor(m.to/9)>=5));console.log('Xiangqi elephant river: OK');
// 50 random games of 25 moves both
for(let [e,n] of [[c,'western'],[x,'xiangqi']]){for(let j=0;j<50;j++){let p=e.init();for(let k=0;k<25;k++){let m=e.legal(p);if(!m.length)break;p=e.put(p,m[(j*31+k*13)%m.length])}}console.log(n,'50 playouts: OK')}
