let num1 = 0
let num2 = 5
let num3 = '+1'
let num4 = '+2'
let num5 = '+3'
document.getElementById("btn").textContent = num1
document.getElementById("btn-el").textContent = num2
document.getElementById("btn1").textContent = num3
document.getElementById("btn2").textContent = num4
document.getElementById("btn3").textContent = num5
document.getElementById("btn__one").textContent = num3
document.getElementById("btn__two").textContent = num4
document.getElementById("btn__three").textContent = num5

let button = document.getElementById("btn")

function btn1() {
    console.log("button clicked")
    button.textContent = Number(button.textContent) + 1
}


function btn2() {
    console.log("button clicked")
    button.textContent = Number(button.textContent) + 2
}

function btn3() {
    console.log("button clicked")
    button.textContent = Number(button.textContent) + 3
}

let btnEl = document.getElementById("btn-el")

function btn__one() {
    console.log("button clicked")
    btnEl.textContent = Number(btnEl.textContent) + 1
}

function btn__two() {
    console.log("button clicked")
    btnEl.textContent = Number(btnEl.textContent) + 2
}

function btn__three() {
    console.log("button clicked")
    btnEl.textContent = Number(btnEl.textContent) + 3
}

