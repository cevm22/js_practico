//... Variables y operaciones
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
//
//¿Qué es una variable y para qué sirve?
//Es un espacio que se crea dentro de la memoria y se utiliza para almacenar informacion y poder acceder a ella más rápido.
//¿Cuál es la diferencia entre declarar e inicializar una variable?
//Declarar: es cuando determinas que tipo de dato se va utilizar y como se va llamar para acceder a ella
//inicializar: es cuando le asignas un dato, ya sea vacío o con información
//¿Cuál es la diferencia entre sumar números y concatenar strings?
//sumar números: es cuando se hace operaciones matematicas como 2+2= 4, etc.
//concatenar string: es cuando unes variables/texto por medio del operador "+"
//¿Cuál operador me permite sumar o concatenar?
//el operador más "+"

//2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

var Nombre = "cristian";
var Apellido = "valencia";
var Platzi_User = "cevm22";
var Edad = 28;
var Email="cevm.12293@hotmail.com"
var Mayoria_edad = Boolean;
var Dinero_Ahorrado = 0;
var Deudas = 100;

//3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
//listo

//4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//````` 
//Nombre completo (nombre y apellido)
//Dinero real (dinero ahorrado menos deudas)

function nombre_completo (nombre,apellido){
    console.log(`Hola  ${nombre} ${apellido}`);    
}
////////////////////////////////////////////////////////////////////
//Funciones
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
//
//¿Qué es una función?
//Conjunto de pasos para que genere una tarea a realizar en los equipos.
//¿Cuándo me sirve usar una función en mi código?
//Sirve para automatizar procesos repetitivos, hacer calculos complejos, etc
//¿Cuál es la diferencia entre parámetros y argumentos de una función?
//Parámetros: son las variables que se necesitan para poder ejecutar la funcion y no es obligatorio usarse function myfunction(param1,param2){console.log(`hi ${param1} and ${param2}`)}
//Argumentos: Son los valores que das/pasas cuando mandas llamar una funcion para ejectuarlo myfunction("cris","mtz"). En el caso anterior los strings "cris" y "mtz" son los ARGUMENTOS
//2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

//const name = "Juan David";
//const lastname = "Castro Gallego";
//const completeName = name + lastname;
//const nickname = "juandc";

//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
////////////////////////////////////////////////////////////////////
//Condicionales
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:
//
//¿Qué es una condicional?
// Es cuando haces comparaciones para que tu funcion haga un trabajo, dependiendo si se cumple o no.
//¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
// IF, SWITCH CASE, operadores ternarios
//¿Puedo combinar funciones y condicionales?
//Es posible y lo más utilizado
//2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

var tipo_sub="Free"
function suscripcion(Tipo){
    if (Tipo == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }
    else if (Tipo == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    else if (Tipo == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    else{
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }

}

//3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
//es lo mismo, solo se usa IFs
//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏
var Suscripciones = [["Free", "Solo puedes tomar los cursos gratis"], ["Basic", "Puedes tomar casi todos los cursos de Platzi durante un mes"], ["Expert", "Puedes tomar casi todos los cursos de Platzi durante un año"], ["ExpertPlus", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]];

function sub_array(tipo){
    for (var pos of Suscripciones){
        
        if(pos[0]==tipo){
            console.log(pos[1]);
        }
    }
}
///////////////////////////////////////////////////////////////
//Ciclos
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es un ciclo?
//¿Qué tipos de ciclos existen en JavaScript?
//For, While, do-while
//¿Qué es un ciclo infinito y por qué es un problema?
//Es cuando obligas a una funcion que siempre esté corriendo y nunca para. El problema es que el equipo se queda realizando la funcion y no permite que se ejecuten otras más, ya que no hay una condicion que la haga terminar/entregar un resultado
//¿Puedo mezclar ciclos y condicionales?
//si, es muy comun hacerlo
//2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
///////
var fin=5;
var i = 0;
var limite=2
var i2=10
while(i<fin) {
    console.log("el valor i es: " + i);
    i++;
}
while(i2>=limite) {
    console.log("el valor i es: " + i2);
    i2--;
}

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
//
//Pista: puedes usar la función prompt de JavaScript.

var respuesta=0;
do{
    respuesta= prompt('cual es la suma de 2 + 2 ?')
}while(!(respuesta==4))
//////////////////////////////////////////////////////////////////////////
//Listas
//1️⃣ Responde las siguientes preguntas en la sección de comentarios:

//¿Qué es un array?
//estructura de datos que guarda una estructura de datos como si fuera una lista de 1 a n dimensiones [1,2,"sddf",[1,"sdf"]], se pueden almacenar objetos dentro de array
//¿Qué es un objeto?
//Es cuando una variable comienza a tener "propiedades", en donde "miAuto" es una variable y se le define como objeto por medio de "{}", y las propiedades son "marca,modelo,año" y sus valores son "Toyota, Corolla,2020"
var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
}
//¿Cuándo es mejor usar objetos o arrays?
// el array es una lista, el cual accedes a ella por medio de la posicion donde se encuentra el valor que necesitas y un objeto se accede por medio de la propiedad/variables, por lo que depende de la tarea que se necesite realizar ya que un metodo puede ser más rapido que el otro
//¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
//si es posible
//2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
var vec=[0,1,2,3]
function imprimir_vector(vector){
    console.log(vector[0]);
}
//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimir_vector_completo(vector){
    for(var i=0; i<vector.length; i++){
        console.log(vector[i]);
    }
}
//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function imprimir_objeto(objeto){
    for (var propiedad in objeto){
        console.log(`Este es la propiedad > ${propiedad} y este es su valor > ${objeto[propiedad]}`)
    }
}
// Tomando de ejemplo el objeto anterior "miAuto" la propiedad es "marca" y su valor es "Toyota", lo cual con el ciclo FOR, se declara la variable "propiedad" y tomará cada uno de las posiciones (marca,modelo,año), para poder acceder al valor, es necesario indicar "objeto" (que es el que se le pasa a la funcion, en este caso "miAuto") y posteriormente [propiedad] (con este accedes directo a la variable, como si se estuviese llamando de manera independiente) el cual te mostrará (Toyota, Corrola, 2020)

