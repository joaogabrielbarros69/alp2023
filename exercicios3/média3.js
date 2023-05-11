let n1 = Number(prompt("digite a sua 1° nota"));
let n2 = Number(prompt("digite a sua 2° nota"));
let n3 = Number(prompt("digite a sua 3° nota"));
let me = (n1+n2+n3)/3;
if(me>=7){
    document.write(`a sua média foi ${me.toFixed(2)}, e você está aprovado`);
}
else if(me<7 && me>=5){
    alert(`a sua média foi ${me.toFixed(2)}, e você está de recuperação`);   
    let rec = Number(prompt("digite a sua nota de recuperação"));
    if(rec>=5){
        document.write("parabéns, você passou na recuperação");
    }
    else{
        document.write("infelizmente, você não passou na recuperação")
    }
}
else if(me<5){
    document.write(`a sua média foi ${me.toFixed(2)}, e você está reprovado`);
}
                                                                        