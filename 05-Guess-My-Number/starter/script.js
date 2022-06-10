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
let score = 1000
vidasUsuario.textContent = `${vidas}`;
scoreUsuario.textContent = `${score}`;

// Clicks usuario

document.addEventListener("keydown",
(e)=> {
    if(e.key === "Enter"){
        if (inputNumber.value == adivinalo)
        {endGame(); victoria(); highscoreUser();
            } 

        else if(inputNumber.value <1 || inputNumber.value >100)
        {invalidNumber()} 

        else if(vidas  == 1  && adivinalo !== inputNumber.value)
         { fallaste(); endGame(); loseGame(); highscoreUser()} 
         else{
            if(inputNumber.value > adivinalo){
                message.innerHTML = "Te has pasado";
                fallaste();    
            } else{
                message.innerHTML = "Te has quedado corto";
                fallaste()
            }
        }
    }
})


btnCheck.addEventListener(
    "click",
    ()=> {
        if (inputNumber.value == adivinalo)
        {endGame(); victoria(); highscoreUser();
            } 

        else if(inputNumber.value <1 || inputNumber.value >100)
        {invalidNumber()} 

        else if(vidas  == 1  && adivinalo !== inputNumber.value)
         { fallaste(); endGame(); loseGame(); highscoreUser()} 
         else{
            if(inputNumber.value > adivinalo){
                message.innerHTML = "Te has pasado";
                fallaste();    
            } else{
                message.innerHTML = "Te has quedado corto";
                fallaste()
            }
        }
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
const endGame = () => {
    score = (200 / 5) * (`${vidas}` **2);
    scoreUsuario.textContent = `${score}`
    btnCheck.disabled = true;
    outputNumber.textContent = `${adivinalo}`;
}
const loseGame = () => {
    body.classList.add("derrota");
    message.innerHTML = `Has perdido!`;
}
const victoria = () => {
    body.classList.add("victoria")
    message.textContent = "Has ganado!";
    inputNumber.value = null; 
}

const fallaste = () => {
        vidas--
        inputNumber.value = null;
        vidasUsuario.textContent =  `${vidas}`;
        score = (200 / 5) * (`${vidas}` **2)
        scoreUsuario.textContent = `${score}`
    }

const mayorMenor = () => {
    if(inputNumber.value > adivinalo){ message.innerHTML = "Te has pasado"} else{ message.innerHTML = "Te has quedado corto"} 
}

const resetGame = () => {
    vidas = 5;
    vidasUsuario.textContent = `${vidas}`;
    body.classList.remove("victoria", "derrota");
    scoreUsuario.textContent = "1000";
    score = 1000;
    outputNumber.textContent = "?"
    btnCheck.disabled = false;
    adivinalo = Math.trunc((Math.random() * 100)+1)
    console.log(adivinalo) 
}

let mejorMarca = 0;
const highscoreUser = () => {
if(mejorMarca < score){
    mejorMarca = score
}
    highscore.textContent = `${mejorMarca}`
}



