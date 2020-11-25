document.getElementById("button").addEventListener("click", Palindrome);

function Palindrome() {

    let inputString = document.getElementById("input").value;
    let modifiedString = inputString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let reverseString = modifiedString.split('').reverse().join('');
    if(reverseString === modifiedString){
        document.getElementById("result").innerHTML=`${inputString} is a Palindrome.`;
    }
    else{
        document.getElementById("result").innerHTML=`${inputString} is not a Palindrome.`;   
    }

}