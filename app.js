let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

/*let parrafo = document.querySelector('p');
    parrafo.innerHTML = 'Ingresa un numero de 1 a 10'

    esta era la forma de modificar el elemento html en un inicio, pero
    al realizar la funcion de abajo y llamar la variable para asignarle
    un valor distinto, esta funcion modifica el html de forma mas
    eficiente en el codigo
*/
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto ) {
        asignarTextoElemento('p', `Acertaste el numero! en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //con este removeattribute se activa el boton de nuevo juego al quitar el atributo de disabled
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }    else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            } 
        intentos++;
        limpiarCaja();
        }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado)
    
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta en la lista 
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un numero de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //reiniciar intentos
    condicionesIniciales();
    //desabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();
