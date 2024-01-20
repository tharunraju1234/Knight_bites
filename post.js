fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    var tbody=document.querySelector("tbody")
    data.map((user)=>{
        var tr =document.createElement("tr")
        tr.innerHTML=`
          <td>${user.id}</td>
          <td>${user.title}</td>
          <td>${user.body}</td>
          
          
        `
      tbody.appendChild(tr)
    })

})