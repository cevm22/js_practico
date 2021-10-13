console.log("RETO TALLER 1 - TRIANGULO ISOSCELES");
// formula para calculo de triangulo isosceles
//h = sqrt((a^2)-((b^2)/4))

function calcular_altura_isosceles(){
    const ladoA=document.getElementById("lado1");
    const ladoB=document.getElementById("lado2");
    const ladoC=document.getElementById("lado3");
    const valueA=Number(ladoA.value);
    const valueB=Number(ladoB.value);
    const valueC=Number(ladoC.value);

    if ((valueA == valueB)&&(valueA>valueC)){
        //valueC es la base
        formula(valueA,valueC);
        return;
    }if ((valueA == valueC)&&(valueA>valueB)){
        //valueB es la base
        formula(valueA,valueB);
        return;
    }if ((valueC == valueB)&&(valueC>valueA)){
        //valueA es la base
        formula(valueC,valueA);
        return;

    }else{
        alert("NO ES UN TRIANGULO ISOSCELES")
    }
    
}

function formula(side,base){
    const h = Math.sqrt((side**2)-((base**2)/4))
    alert("La altura es "+h)
}
