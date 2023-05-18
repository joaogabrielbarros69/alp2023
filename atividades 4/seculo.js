let a = Number(prompt("digite um ano"));
let a2 = a/100;
let s = a%100;
let a3 = a2+1;

if(s==0){
    document.write(`o ano ${a} está no secúlo ${Math.floor(a2)}`);
}
else{
    document.write(`o ano ${a} está no secúlo ${parseInt(a3)}`);    
}
