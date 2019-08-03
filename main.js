'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const counter = document.querySelector('.counter');
const result = document.querySelector('.result');
const RandomNumber = random(100); //num random hasta 100
let countNumber = 0; //contador inicializado a 0

// funcion para calcular números aleatorios max=100 //

function random(max) {
    return Math.floor(Math.random() * max);
};

// Función que compare el número del usuario del input con el número aleatorio

function randomCompared() {
    const userNumber = parseInt(input.value);
    if (RandomNumber === userNumber) {
        printResult(result, '¡has ganado, campeona🦸!');
    } else if (userNumber > 100) {
        printResult(result, 'no puede ser mayor de 100');
    } else if (userNumber < 0) {
        printResult(result, 'no puede ser menor que 0');
    } else if (RandomNumber < userNumber) {
        printResult(result, 'demasiado alto🌡');
    } else if (RandomNumber > userNumber) {
        printResult(result, 'demasiado bajo🥶');
    } else {
        printResult(result, 'por favor introduce un número válido');
    }
}

// Función para imprimir el resultado //

function printResult(constName, text) {
    constName.innerHTML = text;
}

// Función para añadir +1 en el contador

function addCounter() {
    countNumber += 1; //el contador suma 1 cada vez que pulsamos el botón
    counter.innerHTML = countNumber;
}

// Evento para llamar a las funciones randomCompared y addCounter //
function handleButtonClick() {
    randomCompared();
    addCounter();
}

// EventListener del botón //

button.addEventListener('click', handleButtonClick);

