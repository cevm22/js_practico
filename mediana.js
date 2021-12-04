let lista_mediana=[1,2,3,4];



function calcular_mediana(lista){
    //ordenar el vector de menor a mayor
    const vector=lista.sort(function(a,b){return a-b});
    console.log(vector);
    //buscar la mitad del vector
    const mitad_lista=(vector.length/2);
    //reondear a numero entero
    const impar= parseInt(mitad_lista);
    //en caso de que el vector sea de 2 valores    
    if (mitad_lista===1){
        const num_anterior=mitad_lista-1;
        return (vector[num_anterior] + vector[mitad_lista])/2;
    }else{
        //en caso de que el vector sea PAR, se calcula el promedio
        if(mitad_lista % 2 === 0){                            
            const num_anterior=mitad_lista-1;
            return (vector[num_anterior] + vector[mitad_lista])/2;
        //en caso de que el vector sea IMPAR se toma el valor medio
        }else{            
            return vector[impar];
        };
    }
};
