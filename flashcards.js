function addition(){

    var ourAnswer = document.getElementById("answer").value;
    isNaN(ourAnswer);
    if(isNaN(ourAnswer)){
        document.getElementById("output").innerHTML = ourAnswer + "is not a number, you need a number";
    } else {
        if (ourAnswer == correctAnswer){
        document.getElementById("output").innerHTML = "Correct " + numOne + " + " + numTwo + " = " + correctAnswer;
    } else {
        document.getElementById("output").innerHTML = "Incorrect " + numOne + " + " + numTwo + " equals " + correctAnswer + " not " + ourAnswer;
    }
    }
}


function newCard(){
    document.getElementById("output").innerHTML = ""
    document.getElementById("answer").value = ""
    numOne = Math.floor(Math.random() * 10) + 1;
    numTwo = Math.floor(Math.random() * 10) + 1;
    document.getElementById("demo").innerHTML = numOne + " + " + numTwo;
    correctAnswer = numOne + numTwo;
}