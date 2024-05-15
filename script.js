let todos = []

const addTodo = () => {
let inputEl = document.getElementsByClassName("todo-input")
    todos.push(inputEl[0].value)

    renderTodo()
}
const removeTodo = () => {
    todos.pop()

    renderTodo()
}
const renderTodo = () => {
    let listEl = document.getElementsByClassName("todo-list")

    while (listEl[0].firstChild){
        listEl[0].removeChild(listEl[0].firstChild)
    }
    
    for (let i = 0; i < todos.length; i++) {
        let todoEl = document.createElement("li")
    todoEl.innerText = todos[i]
    listEl[0].appendChild(todoEl)
    }
}