let total = 0;

function num1() {
    let input1 = document.getElementById("1").value
    document.getElementById("show").innerHTML += input1;
    total += parseInt(input1);
}

function num2() {
    let input2 = document.getElementById("2").value;
    document.getElementById("show").innerHTML += input2;
    total += parseInt(input2);
}

function num3() {
    let input3 = document.getElementById("3").value;
    document.getElementById("show").innerHTML += input3;
    total += parseInt(input3);
}

function num4() {
    let input4 = document.getElementById("4").value;
    document.getElementById("show").innerHTML += input4;
    total += parseInt(input4);
}

function num5() {
    let input5 = document.getElementById("5").value;
    document.getElementById("show").innerHTML += input5;
    total += parseInt(input5);
}

function num6() {
    let input6 = document.getElementById("6").value;
    document.getElementById("show").innerHTML += input6;
    total += parseInt(input6);
}

function num7() {
    let input7 = document.getElementById("7").value;
    document.getElementById("show").innerHTML += input7;
    total += parseInt(input7);
}

function num8() {
    let input8 = document.getElementById("8").value;
    document.getElementById("show").innerHTML += input8;
    total += parseInt(input8);
}

function num9() {
    let input9 = document.getElementById("9").value;
    document.getElementById("show").innerHTML += input9;
    total += parseInt(input9);
}

function add() {
    let inputAdd = document.getElementById("add").value;
    document.getElementById("show").innerHTML += inputAdd;
    total += inputAdd;
}


function sub() {
    let inputSub = document.getElementById("sub").value;
    document.getElementById("show").innerHTML += inputSub;
    total += inputSub;
}

function mutil() {
    let inputSub = document.getElementById("mutil").value;
    document.getElementById("show").innerHTML += inputSub;
    total += inputSub;
}

function divis() {
    let inputSub = document.getElementById("divis").value;
    document.getElementById("show").innerHTML += inputSub;
    total += inputSub;
}

function result() {
    let result = eval(total);
    document.getElementById("show").innerHTML = result;
}

function reset() {
    total = "";
    document.getElementById("show").innerHTML = total;
}

// function addData(data){
//     switch (data){
//         case "1":
//             document.getElementById("show").innerHTML += "1";
//             break;
//         case "2":
//             document.getElementById("show").innerHTML += "2";
//             break;
//         case "3":
//             document.getElementById("show").innerHTML += "3";
//             break;
//         case "4":
//             document.getElementById("show").innerHTML += "4";
//             break;
//         case "5":
//             document.getElementById("show").innerHTML += "5";
//             break;
//         case "6":
//             document.getElementById("show").innerHTML += "6";
//             break;
//         case "7":
//             document.getElementById("show").innerHTML += "7";
//             break;
//         case "8":
//             document.getElementById("show").innerHTML += "8";
//             break;
//         case "9":
//             document.getElementById("show").innerHTML += "9";
//             break;
//         case "0":
//             document.getElementById("show").innerHTML += "0";
//             break;
//         case "+":
//             document.getElementById("show").innerHTML += "+";
//             break;
//         case "-":
//             document.getElementById("show").innerHTML += "-";
//             break;
//         case "*":
//             document.getElementById("show").innerHTML += "*";
//             break;
//         case "/":
//             document.getElementById("show").innerHTML += "/";
//             break;
//         case "=":
//             document.getElementById("show").innerHTML = eval(document.getElementById("show").innerHTML);
//             break;
//         case "C":
//             document.getElementById("show").innerHTML = "";
//             break;
//     }
// }