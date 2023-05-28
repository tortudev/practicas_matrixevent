const brojo = document.querySelector('#botonrojo');
const bverde = document.querySelector('#botonazul');
const respuestaSi = "si";
const respuestaNo = "no";


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}



brojo.addEventListener('click', mensajealert1);
brojo.addEventListener("mousemove", changeBackground);

bverde.addEventListener('click', mensajealert2);
bverde.addEventListener("mousemove", changeBackground);


function mensajealert1() {
    const pregunta = prompt("¿Estas seguro de tu elección? 💊, Si o No!")
    if( pregunta == respuestaSi ) {
        alert('Este es la Pastilla Roja🔴, y has seleccionado salir de la Matrix y vivir la realidad, te deseo mucha Suerte!!, no será fácil, pero tendrá sus recompensas💪');
        
    } else if( pregunta == respuestaNo ) {
        alert('Está bien aún no estas preparado para la realidad 🌿, debes continuar en la matrix!!')
        
    } else
        alert('Debes seleccionar una opción correctamente❌');
}
    
function mensajealert2() {
    const pregunta = prompt("¿Estas seguro de tu elección 💊?, Si o No!")
    if( pregunta == respuestaSi ) {
        alert('Este es la Pastilla azul🔵, y has seleccionado continuar con tu realidad en la Matrix, olvida todo y no ha pasado nada😎');
        
    } else if( pregunta == respuestaNo ) {
        alert('Interesante 🤔, si estas en la búsqueda de algo mas!!, puedes escoger la Pastilla roja🔴 ')
        
    } else
        alert('Debes seleccionar una opción correctamente❌');
};
