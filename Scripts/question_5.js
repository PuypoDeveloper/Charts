
import{generate_2} from "./funciones.js";
import{comparacion_arreglos} from "./funciones.js";
import{restart} from "./funciones.js";
/** script pregunta #5*/
/** Generamos numeros aleatorios  */
function random_shirts (num1,num2){ 
    let a = []
    for (let i=0;i<=3;i++){ 
        let num_1 = num1 + Math.floor(Math.random()*num2)
        let num_2 = num1 + Math.floor(Math.random()*num2)
        let b = [num_1,num_2]
        a.push(b)
    }
    return a
}

let options = random_shirts(10,40)
let options_true = options


/** Verificamos cual es la respuesta correcta */

let options_addition = []
for (let i = 0;i<=3;i++){
    let a = options_true[i][0]+options_true[i][1]
    options_addition.push(a)
}



let option_true = [0]
for (let i = 0;i<=3;i++){ 
    if (options_addition[i]>option_true[0]){ 
        option_true[0] = options_addition[i]
    }
}



/** Generamos numero random del 1 al 4 */
let random_4 = generate_2(4)
/** Cambiamos strings */

let strings_options = ["Billeteras","Carteras","Correas","Chaquetas"]

let string_1 = document.getElementById("string_change_1").innerHTML = strings_options[random_4[0]]
let string_2 = document.getElementById("string_change_2").innerHTML = strings_options[random_4[1]]
let string_3 = document.getElementById("string_change_3").innerHTML = strings_options[random_4[2]]
let string_4 = document.getElementById("string_change_4").innerHTML = strings_options[random_4[3]]

/** Guardamos los nunmeros en posicion random en un array */

let list_options_all = [options_addition[random_4[0]],options_addition[random_4[1]],options_addition[random_4[2]],options_addition[random_4[3]]]



/** Insertamos la grafica */

var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Billeteras", "Carteras", "Correas","Chaquetas"],
    datasets: [{
      label: 'Marzo',
      data: [options[0][0], options[1][0], options[2][0], options[3][0]],
      backgroundColor: "rgba(255, 1, 1, 0.527)"
    }, {
      label: 'Abril',
      data: [options[0][1], options[1][1], options[2][1], options[3][1]],
      backgroundColor: "rgba(1, 69, 255, 0.527)"
    }]
  }
});
Chart.plugins.register({
    afterDatasetsDraw: function(chart, easing) {

        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {

                    ctx.fillStyle = 'rgb(0, 0, 0)';

                    var fontSize = 13;
                    var fontStyle = 'normal';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle);


                    var dataString = dataset.data[index].toString();


                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = -1;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x - (fontSize / 2) +5, position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
});

/** Verificar respuesta correcta */

let btn_options_1 = document.getElementById("boton_1");
let btn_options_2 = document.getElementById("boton_2");
let btn_options_3 = document.getElementById("boton_3");
let btn_options_4 = document.getElementById("boton_4");

let list_btn = [btn_options_1,btn_options_2,btn_options_3,btn_options_4]

let option_1 = list_options_all[0];
let option_2 = list_options_all[1];
let option_3 = list_options_all[2];
let option_4 = list_options_all[3];

let all_tables = [option_1,option_2,option_3,option_4]

comparacion_arreglos(all_tables,option_true[0],list_btn)

let btn_true = document.getElementById("check_buton");
let btn_false = document.getElementById("check_buton_1")

btn_true.addEventListener("click",next)
btn_false.addEventListener("click",next)

function next(){ 
    document.getElementById("pantalla_final").style.display = "block"; 
    document.getElementById("pregunta_1").style.display = "none"; 
}

let new_game = restart()

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


let btn  = document.getElementById("check_buton"); 
let btn_2 = document.getElementById("check_buton_1")

btn.addEventListener("click",next_1)

function next_1(){ 
    div1Content = parseInt(div1Content)+ 10
    correct_answer = parseInt(correct_answer)+1
    wrong_answer = parseInt(wrong_answer)
    let points_finals = document.getElementById("mydiv_5_2").innerHTML = div1Content 
    let all_true_answer = document.getElementById("correctas_num_1").innerHTML = correct_answer 
    let all_wrong_answer = document.getElementById("incorrectas_num_1").innerHTML = wrong_answer

}

btn_2.addEventListener("click",next_2)

function next_2(){ 
    div1Content = parseInt(div1Content)
    correct_answer = parseInt(correct_answer)
    wrong_answer = parseInt(wrong_answer)+1
    let points_finals = document.getElementById("mydiv_5_2").innerHTML = div1Content 
    let all_true_answer = document.getElementById("correctas_num_1").innerHTML = correct_answer 
    let all_wrong_answer = document.getElementById("incorrectas_num_1").innerHTML = wrong_answer
}



/** Insertamos los resultados en la tabla de puntaje final */




