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
