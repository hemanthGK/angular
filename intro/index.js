console.log("index.js")

//-----------------------------------------
// using DOM api
//-----------------------------------------

const box = document.querySelector(".alert");
const greeting = document.querySelector(".btn-primary");
const showBtn  = document.querySelector(".btn-warning");
const hideBtn = document.querySelector(".btn-danger");


greeting.addEventListener("click", () => {
    console.log("greeting clicked"),
    box.innerText = "good evening"
})

showBtn.addEventListener("click", () => {
    console.log("showBtn clicked");
    box.style.display = ""
})

hideBtn.addEventListener("click", () => {
    console.log("hideBtn clicked");
    box.style.display = "none"
})


//----------------------------------------
// using DOM API + XHR/Fetch API
//----------------------------------------


const todosBtn = document.querySelector("#todos-btn")
const todosList = document.querySelector("#todos")
console.log("to",todosBtn ,todosList)

todosBtn.addEventListener('click', e => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    const promise = fetch(apiUrl);
    promise
        .then(response => response.json())
        .then(todos => {
            const todoListElements = todos.map(todo => {
                return `
                    <li class="list-group-item">
                        <span class="badge badge-dark">${todo.id}</span>
                        <span>${todo.title}</span>
                        <span class="bg bg-warning">${todo.completed?'completed':'incomplete'}</span>
                    </li>
                `
            })
            todosList.innerHTML = todoListElements.join(" ")
        })

})


