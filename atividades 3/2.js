let v1 = Number(prompt("digite o valor de um produto"));
let v2 = Number(prompt("digite o valor do outro produto"));
let q1 = Number(prompt("digite a quantidade do valor do 1 produto"));
let q2 = Number(prompt("digite a quantidade do valor do 2 produto"));
let ipi = Number(prompt("digite o ipi"));
let p = (v1*q1+v2*q2)*(ipi/100+1);
document.write(`o valor final será ${p}`);