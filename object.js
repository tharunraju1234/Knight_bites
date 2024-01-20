// let car ={
// color:"black",
// model:"800",
// brand:"maruti",
// price:"39999",
// sunnroof:"no",
// }

// console.log(car.price);
// console.log(car.model);
// console.log(car["sunnroof"]);
// console.log(car["model"]);

// for (const key in car) {
// console.log(key+":"+ car[key]);   
        
//     }



// let emp=new Object()
// emp.id=100
// emp.name="ponien"
// emp.sal=10
// emp.location="ugandha"
// console.log(emp);

// function laptop(brand,ram,storage,process,os,graphics){
//     this.brand=brand
//     this.ram=ram 
//     this.storage=storage
//     this.process=process
//     this.os=os
//     this.graphics=graphics
// }

// let laptop1=new laptop("hp","16gb","1tb","i7","windows","rtx")
// console.log(laptop1);
// let laptop2=new laptop("pineapple","2gb","4tb","i1","pineappleos","pinejuice2029tx")
// console.log(laptop2);

// var converted =JSON.stringify(laptop1)
// console.log(converted);

// var normal=JSON.parse(converted)
// console.log(normal);

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    var tbody=document.querySelector("tbody")
    data.map((user)=>{
        var tr =document.createElement("tr")
        tr.innerHTML=`
          <td>${user.id}</td>
          <td>${user.company.name}</td>
          <td>${user.name}</td>
          <td>name :${user.name},<br>email :${user.email}<br>${user.address.street}<br>${user.address.suite}<br>
          ${user.address.city}<br>${user.address.zipcode}<br>latitude :${user.address.geo.lat}<br>longitude :${user.address.geo.lng}
          <br>phone :${user.phone}<br>website :${user.website}<br>catchPharse :${user.company.catchPharse}<br>bs :${user.company.bs}</td>

          <td><a href="./todo.html">todos</a><br>
          <a href="./post.html">posts</a><br>
          <a href="./comments.html">comments</a><br>
          <a href="./albums.html">albums</a><br>
          <a href="https://jsonplaceholder.typicode.com/photos">photos</a></td>

        `
      tbody.appendChild(tr)
    })

})