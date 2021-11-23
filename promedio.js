const lista=[100,200,400,500];

//Sumar los valores dentro del vector "lista" de manera a codigo manual sin metodos
function calcular_prom_manual(lista){
let suma_lista=0;
//se suman los valores 1 a 1
for (let i=0; i<lista.length; i++){
    suma_lista=suma_lista+lista[i];
}
//sacar calculo del promedio
const promedio_lista = suma_lista/lista.length;
//retornar el resultado
return promedio_lista;
}

//el metodo .reduce() suma todos los elementos dentro de un array