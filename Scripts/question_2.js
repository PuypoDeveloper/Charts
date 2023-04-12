import {generate} from "./funciones.js";
import{generate_2} from "./funciones.js";
import{insert_charts} from "./funciones.js";
import{fetch_right} from "./funciones.js";
import{comparacion_arreglos} from "./funciones.js";


/* generamos numeros aleatorios que se muestran en pantalla*/
/* script pregunta #2*/

let number_change_table_2_1 = document.getElementById("number_change_table_2_3").innerHTML = generate(2,20)
let number_change_table_2_2 = document.getElementById("number_change_table_2_4").innerHTML = generate(2,20)
let number_change_table_2_3 = document.getElementById("number_change_table_2_5").innerHTML = generate(2,20)
let number_change_table_2_4 = document.getElementById("number_change_table_2_6").innerHTML = generate(2,20)
let number_change_table_2_5 = document.getElementById("number_change_table_2_7").innerHTML = generate(2,20)
let number_change_table_2_6 = document.getElementById("number_change_table_2_8").innerHTML = generate(2,20)
let groups_age_table_1 = document.getElementById("groups_age_table_1").innerHTML = generate(100,200)
let groups_age_table_2 = document.getElementById("groups_age_table_2").innerHTML = generate(100,200)
let groups_age_table_3  = document.getElementById("groups_age_table_3").innerHTML = generate(100,200)

let current_sales = [groups_age_table_1,groups_age_table_2,groups_age_table_3]



/* generamos numeros aleatorios para las demas opciones */

let options_numbers_int = [current_sales]
for (let i = 0;i<=2;i++){ 
    let a = generate(100,200)
    let b = generate(100,200)
    let c = generate(100,200)
    let d = [a,b,c]
    options_numbers_int.push(d)
}



/** creamos numeros aleaotrios del 1 al 4 que no se repitan */

let random_numbers_4 = generate_2(4)

/** Insertamos las graficas */

let name_list = ["15 a 30 años","31 a 100 años","61 años o mas"]
let answer_options = insert_charts(name_list,options_numbers_int,random_numbers_4)

/** ENCONTRAR RESPUESTA CORRECTA */

let btn_options_1 = document.getElementById("boton_1");
let btn_options_2 = document.getElementById("boton_2");
let btn_options_3 = document.getElementById("boton_3");
let btn_options_4 = document.getElementById("boton_4");

let list_btn = [btn_options_1,btn_options_2,btn_options_3,btn_options_4]

const  correctas = []; 
const incorrectas = [];

/** Meidante la funcion importada encontramos la respuesta correcta */

fetch_right(options_numbers_int,options_numbers_int,correctas,incorrectas)

let option_1 = answer_options[0];
let option_2 = answer_options[1];
let option_3 = answer_options[2];
let option_4 = answer_options[3];

let all_options = [option_1,option_2,option_3,option_4]

/** Meidante la funcion importada encontramos la ubicacion del boton de la respuesta correcta*/
comparacion_arreglos(all_options,correctas,list_btn)

let btn_true = document.getElementById("check_buton");
let btn_false = document.getElementById("check_buton_1")

btn_true.addEventListener("click",next)
btn_false.addEventListener("click",next)

function next(){ 
    window.location.assign("test_3.html")
}


/** Esta parte recibe los datos enviados desde el testo.html respecto a la tabla de puntaje  y los muestra en la pantalla del text_2.html */
let div1Content = sessionStorage.getItem("div1Content");
let div2 = document.getElementById("mydiv_5_1");
div2.innerHTML = parseInt(div1Content);

let correct_answer = sessionStorage.getItem("correct_answer")
let div3 = document.getElementById("correctas_num")
div3.innerHTML = parseInt(correct_answer)

let wrong_answer = sessionStorage.getItem("wrong_answer")
let div4 = document.getElementById("incorrectas_num")
div4.innerHTML = parseInt(wrong_answer)


/*Esta parte permite cambiar el puntaje de respuestas correctas e incorrectas, basicamente lo envia al test_2.html */

div1Content = parseInt(div1Content)
correct_answer = parseInt(correct_answer)
wrong_answer = parseInt(wrong_answer)

let btn  = document.getElementById("check_buton"); 
let btn_2 = document.getElementById("check_buton_1")

btn.addEventListener("click",next_2); 



function next_2(){ 
    div1Content  = div1Content+10
    correct_answer = correct_answer + 1
    document.getElementById("mydiv_5_1").innerHTML = div1Content;
    sessionStorage.setItem("div1Content", div1Content);
    document.getElementById("correctas_num").innerHTML = correct_answer
    sessionStorage.setItem("correct_answer",correct_answer)
    document.getElementById("incorrectas_num").innerHTML = wrong_answer 
    sessionStorage.setItem("wrong_answer",wrong_answer )
}

btn_2.addEventListener("click",next_3)

function next_3(){ 
    wrong_answer = wrong_answer+1
    document.getElementById("incorrectas_num").innerHTML = wrong_answer 
    sessionStorage.setItem("wrong_answer",wrong_answer )
    document.getElementById("mydiv_5_1_1").innerHTML = div1Content;
    sessionStorage.setItem("div1Content", div1Content);
    document.getElementById("correctas_num").innerHTML = correct_answer
    sessionStorage.setItem("correct_answer",correct_answer)
}








