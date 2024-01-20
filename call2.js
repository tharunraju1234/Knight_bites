// var form = document.querySelector("form")
// form.addEventListener("submit",()=>{
//     var usrname=document.getElementById("uname").value
//     console.log(usrname);
//     var regex=/^[a-z A-Z]+$/
//     var result=regex.test(usrname)
//     console.log(result);
//     if(result){
//         var field =document.getElementById("uname")
//         field.style.border="3px solid green"
//     }
//     else{
//         var field =document.getElementById("uname")
//         field.style.border="3px solid red"
//     }
//     event.preventDefault()
// })
// var form = document.querySelector("form")
// form.addEventListener("submit",()=>{
//     var usrname=document.getElementById("uname").value
//     console.log(usrname);
//     var regex=/^[6-9][0-9]{9}$/
//     var result=regex.test(usrname)
//     console.log(result);
//     if(result){
//         var field =document.getElementById("uname")
//         field.style.border="3px solid green"
//         var spanErr=document.getElementById("spanErr")
//         spanErr.innerText='vaild mobile number '
//         spanErr.style.color="green"
//     }
    

//     else{
//         var field =document.getElementById("uname")
//         field.style.border="3px solid red"
//         var spanErr=document.getElementById("spanErr")
//         spanErr.innerText='invaild mobile number '
//         spanErr.style.color="red"
//     }
    
    
//     event.preventDefault()
// })

var form = document.querySelector("form")
form.addEventListener("submit",()=>{
    var uname= document.getElementById("uname").value
    // console.log(uname);
  
    sessionStorage.setItem("username",uname)
    // setTimeout(()=>{
    //     localStorage.clear()
    // },5000)
    event.preventDefault()
    var x=sessionStorage.getItem("username")
    console.log(x)
})