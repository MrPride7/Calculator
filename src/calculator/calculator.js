'use strict'

const viewer = document.getElementById("viewer"); //viewer of calculator
const allBtns = document.querySelectorAll(
    "div.numbers > button.btn, div.actions > button.btn"); //all buttons of calculator
let outData;
let inputData = [];

allBtns.forEach(function (btn){
    btn.addEventListener("click", ()=>{
        // first of all there need to check two special situations(buttons):
        // "c" - delete all, "ce" - delete last character
        if(btn.innerHTML === "c") { // if button = "c", viewer output = 0
            viewer.innerHTML = "0";
        } else if(btn.innerHTML === "ce"){ // if button = "ce",
            if(viewer.innerHTML.length === 1) { //and length of output = 1(
                // it doesn't matter what character it is)
                viewer.innerHTML = "0"; // we change output to 0
            } else { // if button = "ce", but length != 1, we delete unnecessary part
                viewer.innerHTML = viewer.innerHTML.slice(0,-1);
            }
        //if we know that button != "c" and button != "ce", we can write other characters
        } else if(viewer.innerHTML === "0") {
            viewer.innerHTML = btn.innerHTML;
        } else viewer.innerHTML += btn.innerHTML;
    })
});

