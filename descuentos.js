console.log("TALLER 2 - DESCUENTOS");


function precio_con_descuento(){
    const precio_inicial=document.getElementById("precio_inicial");
    const descuento=document.getElementById("descuento");    
    const descuento_aplicado=(1-(Number(descuento.value)/100));
    const precio_final=(Number(precio_inicial.value)*descuento_aplicado);
    //Agrupas un resultado en forma de objeto con los {}
    console.log({
        precio_inicial,
        descuento,
        descuento_aplicado,
        precio_final
    });
    
    //Para mandar texto al HTML se debe de colocar ID a los tags, en este caso el tag <p></p> para despues
    //vincularlo con una variable -> "const texto=document.getelementbyId("nombre_ID_colocado_HTML");"
    //y al final se manda con -> "texto.innerText"
    const show_inicial_price=document.getElementById("Precio_inicial_text");
    const show_descuento=document.getElementById("Descuento_aplicado");
    const show_result= document.getElementById("resultdo");
    
    show_inicial_price.innerText="Precio del producto SIN descuento: " + precio_inicial.value;
    show_descuento.innerText="Descuento a aplicar: " +descuento.value;
    show_result.innerText="El precio con descuento es de: $" + precio_final;   
}

/////////////////////////////////
//Reto de funcion inteligente
const cupones=[{
    name:"cupon_1",
    discount:15,
    },
    {
    name:"cupon_2",
    discount:30,
    },
    {
    name:"cupon_3",
    discount:30,
    }
];

//esta funcion es para el calculo del porcentaje
function cupones_descuento(precio,descuento){
    const desc=1-(descuento/100);
    const precio_con_descuento=desc*precio;
    return precio_con_descuento;
}


function onClick(){
    //se obtiene la informacion del HTML con la extension .value
    const precio_inicial=document.getElementById("precio_inicial_2");
    const precio_value=Number(precio_inicial.value); //se debe declarar que es numero, porque por defecto lo toma como texto
    const cupon_word=document.getElementById("descuento_cupon");     
    const cupon_value=(cupon_word.value);


    //Funcion inteligente, en este caso se usa una variable funcion, en donde se hace la comparativa del input del codigo cupon del HTML con respecto a un objeto que contiene la lista de cupones disponibles
    const validacion_cupon = function(cupon){
        //"cupon", es el objeto que se le pasa y ".name" es la propiedad que se busca
        //cupon_value es el "codigo cupon" que el usuario ingresa en el html
        //aqui lo que sucede es que hace la comparacion que sean iguales, y retorna la busqueda o undefined
        return cupon.name === cupon_value;
    }

    //aqui toma el objeto "cupones" y se utiliza el metodo ".FIND", llamando a la funcion "validacion_cupon" en donde se le pasa el parametro por defecto el objeto "cupones" y ahi es donde nos regresara True o False.
    const descuento = cupones.find(validacion_cupon);

        //compara el codigo ingresado y si NO encuentra nada regresa "UNDEFINED", significa que no existe algun cupon en el objeto donde se encuentran almacenados los codigos de descuento
    if (!descuento){
        alert("ESTE CUPON > " + cupon_value + " No es valido");
    }else{
        //como la validacion fue TRUE, significa que si existe un cupon con descuento
        // se manda a llamar la funcion donde sale el calculo del precio con el descuento aplicado.
        // al mismo tiempo "descuento.discount" vuelve a la funcion variable en donde hace la busqueda del codigo descuento del usuario vs el cupon.name 
        //console.log(descuento);
        const precio_descuento= cupones_descuento(precio_value,descuento.discount);        
        const show_result= document.getElementById("resultdo_cupon");
        //aqui se muestra en el HTML el resultado con el precio aplicado
        show_result.innerText="El precio con descuento es de: $" + precio_descuento;  
    }


   
};