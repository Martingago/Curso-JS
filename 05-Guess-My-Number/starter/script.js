'use strict';
const body = document.querySelector("body");
const btnAgain = document.querySelector(".again");
const outputNumber = document.querySelector(".number");
const inputNumber = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const  vidasUsuario = document.querySelector(".vidas");
const  scoreUsuario = document.querySelector(".score");

const highscore = document.querySelector(".highscore");
const message = document.querySelector(".message")

// Numero aleatorio;
let adivinalo = Math.trunc((Math.random() * 100)+1);
console.log(adivinalo)
let vidas = 5;
let score = 100
vidasUsuario.textContent = `${vidas}`;
scoreUsuario.textContent = `${score}`;

// Clicks usuario

btnCheck.addEventListener(
    "click",
    ()=> {
        if(inputNumber.value <1 || inputNumber.value >100)
        {invalidNumber()} 
        else if(vidas  == 1  && adivinalo != inputNumber.value)
        {loseGame(); highscoreUser()} 
        else if (inputNumber.value == adivinalo)
        {victoria(); highscoreUser()} 
        else{ fallaste()}
    }
);

btnAgain.addEventListener(
    "click",
    () => {
        resetGame()
    }
);

// Funciones 

const randomNumero = () => {
    Math.trunc((Math.random() * 100)+1)
}
const invalidNumber = () => {
    message.textContent = "El número introducido no es válido"
}
const loseGame = () => {
    scoreUsuario.textContent = `${score}`
    body.classList.add("derrota");
    vidas--;
    vidasUsuario.textContent = `${vidas}`
    message.innerHTML = `Has perdido!`;
    scoreUsuario.textContent = `${score}`
    btnCheck.disabled = true;
    outputNumber.textContent = `${adivinalo}`;
}
const victoria = () => {
    scoreUsuario.textContent = `${score}`
    body.classList.add("victoria")
    message.textContent = "Has ganado!";
    scoreUsuario.textContent = `${score}`
    btnCheck.disabled = true;
    outputNumber.textContent = `${adivinalo}`;
}
const fallaste = () => {
    if( inputNumber.value > adivinalo){
        vidas--
        message.innerHTML = "Te has pasado";
        vidasUsuario.textContent =  `${vidas}`;
        score = (100 * `${vidas}`) / 5;
    }
    else if(inputNumber.value < adivinalo){
        vidas--
        message.innerHTML = "Te has quedado corto";
        vidasUsuario.textContent =  `${vidas}`;
        score = (100 * `${vidas}`) / 5;
    }
}
const resetGame = () => {
    vidas = 5;
    inputNumber.value = null;
    vidasUsuario.textContent = `${vidas}`;
    body.classList.remove("victoria", "derrota");
    outputNumber.textContent = "?"
    btnCheck.disabled = false;
    adivinalo = Math.trunc((Math.random() * 20)+1)
    console.log(adivinalo)
    
}

let mejorMarca = 0;
const highscoreUser = () => {
if(mejorMarca < score){
    mejorMarca = score
}
    highscore.textContent = `${mejorMarca}`
}



