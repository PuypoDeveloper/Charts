import{generate_2} from "./funciones.js";
import{comparacion_arreglos} from "./funciones.js";

/** script pregunta #4*/
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
let options_true = [options[1][1],options[2][1]]



/** Insertamos la grafica */

var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Lunes", "Martes", "Miercoles","Jueves"],
    datasets: [{
      label: 'Pantalones',
      data: [options[0][0], options[1][0], options[2][0], options[3][0]],
      backgroundColor: "rgba(255, 1, 1, 0.527)"
    }, {
      label: 'Camisetas',
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

/** Creamos las opciones de respuesta */

let all_options = [options_true]


for(let i = 0;i<=2;i++){ 
    let num_1 = 10 + Math.floor(Math.random()*40)
    let num_2 = 10 + Math.floor(Math.random()*40)
    let a = [num_1,num_2]
    all_options.push(a)
}



/** Generamos numeros random del 1 al 4 */
let random_4 = generate_2(4)


let value_1 = document.getElementById("amount_energy_1");
let value_2 = document.getElementById("amount_energy_2");
let value_3 = document.getElementById("amount_energy_3");
let value_4 = document.getElementById("amount_energy_4");
let value_5 = document.getElementById("amount_energy_5");
let value_6 = document.getElementById("amount_energy_6");
let value_7 = document.getElementById("amount_energy_7");
let value_8 = document.getElementById("amount_energy_8");

let list_values = [[value_1,value_2],[value_3,value_4],[value_5,value_6],[value_7,value_8]]


function change_value_tables() { 
    let b = []
    for(let i=0;i<=3;i++){ 
        list_values[i][0].innerHTML = all_options[random_4[i]][0]
        list_values[i][1].innerHTML = all_options[random_4[i]][1]
        let a = [all_options[random_4[i]][0],all_options[random_4[i]][1]]
        b.push(a)
    }
    return b
}

let options_results =  change_value_tables()


/** Encontrar respuesta correcta */

let correctas = [options_results[0]]
let incorrecta = [options_results[1],options_results[2],options_results[3]]



let btn_options_1 = document.getElementById("boton_1");
let btn_options_2 = document.getElementById("boton_2");
let btn_options_3 = document.getElementById("boton_3");
let btn_options_4 = document.getElementById("boton_4");

let list_btn = [btn_options_1,btn_options_2,btn_options_3,btn_options_4]

let option_1 = options_results[0];
let option_2 = options_results[1];
let option_3 = options_results[2];
let option_4 = options_results[3];

let all_tables = [option_1,option_2,option_3,option_4]



comparacion_arreglos(all_tables,options_true,list_btn)

let btn_true = document.getElementById("check_buton");
let btn_false = document.getElementById("check_buton_1")

btn_true.addEventListener("click",next)
btn_false.addEventListener("click",next)

function next(){ 
    window.location.assign("test_5.html")
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
    document.getElementById("mydiv_5_1").innerHTML = div1Content;
    sessionStorage.setItem("div1Content", div1Content);
    document.getElementById("correctas_num").innerHTML = correct_answer
    sessionStorage.setItem("correct_answer",correct_answer)
}