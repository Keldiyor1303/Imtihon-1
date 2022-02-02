const todo = [
    //Shablon
    // {
    //     id: 0,
    //     title: "123",
    //     isSucBtn: false,
    //     isWrongBtn: false,
    // }
]

const todoInput = document.querySelector("#todoInput")

todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        chiqar(event.target.value)
        todoInput.value = ""
    }
})

const todoSection = document.querySelector(".todoSection")

function chiqar(value) {
    todo.push({
        id: todo[todo.length - 1]?.id + 1 || 1,
        title: value,
        isSucBtn: false,
        isWrongBtn: false,
    })

    todoqush()
}

function todoqush() {
    todoSection.innerHTML = ""

    todo.forEach(element => {
        const todoBox = document.createElement("div")
        todoBox.classList.add("todoBox")

        todoBox.innerHTML = `
            <input type="text" disabled value="${element.title}">
            <span class="sucBtn">
                <i class="fas fa-check" id="success"></i>
            </span>
            <span class="wrongBtn">
                <i class="fas fa-times" id="wrong"></i>
            </span>

        `

        todoSection.appendChild(todoBox)

    })



}