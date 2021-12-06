const vec=[
    {
        "nota":10,
        "creditos":2
    },{
        "nota":8,
        "creditos":5
    },{
        "nota":7,
        "creditos":5
    }
]

function ponderado(obj){    
    //se multiplica "nota" X "creditos" de cada elemento y lo regresa en array
    const notas=obj.map((elemento)=>{return elemento.nota*elemento.creditos})
    //Despues de obtener el array anterior, se hace la sumatoria del resultado del array anterior
                .reduce((acc=0,next)=>{return acc+next});
    const sum_creditos=obj.map((el)=>{return el.creditos}).reduce((acc=0,next)=>{return acc+next});
    
    return  notas/sum_creditos;
}