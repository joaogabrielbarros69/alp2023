let n1 = Number(prompt("digite um número"));
let n2 = Number(prompt("digite outro número"));
let n3 = Number(prompt("digite outro número"));
if(n1=n2=n3){
    document.write(`os seus números são iguais`);
}                           
else if(n1>n2 && n1>n3){
    document.write(`o maior número é o ${n1}`);
}
else if(n2>n1 && n2>n3){
    document.write(`o maior número é o ${n2}`);
}
else if(n3>n1 && n3>n2){
    document.write(`o maior número é o ${n3}`);
}