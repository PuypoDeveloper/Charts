import{generate_2} from "./funciones.js";
import{fetch_right} from "./funciones.js";
import{rigth_finaly} from "./funciones.js";
import{wrong_finaly} from "./funciones.js";

/** script pregunta #3*/
/** generamos numeros aleatorios para la grafica de enunciado*/

let num = 50 + Math.floor(Math.random()*30)
let num_2 = 40 + Math.floor(Math.random()*10)
let num_3 = 20 + Math.floor(Math.random()*10)
let num_4 = 10 + Math.floor(Math.random()*10)  
let num_5 = 20 + Math.floor(Math.random()*10)

let list_random_chart = [num,num_2,num_3,num_4,num_5]
let addition = num+num_2+num_3+num_4+num_5

/** Enlistamos los valores */

let list_porcentage_random = []
for (let i=0;i<=4;i++){ 
    let porcentage = (list_random_chart[i]/addition)*100
    list_porcentage_random.push(porcentage)
}



/** Cambiar valores del enunciado por valores aleatorios */

let a = document.getElementById("change_watts").innerHTML=addition; 
let b = document.getElementById("amount_energy_1").innerHTML=num;
let c = document.getElementById("amount_energy_2").innerHTML=num_2; 
let d = document.getElementById("amount_energy_3").innerHTML=num_3; 
let e = document.getElementById("amount_energy_4").innerHTML=num_4; 
let f = document.getElementById("amount_energy_5").innerHTML=num_5; 


/** Insertamos la grafica del enunciado */

var ctx = document.getElementById("myChart");
var data = {
    labels: [
        "Consumo %"
    ],
    datasets: [{
                label: 'Iluminacion',
                backgroundColor: "rgb(0, 30, 255)",
                stack: 'Stack 0',
                data: [
                    list_porcentage_random[0].toFixed(1),
                ]
            }, {
                label: 'Refrigerador',
                backgroundColor: 'rgb(46, 70, 255)',
              stack: 'Stack 0',
                data: [
                    list_porcentage_random[1].toFixed(1),
                    list_random_chart[1].toFixed(1)
                ]
            }, {
                label: 'Televisor',
                backgroundColor: 'rgb(93, 112, 255)',
              stack: 'Stack 0',
                data: [
                    list_porcentage_random[2].toFixed(1),
                    list_random_chart[2].toFixed(1)
                ]
            },
            {
                label: 'Plancha',
                backgroundColor: 'rgb(136, 150, 255)',
              stack: 'Stack 0',
                data: [
                    list_porcentage_random[3].toFixed(1),
                ]
            },
            {
                label: 'Otros',
                backgroundColor: 'rgb(177, 186, 255)',
              stack: 'Stack 0',
                data: [
                    list_porcentage_random[4].toFixed(1),
                ]
            }],
            
        };
        
var myBarChart = new Chart(ctx,{
    type: 'horizontalBar', /** tipo de grafica */
    data: data,
    options: {tooltips: false,
            legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true
                    }
                },
            animation:{
            animateScale:true
        },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max:100,
                        callback: function(value, index, values) {
                        return value + ' %';
                    }
                    }
            }]
        }
      }
});

/** Pasamos parametros para las etiquetas de la grafica */
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

                            var padding = 5;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x - (fontSize / 2) - 5, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        });

/** GENERAMOS NUMEROS ALEATORIOS PARA LAS DEMAS OPCIONES */

function generate_random(min,value){ 
    num = min + Math.floor(Math.random()*value)
    return num
}
let list_options = [list_random_chart]
for(let i = 0;i<=2;i++){ 
        let a =  generate_random(50,30)
        let b =  generate_random(40,10)
        let c =  generate_random(20,10)
        let d =  generate_random(10,10)
        let e =  generate_random(20,10)
        let f = [a,b,c,d,e]
        list_options.push(f)

}



/** Conseguimos los valores en porcentaje */
let list_adittion_all_charts = []

for (let i = 0;i<=3;i++){ 
    let a = 0
    for (let x =0;x<=4;x++){ 
        a = a+list_options[i][x]
    }
    list_adittion_all_charts.push(a)
}

let list_porcentage_all_charts = []

for (let i = 0;i<=3;i++){ 
    let a = []
    for (let x = 0;x<=4;x++){ 
        let b = (list_options[i][x]/list_adittion_all_charts[i])*100
        a.push(b)
    }
    list_porcentage_all_charts.push(a)

}

/** Generamos numeros aleatorios de 1 a 4 */
let random_numbers_4 = generate_2(4)


/** Insertamos graficas  */

