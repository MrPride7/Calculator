'use strict'

const viewer = document.getElementById("viewer"); //viewer of calculator
const allBtns = document.querySelectorAll(
    "#calculator button.btn:not(#equation)"); //all buttons of calculator
let outData = [];
let inputData = [];

function getData() {
    // first of all there need to check two special situations(buttons):
    // "c" - delete all, "ce" - delete last character
    if(this.innerHTML === "c") { // if button = "c", viewer output = 0
        outData = [0];
    } else if(this.innerHTML === "ce"){ // if button = "ce",
        if(outData.length === 1) { //and length of output = 1(
            // it doesn't matter what character it is)
            // we change output to 0
            outData = [0];
        } else { // if button = "ce", but length != 1, we delete unnecessary part
            outData.shift();
        }
        //if we know that button != "c" and button != "ce", we can write other characters
    } else if (outData.length >= 19) {
        outData.shift();
        outData.push(this.innerHTML);
    } else {
        outData.push(this.innerHTML);
    }
    viewer.innerHTML = outData.join("");
}
allBtns.forEach(function (btn){
    btn.addEventListener("click", getData);
});

const equation = document.getElementById("equation");


