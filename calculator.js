let str=" "
let inp=document.getElementById("display");

function addval()
{
let cb = event.target;

str= str+cb.innnerText;
inp.value=inp.value+cb.innnerText;
console.log(str);
}
function addOperator(){

    let cb = event.target;
    str=str+cb.innnerText;
    inp.value=inp.value+cb.innnerText;
    console.log(str);
}
function addOperator(){

    let cb =event.target;
    str=str+cb.innnerText;
    inp.value=" "
    console.log(str);
}
function computeValue(){
    inp.value=eval(str);
    str=eval(str);
}