let lista_charts_position = ["grafica","grafica_2"]
let lista_charts_position_1_1 = [random_numbers_4[0],random_numbers_4[1]]
let etiqueta_1 = ["Watts","Porcentaje"]
let lista_charts_position_2 = ["grafica_3","grafica_4"]
let lista_charts_position_2_1 = [random_numbers_4[2],random_numbers_4[3]]

function insert_charts (ListaDatos,grafica,random,label,values,random_2) {
    let answer_options_int = []
    for (let i=0;i<=1;i++){ 
        let values_charts = [[ListaDatos[random[i]][0],ListaDatos[random[i]][1], ListaDatos[random[i]][2],ListaDatos[random[i]][3],ListaDatos[random[i]][4]]] /** en esta variable guardamos las 4 opciones */
        const $grafica = document.getElementById(grafica[i]);
        const etiquetas = ["Iluminacion: ", "Refrigerador: ", "Televisor: ","Plancha","Otros"]
        const datosVentas2020 = {
            label: label,
            data: [ListaDatos[random[i]][0].toFixed(1), ListaDatos[random[i]][1].toFixed(1), ListaDatos[random[i]][2].toFixed(1), ListaDatos[random[i]][3].toFixed(1),ListaDatos[random[i]][4].toFixed(1)],  /** Aca pasamos las variables que componen a a cada una de las graficas */
            backgroundColor: ["rgba(255, 92, 187, 0.507)", "rgba(245, 125, 89, 0.479)","rgba(78, 243, 87, 0.404)","rgba(121, 111, 255, 0.336)","rgba(247, 1, 1, 0.63)"], /** En esta parte puedes modificar el color de las graficas  */
            borderColor: ["rgb(68, 0, 255)","rgb(255, 60, 0)","rgb(0, 255, 13)","rgba(16, 0, 247, 0.404)","rgb(247, 1, 1)"], /** En esta parte puedes modificar el color de las graficas  */
            borderWidth: 1,
        };
        new Chart($grafica, {
            type: "bar", /**Tipo de grafico */

            data: {
                labels: etiquetas, 
                datasets: [
                    datosVentas2020,
                ],
            }, 
        });
    }
    for (let x =0;x<=3;x++){ 
        let a = [[values[random_2[x]][0],values[random_2[x]][1], values[random_2[x]][2],values[random_2[x]][3],values[random_2[x]][4]]]
        answer_options_int.push(a)
    }   

    return answer_options_int /** Retornamos una lista con las opciones de respuesta */ 
    }

let two_charts_1 = insert_charts(list_options,lista_charts_position,lista_charts_position_1_1,etiqueta_1[0],list_options,random_numbers_4)
let two_charts_2 = insert_charts(list_porcentage_all_charts,lista_charts_position_2,lista_charts_position_2_1,etiqueta_1[1],list_options,random_numbers_4)



/** ENCONTRAR RESPUESTA CORRECTA */

let btn_options_1 = document.getElementById("boton_1");
let btn_options_2 = document.getElementById("boton_2");
let btn_options_3 = document.getElementById("boton_3");
let btn_options_4 = document.getElementById("boton_4");

let list_btn = [btn_options_1,btn_options_2,btn_options_3,btn_options_4]

const  correctas_1 = []; 
const incorrectas = [];


fetch_right(list_options,list_options,correctas_1,incorrectas)


let option_1 = two_charts_1[0];
let option_2 = two_charts_1[1];
let option_3 = two_charts_1[2];
let option_4 = two_charts_1[3];



let all_options_1 = [option_1,option_2,option_3,option_4]

/** Encontramos la respuesta correcta y ejecutamos la funciones correspondientes  */
function comparacion_arreglos(){
    for(let i=0;i<=3;i++){ 
        const variable2 = _.isEqual(all_options_1[i],correctas_1);
        if (variable2 === true){ 
            list_btn[i].addEventListener("click", rigth_finaly);

        }
        else{ 
            list_btn[i].addEventListener("click", wrong_finaly)

        }
    }
}


comparacion_arreglos()

let btn_true = document.getElementById("check_buton");
let btn_false = document.getElementById("check_buton_1")

btn_true.addEventListener("click",next)
btn_false.addEventListener("click",next)

function next(){ 
    window.location.assign("test_4.html")
}


/** Cuadro de puntaje */

let div1Content = sessionStorage.getItem("div1Content");
let div2 = document.getElementById("mydiv_5_1");
div2.innerHTML = div1Content;

let correct_answer = sessionStorage.getItem("correct_answer")
let div3 = document.getElementById("correctas_num")
div3.innerHTML = correct_answer

let wrong_answer = sessionStorage.getItem("wrong_answer")
let div4 = document.getElementById("incorrectas_num")
div4.innerHTML = wrong_answer

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
