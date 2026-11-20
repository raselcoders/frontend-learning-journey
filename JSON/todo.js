const todo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then((respone) => respone.json())
        .then((data) => {
            console.log(data);
            display(data);
        })
};

const display = (posts) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerText = "";
    for (let post of posts) {
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class="todo-card">
         <p> ${post.completed == true? `<i class="fa-solid fa-square-check"></i>`: `<i class="fa-regular fa-square-check"></i>`}</p>
         <h3> ${post.title}</h3>
         <h3> ${post.id}</h3>

        </div>
          
        `;
        todoContainer.append(todoCard);
    }


}

todo()