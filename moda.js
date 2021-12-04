const lista_moda=[1,4,1,2,2,7,2,9,3,3,1];

function moda_claseplatzi(lista){
    const nuevalista={};
    const mapped=lista.map(function (elemento){
        if (nuevalista[elemento]){
            nuevalista[elemento] += 1;
        }else{
            nuevalista[elemento]=1;
        }

    }
    );

};

function moda_aporte(lista){

};
