'use strict'

const viewer = document.getElementById("viewer"); //viewer of calculator
const allBtns = document.querySelectorAll(
    "#calculator button.btn:not(#equation)"); //all buttons of calculator
const equation = document.getElementById("equation");
let outData = [];


function getData() {
    // first of all there need to check two special situations(buttons):
    // "c" - delete all, "ce" - delete last character
    if(this.innerHTML === "c") { // if button = "c", viewer output = 0(clear array)
        outData = [];
    } else if(this.innerHTML === "ce"){ // if button = "ce",
        if(outData.length === 1) { //and length of output = 1(
            // it doesn't matter what character it is)
            // we change output to 0(clear array)
            outData = [];
        } else { // if button = "ce", but length != 1, we delete last character
            outData.shift();
        }
        //if we know that button != "c" and button != "ce", we can write other characters
    } else if (outData.length >= 19) {
        outData.shift();
        outData.push(this.innerHTML);
    } else {
        outData.push(this.innerHTML);
    }
    if (outData.length !== 0) {
        viewer.innerHTML = outData.join(""); // if we have smth, out it
    } else {
        viewer.innerHTML = "0"; // if not, out "0"
    }

}
allBtns.forEach(function (btn){
    btn.addEventListener("click", getData);
});

equation.addEventListener("click", function () {
    let actions = []; // arr for actions
    for (let i = 0; i < outData.length; i++) {
        if (outData[i] === "*" || outData[i] === "/" || outData[i] === "+" || outData[i] === "-") {
            actions.push(outData[i]);
            outData[i] = " ";
        }
    }
    outData = outData.join("").split(" "); //join characters to numbers
    for (let item of outData){
        if (item = " "){
            viewer.innerHTML = "EROR"; // 2 actions in a row
        }
    }
    console.log(outData);
    console.log(actions);
});

