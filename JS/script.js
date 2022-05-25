function darkMode(){
    document.getElementById('headerColor').classList.remove('navigationEditing');
    document.getElementById('headerColor').classList.add('navigationEditingDark');
}

function add() {
    let number1 = parseInt(document.getElementById('num1').value);
    let number2 = parseInt(document.getElementById('num2').value);

    let result = number1 + number2;

    document.getElementById('res').value = result;
}

function subtract() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

    let result = number1 - number2;

    document.getElementById('res').value = result;
}

function multiply() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

    let result = number1 * number2;
  
    document.getElementById('res').value = result;
}

function division() {
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

    let result = number1 / number2;

    document.getElementById('res').value = result;
}





function decrease(){
    let number = parseInt(document.getElementById('number').innerHTML); 
    number--;
    if(number<0){
        document.getElementById('number').style.color = "red";
    }
    else if(number>0){
        document.getElementById('number').style.color = "green";
    }
    else{
        document.getElementById('number').style.color = "black";
    }

    document.getElementById('number').innerHTML = number;
}

function increase(){
    let number = parseInt(document.getElementById('number').innerHTML); 
    number++;
    if(number<0){
        document.getElementById('number').style.color = "red";
    }
    else if(number>0){
        document.getElementById('number').style.color = "green";
    }
    else{
        document.getElementById('number').style.color = "black";
    }
    document.getElementById('number').innerHTML = number;
}

function reset(){
    let number = parseInt(document.getElementById('number').innerHTML);
    number = 0;
    document.getElementById('number').style.color = "black";
    document.getElementById('number').innerHTML = number;
}



let word = ["cured", "spare", "wound", "jewel", "grass"];
let random = Math.floor(Math.random()*word.length);
console.log(word[random]);

function checking(){
    let guess = document.getElementById('try1', 'try2', 'try3', 'try4', 'try5');
    let pieces = toCheck.split('');
    pieces.foreach(function(letter){
        if(guess == pieces){

        }
    });
}




