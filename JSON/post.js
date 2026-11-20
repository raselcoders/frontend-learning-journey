const post= ()=>{
    const url ="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((respon)=>respon.json())
    .then((data)=>{
        displayfunction(data);
    })
}

const displayfunction=(posts)=>{
    const PostContainer =document.getElementById("post-container");
    PostContainer.innerText = " ";
    for(let post of posts){
        const postCard=document.createElement("div");
        postCard.innerHTML = `
           <div class="postCard">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        
        `
        PostContainer.append(postCard)
    }
}
// post() jodi alway data gulo shwo korate cai tahole. mane button e click kora lagbe nah. 