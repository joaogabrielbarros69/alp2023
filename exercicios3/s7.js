let n = Number(prompt("digite um número"));
let r = n**(1/2);
let p = n**2;
r = Number(r);
p = Number(p);
if(n>=0){
    document.write(`√${n}≅${r.toFixed(1)}`);
}
else{
    document.write(`(${n})²=${p}`);
}


