
/** En este script ejecutamos algunas funciones que reutilizamos en los demas scripts */

/** Funcion que permite generar numeros aleatorios con dos parametros, el primero es el numero minimo y el segundo "numero maximo"*/
function generate(min,max){
    let sup = min
    let inf = max
    let num = sup + Math.floor(Math.random()*inf)
    return num
    
}
/** funcion que genera tres numeros aleatorios del 20 al 220*/
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

function num_ale_gra(max){ 
    return Math.floor(Math.random()*max)
}

function generate_2(max){ 
    const contenedor = []; 
    for(let i=0;i<=100;i++){ 
        var num_aleatorios_3 = num_ale_gra(max);
        if((contenedor.includes(num_aleatorios_3))){
        }
        else(
            contenedor.push(num_aleatorios_3)
        )
    }
    return contenedor
}

/** Esta funcion es la que permite insertar las graficas*/
function insert_charts (Names_data,ListaDatos,r_num) {
    let type_chart = ["line","bar","pie","doughnut","horizontalBar"]; /** Estos son los tipos de graficas, puedes mirar mas tipos en chart.js */
    let type_chart_num = num_ale_gra(5); 
    let chart_position = ["grafica","grafica_2","grafica_3","grafica_4"] /** Posicion de las graficas  */
    let answer_options_int = []
    for (let i=0;i<=3;i++){  /** En este buble se crean las 4 graficas, uno de ellas contiene la opcion correcta */
        let values_charts = [[ListaDatos[r_num[i]][0], ListaDatos[r_num[i]][1], ListaDatos[r_num[i]][2]]] /** en esta variable guardamos las 4 opciones */
        const $grafica = document.getElementById(chart_position[i]); /** aca pasamos en que posicion se insertan las graficass */
        const etiquetas = [Names_data[0], Names_data[1], Names_data[2]]
        const datosVentas2020 = {
            label: "Porcentaje", 
            data: [ListaDatos[r_num[i]][0], ListaDatos[r_num[i]][1], ListaDatos[r_num[i]][2], ListaDatos[r_num[i]][3]], /** Aca pasamos las variables que componen a a cada una de las graficas */
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

    /** Funcion que nos indica la resuesta correcta */
    function fetch_right(rigth,options,list1,list2){ 
        for(let i=0;i<=3;i++){
            var isEqual = rigth[0].length === options[i].length &&
            rigth[0].every((value, index) => value === options[i][index])
            if(isEqual === true){
                list1.push(options[i])
            }
            else{ 
                list2.push(options[i])
            }
        }
    }

let list_html = ["test_3.html","test_4.html","test_5.html"]

/** Funcion que compara todas las opciones de respuesta con su posicion para detectar la posicion de la respuesta correxta */
    function comparacion_arreglos(parametro1,list1,listbtn,html){
        for(let i=0;i<=3;i++){ 
            let variable2 = _.isEqual(parametro1[i],list1);
            if (variable2 === true){ 
                listbtn[i].addEventListener("click", rigth_finaly); /** Si es correcta se ejecuta esta funcion */

            }
            else{ 
                listbtn[i].addEventListener("click", wrong_finaly) /** Si es incorrecta se ejecuta esta funcion  */

            }
        }
    }
    function rigth_finaly(){ 
        change_score_rigth(); 
    }
    function wrong_finaly(){ 
        change_score_wrong();
    }


    /** Nos comunicamos con los id de los divs que queremos cambiar */
let secore = document.getElementById("mydiv_5"); 
let r_good = document.getElementById("correctas_num"); 
let r_bad = document.getElementById("incorrectas_num")
let number_quiestion = document.getElementById("mydiv_7")
let check_btn = document.getElementById("check_buton"); 
let check_btn_2 = document.getElementById("check_buton_1"); 
let display_right = document.getElementById("seccion_correcta"); 
let display_wrong = document.getElementById("seccion_incorrecta"); 

let a = 0
let b = 0
let c = 0
let d = 0

/** Funciones que se ejecutan si la respuesta es correcta */
function change_score_rigth(){ 
    let display_right = document.getElementById("seccion_correcta");
    let check_btn = document.getElementById("check_buton"); 
    let secore = document.getElementById("mydiv_5"); 
    let r_good = document.getElementById("correctas_num"); 
    let number_quiestion = document.getElementById("mydiv_7")
    display_right.style.display = "flex"
    check_btn.addEventListener("click",close)



}
/** Funciones que se ejecutan si la respuesta es incorrecta */
function change_score_wrong(){ 
    let display_wrong = document.getElementById("seccion_incorrecta"); 
    let check_btn_2 = document.getElementById("check_buton_1"); 
    let r_bad = document.getElementById("incorrectas_num")
    let number_quiestion = document.getElementById("mydiv_7")
    display_wrong.style.transform = "translate(0%)"
    check_btn_2.addEventListener("click",close)

}
/** Funcion que permite ocultar la ventana de incorrecto o correcto */
function close (){ 
    let display_right = document.getElementById("seccion_correcta"); 
    let display_wrong = document.getElementById("seccion_incorrecta"); 
    display_right.style.transform = "translate(100%)"
    display_wrong.style.transform = "translate(100%)"
} 

function restart (){ 
    let new_game = document.getElementById("check_iniciar"); 
    new_game.addEventListener("click",new_game_2)
}

function new_game_2(){ 
    window.location.assign("test.html")
}


var elemento = 0


/** Funciones para cambio de variables de tablero de púntaje */

let div1Content = 0
let correct_answer = 0
let wrong_answer = 0

function next_11(){ 
    div1Content  = div1Content+10
    correct_answer = correct_answer + 1
    document.getElementById("mydiv_5_1").innerHTML = div1Content;
    sessionStorage.setItem("div1Content", div1Content);
    document.getElementById("correctas_num").innerHTML = correct_answer
    sessionStorage.setItem("correct_answer",correct_answer)
    document.getElementById("incorrectas_num").innerHTML = wrong_answer 
    sessionStorage.setItem("wrong_answer",wrong_answer )

}

function next_22(){ 
    wrong_answer = wrong_answer+1
    document.getElementById("incorrectas_num").innerHTML = wrong_answer 
    sessionStorage.setItem("wrong_answer",wrong_answer )
    document.getElementById("mydiv_5_1").innerHTML = div1Content;
    sessionStorage.setItem("div1Content", div1Content);
    document.getElementById("correctas_num").innerHTML = correct_answer
    sessionStorage.setItem("correct_answer",correct_answer)
}


export{generate}
export{generate_2}
export{insert_charts}
export{fetch_right}
export{comparacion_arreglos}
export{rigth_finaly}
export{wrong_finaly}
export{restart}
export{elemento}
export{next_11}
export{next_22}




