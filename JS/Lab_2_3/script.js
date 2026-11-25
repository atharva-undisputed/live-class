// let username="abcd";

// var userclass="btech cse"

// const pi=3.14;

let addelem=document.getElementbyId("add");
let subelem=document.getElementbyId("sub");
let mulelem=document.getElementbyId("mul");
let divelem=document.getElementbyId("div");

let inputonelem=document.getElementById("inputone");
let inputtwoelem=document.getElementById("inputtwo");

let calculateelem=document.getElementById("calculate");

let outputelem=document.getElementById("output");
outputelem.textContent=0;

let selectedOperator='';

addelem.addEventListener('click',function(){
    selectedOperator=addelem.textContent;
    addelem.style.backgroundColor="blue";
    addelem.style.color="white";

})

subelem.addEventListener('click',function(){
    selectedOperator=subelem.textContent;
    subelem.style.backgroundColor="blue";
    subelem.style.color="white";

})

mulelem.addEventListener('click',function(){
    selectedOperator=mulelem.textContent;
    mulelem.style.backgroundColor="blue";
    mulelem.style.color="white";

})

divelem.addEventListener('click',function(){
    selectedOperator=divelem.textContent;
    divelem.style.backgroundColor="blue";
    divelem.style.color="white";

})