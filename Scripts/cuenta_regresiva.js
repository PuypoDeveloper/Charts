
/** En este script formulamos la cuenta regresiva, asi como tambien invocamos las respectivas funciones que se ejecutan cuando el tiempo llega a 0 */
var timer;
const COUNTER_KEY = 'my-counter';

function countDown(i, callback) {
  //callback = callback || function(){};
  timer = setInterval(function() {
    let minutes = parseInt(i / 60, 10);
    let seconds = parseInt(i % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("mydiv_6").innerHTML = minutes + ":" + seconds;

    if ((i--) > 0) {
      window.sessionStorage.setItem(COUNTER_KEY, i);
    } else {
      window.sessionStorage.removeItem(COUNTER_KEY);
      clearInterval(timer);
      callback();
    }
  }, 1000);
}

window.onload = function() {
	var countDownTime = window.sessionStorage.getItem(COUNTER_KEY) || 100; /** aca puedes modificar la cantidad de tiempo que quieres en la cuenta regresiva */
  countDown(countDownTime, function() {
    document.getElementById("pantalla_final").style.display = "block"
    document.getElementById("pregunta_1").style.display = "none"
    let d =  document.getElementById("mydiv_5_1").innerHTML
    let e =  document.getElementById("correctas_num").innerHTML
    let f =  document.getElementById("incorrectas_num").innerHTML
    let a =  document.getElementById("correctas_num_1").innerHTML = e
    let b =  document.getElementById("incorrectas_num_1").innerHTML = f
    let c =  document.getElementById("mydiv_5_2").innerHTML = d
  });
};


/** Definimos que a oprimir el boton con ID "check iniciar* el cual corresponde a nuevo intento se redireccione al html inicial y un display none para el cuadro de resultados*/
let new_game = document.getElementById("check_iniciar"); 
new_game.addEventListener("click",new_game_2)

function new_game_2(){ 
  document.getElementById("pantalla_final").style.display = "none"
  document.getElementById("pregunta_1").style.display = "block"
  location.replace("test.html");

}