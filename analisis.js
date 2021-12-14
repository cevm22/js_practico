const salarios_col1=colombia.map(
    function(persona){
        return persona.salary;
    }
);

//ordenar de menor a mayor
const salarios_col_sorted=salarios_col1.sort(
    function(salary_a,salary_b){
        return salary_a - salary_b;
    }
);

//calcular la mediana de salarios
function mediana_salarios(lista){
    //lista debe estar previamente ordenada
        const mitad=(lista.length/2)
        if (mitad ===1){
            return ((lista[mitad-1] + lista[mitad])/2);
        }else{
            //es par
            if (mitad % 2 === 0){
                return ((lista[mitad-1] + lista[mitad])/2);
            //es impar
            }else{
                return lista[parseInt(mitad)];
            }
        }
    };

const mediana_general_col=(mediana_salarios(salarios_col_sorted));
//splice hace un corte de un vector y necesita 2 parametros
//PRIMERO: el valor en donde hará el corte, iniciando desde posicion 0
//SEGUNDO: la cantidad de valores que se desean después del corte
const start_splice_top10 = (salarios_col_sorted.length*0.9);
const count_splice_top10 = (salarios_col_sorted.length - start_splice_top10);    
const salario_top10=salarios_col_sorted.splice(start_splice_top10,count_splice_top10);

const mediana_top10=mediana_salarios(salario_top10)
    
console.log(
        mediana_general_col,
        mediana_top10
    )