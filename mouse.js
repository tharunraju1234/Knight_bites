function loading(){
    alert("im loading hahaha")
}

function singleclick(){
    console.log("you have clicked once")
}
function twice(){
    console.log("clicked two times")
}
function mouse(){
document.getElementById("image").src="./2.svg"
}
function mouseout(){
    document.getElementById("image").src="./1.svg"

}


function edown(){
    var para=document.getElementById("para")
    para.style.color="black"
}

function eup(){
    var para=document.getElementById("para")
    para.style.color="red"
}
function down(){
    var x=document.getElementById("x")
    console.log( x.innerHTML="<p>typeing....</p>")
}
// function typeing(){
//     var f=document.getElementById("k")
// }
function up(){
    var x=document.getElementById("x")
    console.log( x.innerHTML="<p>not typeing....</p>")
}
