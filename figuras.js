console.log("hello world");

//comando para comentar= CTRL + K + C 
//comando para quitar comentarios= CTRL + K + U 
//el console.group("nombre"), se utiliza al inicio y al final console.groupEnd(); se utiliza al final. Esta funcion tiene como finalidad agrupar los mensajes en la consola y no se mezclen con los demás.

//Este es el código del cuadrado
console.group("CUADRADOS");
const ladocuadrado = 5; //se usa porque no va cambiar la variable
//console.log("Los lados del cuadrado miden: "+ ladocuadrado + "cm");

function perimetrocuadardo(lado){
return lado * 4;
}

//console.log("El perimetro del cuadrado: "+ perimetrocuadardo + "cm");

function areacuadrada(lado){
    return lado*lado;
} 

//console.log("El Area del cuadrado: "+ areacuadrada + "cm^2");

console.groupEnd();
//Este es el código del triangulo
console.group("TRIANGULOS");
// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const basetriangulo = 4;

//Lo siguiente se le llama Identación, que es cuando das brinco de linea de codigo para hacer caber el codigo y sea más visible
// console.log("Los lados del triángulo miden: " 
// + ladotriangulo1 
// + " cm, " 
// + ladotriangulo2 
// + " cm, "
// + basetriangulo 
// + " cm"
// );
//const alturatriangulo = 5.5;

//console.log("La altura del triángulo: " 
//+ alturatriangulo
//+ " cm" );

function perimetrotriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
}

//console.log("El perimetro del tríangulo es :" + perimetrotriangulo + " cm");

function areatriangulo(base,altura){
return (base * altura)/2;
} 

//console.log("El área del tríangulo es: " + areatriangulo + "cm^2")
console.groupEnd();

//Codigo de circulos
console.group("CIRCULOS");
// const radiocirculo = 4;
// console.log("el radio del circulo es: " + radiocirculo + "cm");
function diametrocirculo(radio){
return radio*2;
}
// console.log("El diametro del Circulo " + diametro + "cm");
//la libreria Math es una ayuda para hacer algunos procesos matematicos comunes como PI
const PI= Math.PI; 
//console.log("El PI del Circulo es: " + PI + "cm");
function perimetrocirculo(radio){
    const diametro=diametrocirculo(radio);
    return diametro * PI;
} 

//console.log("El perimetro del Circulo  es: " + perimetrocirculo + "cm");
function areacirculo(radio){
    return(PI* (radio**2));
}
//console.log("El área del Circulo es: " + areacirculo + "cm^2");

console.groupEnd();

////////////////////////////////////////////////////
//aquí se interactúa con el HTML
//===================================================
//seccion del cuadrado

function calcular_perimetro_cuadrado(){
    //aquí mandas a buscar el input con el ID que se ingresó en HTML 
    const input =document.getElementById("input_cuadrado");
    //para acceder al valor del input de HTML hay que colocar ".value" al final de la variable
    const val = perimetrocuadardo(input.value);
    alert(val);
}

function calcular_area_cuadrado(){
    const input =document.getElementById("input_cuadrado");    
    const val = areacuadrada(input.value);
    alert(val);
}
//===================================================
//seccion del triángulo

function calcular_perimetro_triangulo(){    
    const base =document.getElementById("input_triangulo_base");        
    const lado1_= document.getElementById("input_triangulo_lado1");
    const lado2_= document.getElementById("input_triangulo_lado2");
    const valuebase= Number(base.value);
    const valuelado1= Number(lado1_.value);
    const valuelado2= Number(lado2_.value);
    result=perimetrotriangulo(valuelado1,valuelado2,valuebase);
    alert(result);
}

function calcular_area_triangulo(){
    const altura = document.getElementById("input_triangulo_altura");
    const base =document.getElementById("input_triangulo_base");   
    const valuebase= Number(base.value);
    const valuealtura= Number(altura.value);
    result=areatriangulo(valuebase,valuealtura);
    alert(result);
}


//===================================================
//seccion del circulo

function calcular_area_circulo(){
    const radio = document.getElementById("input_radio_circulo");    
    result=areacirculo(Number(radio.value));
    alert(result);
}

function calcular_perimetro_circulo(){
    const radio = document.getElementById("input_radio_circulo");    
    result=perimetrocirculo(Number(radio.value));
    alert(result);
}