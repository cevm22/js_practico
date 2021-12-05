const lista_moda=[1,4,1,2,2,2,2,7,2,1,9,3,3,1];

function moda_claseplatzi(lista){
    //comando para comensar timer y ver cual método es más rápido
    console.time('CLASE');
    //se inicializa la variable para crear un objeto temporal
    const nuevalista={};
    //se hace una lista tipo objeto donde indica el numero y sus veces repetidas ej: {"1":4, "2":1}
    lista.map(function (elemento){
        if (nuevalista[elemento]){
            nuevalista[elemento] += 1;
        }else{
            nuevalista[elemento]=1;
        }});
    //el objeto anterior se pasa a formato array y se ordena de menor a mayor
    const new_array=Object.entries(nuevalista).sort(
        function (elemento_A,elemento_B){            
        return (elemento_A[1]-elemento_B[1]);
        });
    //termina el timer 
    console.timeEnd('CLASE');
    //retorna el ultimo valor del array, que en este caso sería la MODA
    return new_array[new_array.length-1][0];

};

//este es el metodo para obtener la MODA de manera compacta por medio del modulo filter
function moda_aporte(arr){
    console.time('APORTE');
    const a= arr.sort((a,b) =>
        arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
    console.timeEnd('APORTE');
    return a
};

//activar las dos funciones al mismo tiempo para ver los tiempos de ejecución
function test(){
    console.log(moda_claseplatzi(lista_moda));
    console.log(moda_aporte(lista_moda));
}