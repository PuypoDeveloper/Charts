import{restart} from "./funciones.js";
import { next_11 } from "./funciones.js";
import { next_22 } from "./funciones.js";


/** Numero aleatorios tabla ejercicio 1 */
/** archivo JS de la pregunta #1 */

function generate(min,max){
    let sup = min
    let inf = max
    let num = sup + Math.floor(Math.random()*inf)
    return num
    
}

let lista_a = []

for (let i=0;i<=4;i++ ){ 
    let a = generate(20,200)
    lista_a.push(a)
}

/** Insertamos valores random en el enunciado  */

let number_table_1 = document.getElementById("number_change_table_1").innerHTML = lista_a[0]; 
let number_table_2 = document.getElementById("number_change_table_2").innerHTML = lista_a[1]; 
let number_table_3 = document.getElementById("number_change_table_3").innerHTML = lista_a[2]; 
let number_table_4 = document.getElementById("number_change_table_4").innerHTML = lista_a[3]; 
let number_table_5 = document.getElementById("number_change_table_5").innerHTML = lista_a[4]; 
let number_table_6 = document.getElementById("number_change_table_6").innerHTML = number_table_1+number_table_2+number_table_3+number_table_4+number_table_5 ;



/** Guardamos los numeros de la tabla en una lista */

let valid_votes = number_table_1+number_table_2+number_table_3
let list_right_number = [number_table_1,number_table_2,number_table_3] 

/** Pasamos las respuestas correctas a porcentaje */

let porcentage_valid_votes = []

for (let i = 0;i<=2;i++){ 
    let a = (list_right_number[i]/valid_votes)*100
    porcentage_valid_votes.push(a)
}



/** Creamos datos incorrectos para la demas opciones de respuesta */

function random_numbers(var1) { 
    let options_numbers_int = [var1]
    for (let i=1;i<=3;i++){ 
        let dato_1 = (generate(20,200)/valid_votes)*100;
        let dato_2 = (generate(20,200)/valid_votes)*100;
        let dato_3 = (generate(20,200)/valid_votes)*100;
        const lista_int = [dato_1,dato_2,dato_3];
        options_numbers_int.push(lista_int);
    }
    return options_numbers_int
}

let options_numbers = random_numbers(porcentage_valid_votes); 


/** Creamos numeros aleatorios del 1 al 4 */

function num_ale_gra(max){ 
    return Math.floor(Math.random()*max)
}

function generate_2(){ 
    const contenedor = []; 
    for(let i=0;i<=100;i++){ 
        var num_aleatorios_3 = num_ale_gra(4);
        if((contenedor.includes(num_aleatorios_3))){
        }
        else(
            contenedor.push(num_aleatorios_3)
        )
    }
    return contenedor
}

let random_numbers_4 = generate_2(); 


/** Insertamos las graficas */

let type_chart = ["line","bar","pie","doughnut","horizontalBar"]; 
let type_chart_num = num_ale_gra(5); 
let chart_position = ["grafica","grafica_2","grafica_3","grafica_4"]



function insert_charts (ListaDatos) {
    let answer_options_int = []
    for (let i=0;i<=3;i++){ 
        let values_charts = [[ListaDatos[random_numbers_4[i]][0], ListaDatos[random_numbers_4[i]][1], ListaDatos[random_numbers_4[i]][2]]] /** en esta variable guardamos las 4 opciones */
        const $grafica = document.getElementById(chart_position[i]); /** aca pasamos en que posicion se insertan las graficass */
        const etiquetas = ["Candidato 1: ", "Candidato 2: ", "Candidato 3: "] /** labels de las graficas */
        const datosVentas2020 = {
            label: "Porcentaje", 
            data: [ListaDatos[random_numbers_4[i]][0], ListaDatos[random_numbers_4[i]][1], ListaDatos[random_numbers_4[i]][2], ListaDatos[random_numbers_4[i]][3]], /** Aca pasamos las variables que componen a a cada una de las graficas */
            backgroundColor: ["rgba(255, 92, 187, 0.507)", "rgba(245, 125, 89, 0.479)","rgba(78, 243, 87, 0.404)","rgba(121, 111, 255, 0.336)"], /** En esta parte puedes modificar el color de las graficas  */
            borderColor: ["rgb(68, 0, 255)","rgb(255, 60, 0)","rgb(0, 255, 13)","rgba(16, 0, 247, 0.404)",], /** En esta parte puedes modificar el color de las graficas  */
            borderWidth: 1,
        };
        new Chart($grafica, {
            type: type_chart[type_chart_num], /** Aca se inserta el tipo de grafica, gracias al parametro r_num salen de manera aleatoria */
            data: {
                labels: etiquetas, 
                datasets: [
                    datosVentas2020,
                ],
            }, 
        });
        
        answer_options_int.push(values_charts)
    }
    return answer_options_int /** Retornamos los valores guardados para tener acceso a ellos y asi encontrar la respuesta correcta */
    }
    
