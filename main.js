'use strict';

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const counter = document.querySelector('.counter');
const result = document.querySelector('.result');
const myRandomNumber = random(100); //num random hasta 100

// funcion para calcular números aleatorios max=100 //
function random(max) {
    return Math.floor(Math.random() * max);
};

