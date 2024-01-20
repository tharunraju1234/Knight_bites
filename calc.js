function trunoff(){
    var inputfield=document.getElementById("inputfield")
    inputfield.style.visibility="hidden"
}
function turnon(){
    var inputfield=document.getElementById("inputfield")
    inputfield.style.visibility="visibility"
}
function getValues(num){
    var inputfield=document.getElementById("inputfield")
    inputfield.value=inputfield.value+num
}

function clearOneChar(){
    var inputfield=document.getElementById("inputfield")
    inputfield.value=inputfield.value.slice(0,-1)
}
function calculate(){
       var inputfield=document.getElementById("inputfield")
    inputfield.value=eval(inputfield.value)
}
function clearAll(){
    var inputfield=document.getElementById("inputfield")
    inputfield.value=" "   
}