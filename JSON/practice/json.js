const myfunction = () =>{
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
    .then((respon)=>respon.json())
    .then((data)=>{
        displayfunction(data);
    })
}

const displayfunction = (posts)=>{
    //step: 01
    const postContainer = document.getElementById("postContainer");
    postContainer.innerText = "";
    for(let post of posts){
        const postCard =document.createElement("div");
        postCard.innerHTML = `
         <div class="postCard">
            <h2>${post.id}</h2>
            <h3>${post.name}</h3>
            <h3>${post.email}</h3>
            <p>${post.body}</p>
        </div>
        
        `
        postContainer.append(postCard)
    }
}
