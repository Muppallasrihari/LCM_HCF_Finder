
document.getElementById('button1').addEventListener("click",LCM);
document.getElementById('button2').addEventListener("click",HCF);

function LCM(){
   let number1= document.getElementById("input1").value;
   let number2= document.getElementById("input2").value;
   let hcf=0;
   for (let i = 1; i <= number1 && i <= number2; i++) {
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
let lcm=(number1*number2)/hcf;

document.getElementById("result").innerHTML=`The LCM of ${number1} and ${number2} is ${lcm}.`  
}

function HCF(){
    let number1= document.getElementById("input1").value;
   let number2= document.getElementById("input2").value;
   let hcf=0;
   for (let i = 1; i <= number1 && i <= number2; i++) {
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
document.getElementById("result").innerHTML=`The HCF of ${number1} and ${number2} is ${hcf}.` 
}