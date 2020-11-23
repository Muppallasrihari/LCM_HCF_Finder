
document.getElementById("btn1").addEventListener("click", Add);

function Add() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = `The sum of given numbers is ${parseInt(a) + parseInt(b)}`;

}
document.getElementById("btn2").addEventListener("click", Sub);

function Sub() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = `The difference of given numbers is ${parseInt(a) - parseInt(b)}`;

}
document.getElementById("btn3").addEventListener("click", Mul);

function Mul() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = `The product of given numbers is ${parseInt(a) * parseInt(b)}`;

}
document.getElementById("btn4").addEventListener("click", Div);

function Div() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = `The division of given numbers is ${parseInt(a) / parseInt(b)}`;

}

