var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let phrase = epic.reduce((a,b) => { return a+' '+ b; });

console.log(phrase)