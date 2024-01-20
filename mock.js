// function add(x,y){
// sum=x+y;
// console.log(sum);
// }
// add(4,5)
// add(4,2)

  


//anonymous function
// var sub=function(a,b){
//     x=a-b;
//     console.log(x);
// }
// sub(40,20)


// var x=["ap","dsf","dfg","ryre","tyu","8765"]
// // var k=x.push("hehe")
// // var k=x.pop()
// // var k=x.unshift("tharun")
// // var k=x.shift()
// console.log(k);
// console.log(x);


// var sal=[12222,33333,44444,5555]
// var k=sal.map((n)=>n+1000)
// console.log(k);

// var sal=[1222,3334,67,35462,23423,566666666666676]
// var k=sal.filter((n)=>n>300000)
// console.log(k);


// var nums=[1,2,3,4,5,6,7,8,9,10]
// var k=nums.reduce((a,b)=>(a+b))
// console.log(k);

// function validate(){

// var uname=document.getElementById("uname").value

// if(uname==""||uname==null){
//     var inputfield=document.getElementById("uname")
//     inputfield.style.border= "1px solid red"
//     var err=document.getElementById("errormsg")
//     err.innerHTML="enter correct username"
//     err.style.color="red"
// }
    
//    event.preventDefault() 
// }

// var i =1;
// do{
//     console.log("hello")
//     i++

// }while(i>=5)


// let k =["king","queen","minister","solider","thef"]
// for(const key of k ){
//     console.log(key);
// }


// var x= document.getElementsByClassName("head")
// for(let i=0;i<=x.length;i++){
//     x[i].style.color="red"

// }
// var y =document.getElementsByClassName("head1")
// for(const i of y ){
//     i.style.color="green"
// }

// var k=document.getElementsByTagName("head1")
// for (const i of k){
//     i.style.color="red"
// }



// function executeOnce(){
//     console.log("hello");
// }
// setTimeout(executeOnce,5000)


// function multi(){
//     console.log("helo")
// }
// setInterval(multi,2000)


// function once(){
//     console.log("hello");
// }
// var stop=setTimeout(once,2000)
// function stopu(){
// clearTimeout(stop)
// }

// function mutli(){
//     console.log("hello");
// }
// var stop=setInterval(mutli,3000)
// function stopu(){
//     clearInterval(stop)
// }

// var x=2.343
// var y =Math.ceil(x)
// console.log(y);
// var k=Math.floor(x)
// console.log(k);


// var r=Math.pow(3,2)
// console.log(r);

// setInterval(()=>{(console.log( Math.floor(Math.random())))},1000)


let alpha="abcdef0123456789"
function colorgenarator(){
    let color="#"
    for(let i=1; i<=6; i++){
        var random=Math.trunc(Math.random()*16)
      color+=alpha[random]

    }
    document.querySelector("body").style.backgroundColor=color
console.log(color);
}

// setInterval(colorgenarator,300)