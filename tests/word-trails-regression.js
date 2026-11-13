// Node/browser-neutral text source regression checks.
const fs=require('fs'),assert=require('assert');
const source=fs.readFileSync(require('path').join(__dirname,'..','index.html'),'utf8');
assert(source.includes('function wordAt('));
assert(source.includes('function helpfulWordHint('));
assert(!source.includes('if(g===0)hints.push(`${t(\'hint1\')} ${state.clue}`)'));
assert(source.includes('wordAt(state.lang,state.mode,n)'));
console.log('Word Trails code regression checks passed');