let answer_options = insert_charts(options_numbers)

/** ENCONTRAR RESPUESTA CORRECTA */

/** nos comunicamos con los 4 botones de opcion de respuesta */

let btn_options_1 = document.getElementById("boton_1");
let btn_options_2 = document.getElementById("boton_2");
let btn_options_3 = document.getElementById("boton_3");
let btn_options_4 = document.getElementById("boton_4");


const  correctas = [];  /** se guardan las respuestas correctas */
const incorrectas = [];/** se guardan las respuestas incorrectas */



function fetch_right(rigth,options){ 
    for(let i=0;i<=3;i++){
        var isEqual = rigth[0].length === options[i].length &&
        rigth[0].every((value, index) => value === options[i][index])
        if(isEqual === true){
            correctas.push(options[i])
        }
        else{ 
            incorrectas.push(options[i])
        }
    }

}

let fetch_right_ready = fetch_right(options_numbers,options_numbers)

/** enlistamos las opciones de respuesta de acuerdo al retorno que vimos en la parte que insertamos las graficas */

let option_1 = answer_options[0];
let option_2 = answer_options[1];
let option_3 = answer_options[2];
let option_4 = answer_options[3];

let all_options = [option_1,option_2,option_3,option_4]
let list_btn = [btn_options_1,btn_options_2,btn_options_3,btn_options_4]

/** Pasamos a una lista las opciones de respuesta y los botonoes, comparamos las opciones con las respuesta correcta y asi la encontramos */

function comparacion_arreglos(parametro1,parametro2){
    for(let i=0;i<=3;i++){ 
        let variable2 = _.isEqual(all_options[i],correctas);
        if (variable2 === true){ 
            list_btn[i].addEventListener("click", rigth_finaly);

        }
        else{ 
            list_btn[i].addEventListener("click", wrong_finaly)

        }
    }
}


/** Funcion que se ejecuta si las respuestas son correctas o incorrectas */
function rigth_finaly(){ 
    change_score_rigth(); 

}

function wrong_finaly(){ 
    change_score_wrong();
}


/** */
/** Cambiamos los numeros de los marcadores */

let secore = document.getElementById("mydiv_5"); 
let r_good = document.getElementById("correctas_num"); 
let r_bad = document.getElementById("incorrectas_num")
let number_quiestion = document.getElementById("mydiv_7")
let check_btn = document.getElementById("check_buton"); 
let check_btn_2 = document.getElementById("check_buton_1"); 
let display_right = document.getElementById("seccion_correcta"); 
let display_wrong = document.getElementById("seccion_incorrecta"); 




function change_score_rigth(){ 

    display_right.style.display = "flex"
    check_btn.addEventListener("click",close)


}

function change_score_wrong(){ 
    display_wrong.style.transform = "translate(0%)"
    check_btn_2.addEventListener("click",close)
}

function close (){ 
    window.location.assign("Test_2.html")
}



let btn_start = document.getElementById("check_iniciar_1");
let display_start = document.getElementById("pantalla_start")

btn_start.addEventListener("click",start_1)

function start_1(){ 
    display_start.style.display = "none"
    document.getElementById("pregunta_1").style.display = "block"; 
    
}

/*Esta parte permite cambiar el puntaje de respuestas correctas e incorrectas, basicamente lo envia al test_2.html */

let btn  = document.getElementById("check_buton"); 
let btn_2 = document.getElementById("check_buton_1")

btn.addEventListener("click",next_11); 



btn_2.addEventListener("click",next_22)


comparacion_arreglos()



