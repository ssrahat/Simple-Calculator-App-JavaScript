document.getElementById('welcome-el').textContent = 'Simple Calculator'

let num1 = 2
let num2 = 8

let n1 = document.getElementById('num1-el')
n1.textContent += num1

let n2 = document.getElementById('num2-el')
n2.textContent += num2

let results = document.getElementById('result')

function addition() {
    let add = num1 + num2
    results.textContent = 'Result is : ' + add
}
function subtraction() {
    let sub = num1 - num2
    results.textContent = 'Result is : ' + sub
}
function division() {
    let divi = num1 / num2
    results.textContent = 'Result is : ' + divi
}
function multiplication() {
    let mul = num1 * num2
    results.textContent = 'Result is : ' + mul
}
