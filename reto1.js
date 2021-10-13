console.log("RETO TALLER 1 - TRIANGULO ISOSCELES");

//h = sqrt((a^2)-((b^2)/4))

function calcular_altura_isosceles(){
    const ladoA=document.getElementById("lado1");
    const ladoB=document.getElementById("lado2");
    const ladoC=document.getElementById("lado3");
    const valueA=ladoA.value;
    const valueB=ladoB.value;
    const valueC=ladoC.value;

    if (valueA == valueB){
        //valueC es la base
        formula(valueA,valueC);
    }if (valueA == valueC){
        //valueB es la base
        formula(valueA,valueB);

    }if (valueC==valueB){
        //valueA es la base
        formula(valueC,valueA);

    }else{
        alert("NO ES UN TRIANGULO ISOSCELES")
    }
    
}

function formula(side,base){
    const h = Math.sqrt((side^2)-((base^2)/4))

    alert("La altura es "+h)
}
