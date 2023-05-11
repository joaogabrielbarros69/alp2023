let n1 = Number(prompt("digite sua 1° nota"));
let n2 = Number(prompt("digite a sua 2° nota"));
let me = (n1+n2)/2;
if(me>=7){
    document.write(`a sua média foi ${me}, e você está aprovado`);
}
else{
    document.write(`a sua média foi ${me}, e você foi reprovado`);
}