let addElem = document.getElementById("add");
let subElem = document.getElementById("sub");
let mulElem = document.getElementById("mul");
let divElem = document.getElementById("div");

let inputOneElem = document.getElementById("inputOne");
let inputTwoElem = document.getElementById("inputTwo");

let calculateelem = document.getElementById("Calculator");

let outputElem = document.getElementById("Output");
outputElem.textContent = 0;

let selectedOperator = '';

let selectedelem = null;

addElem.addEventListener('click', function () {
    if (selectedelem) {
        selectedelem.style.backgroundColor = "";
        selectedelem.style.color = "";
        selectedelem = addElem;
        selectedOperator = addElem.textContent;
        addElem.style.backgroundColor = "blue";
        addElem.style.color = "white";
    }
    else {
        selectedelem = addElem;
        selectedOperator = addElem.textContent;
        addElem.style.backgroundColor = "blue";
        addElem.style.color = "white";
    }
})

subElem.addEventListener('click', function () {
    if (selectedelem) {
        selectedelem.style.backgroundColor = "";
        selectedelem.style.color = "";
        selectedelem = subElem;
        selectedOperator = subElem.textContent;
        subElem.style.backgroundColor = "blue";
        subElem.style.color = "white";
    }
    else {
        selectedelem = subElem;
        selectedOperator = subElem.textContent;
        subElem.style.backgroundColor = "blue";
        subElem.style.color = "white";
    }
})

mulElem.addEventListener('click', function () {
    if (selectedelem) {
        selectedelem.style.backgroundColor = "";
        selectedelem.style.color = "";
        selectedelem = mulElem;
        selectedOperator = mulElem.textContent;
        mulElem.style.backgroundColor = "blue";
        mulElem.style.color = "white";
    }
    else {
        selectedelem = mulElem;
        selectedOperator = mulElem.textContent;
        mulElem.style.backgroundColor = "blue";
        mulElem.style.color = "white";
    }
})

divElem.addEventListener('click', function () {
    if (selectedelem) {
        selectedelem.style.backgroundColor = "";
        selectedelem.style.color = "";
        selectedelem = divElem;
        selectedOperator = divElem.textContent;
        divElem.style.backgroundColor = "blue";
        divElem.style.color = "white";
    }
    else {
        selectedelem = divElem;
        selectedOperator = divElem.textContent;
        divElem.style.backgroundColor = "blue";
        divElem.style.color = "white";
    }
})

let ans;
calculateelem.addEventListener('click', function(){
    let valone=inputOneElem.value;
    let valtwo=inputTwoElem.value;
    console.log(valone,valtwo);

        switch(selectedelem){
        case "+":
        ans=valone+valtwo;
        console.log(ans);
        outputElem.textContent=ans;
        break;
        case "-":
        ans=valone-valtwo;
        console.log(ans);
        outputElem.textContent=ans;
        break;
        case "*":
        ans=valone*valtwo;
        console.log(ans);
        outputElem.textContent=ans;
        break;
        case "/":
        ans=valone/valtwo;
        console.log(ans);
        outputElem.textContent=ans;
        break;
        }
        
});

