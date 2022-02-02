let local = JSON.parse(window.localStorage.getItem("todos"))
let todos = local ? local : []


const todoInput = document.querySelector("#todoInput")

todoInput.addEventListener("keypress", function (event) {
    if ((event.key === "Enter") && (todoInput.value.trim() != "")) {
        chiqar(event.target.value)
        todoInput.value = ""
    }
})

const todoSection = document.querySelector(".todoSection")

function chiqar(value) {
    todos.push({
        id: todos[todos.length - 1]?.id + 1 || 1,
        title: value,
        isSucBtn: "false",
    })
    todoqush()
    localStorage.setItem("todos", JSON.stringify(todos))
}

todoqush()

function todoqush() {
    todoSection.innerHTML = ""


    for (let element = 0; element < todos.length; element++) {
        const todoBox = document.createElement("div")
        todoBox.classList.add("todoBox")

        todoBox.innerHTML = `
                <input type="text" disabled value="${todos[element].title}" id="input" data-input-id="${todos[element].id}">
                <span class="sucBtn" onclick="sucBtn(${todos[element].id})">
                    <i class="fas fa-check" id="success"></i>
                </span>
                <span class="wrongBtn" onclick="wrongBtn(${todos[element].id})">
                    <i class="fas fa-times" id="wrong"></i>
                </span>
    
            `

        isSuc()

        todoSection.appendChild(todoBox)


    }
}


function sucBtn(id) {
    todos.forEach(data => {
        if (data.id == id) {
            data.isSucBtn = "true"

            const inputs = document.querySelectorAll("#input")

            for (let input of inputs) {
                const { inputId } = input.dataset
                if (inputId == id) {
                    input.classList.add("succesInput")
                    localStorage.setItem("todos", JSON.stringify(todos))
                }
            }

        }
    })
}

function wrongBtn(id) {

    for (let element = 0; element < todos.length; element++) {

        if (todos[element].id == id) {
            todos.splice(element, 1)
            todoqush()
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }
}

const select = document.querySelector("select")

select.addEventListener("change", function () {

    if (select.value == "Barchasi") todoqush()

    if (select.value == "Bajarilganlar") {
        todoSection.innerHTML = ""

        for (let element = 0; element < todos.length; element++) {
            if (todos[element].isSucBtn == "true") {
                const todoBox = document.createElement("div")
                todoBox.classList.add("todoBox")

                todoBox.innerHTML = `
                        <input type="text" disabled value="${todos[element].title}" id="input" data-input-id="${todos[element].id}">
                        <span class="sucBtn" onclick="sucBtn(${todos[element].id})">
                            <i class="fas fa-check" id="success"></i>
                        </span>
                        <span class="wrongBtn" onclick="wrongBtn(${todos[element].id})">
                            <i class="fas fa-times" id="wrong"></i>
                        </span>
            
                    `

                todoSection.appendChild(todoBox)

            }
        }
    }

    if (select.value == "Bajarilmaganlar") {
        todoSection.innerHTML = ""

        for (let element = 0; element < todos.length; element++) {
            if (todos[element].isSucBtn == "false") {
                const todoBox = document.createElement("div")
                todoBox.classList.add("todoBox")

                todoBox.innerHTML = `
                        <input type="text" disabled value="${todos[element].title}" id="input" data-input-id="${todos[element].id}">
                        <span class="sucBtn" onclick="sucBtn(${todos[element].id})">
                            <i class="fas fa-check" id="success"></i>
                        </span>
                        <span class="wrongBtn" onclick="wrongBtn(${todos[element].id})">
                            <i class="fas fa-times" id="wrong"></i>
                        </span>
            
                    `

                isSuc()

                todoSection.appendChild(todoBox)

            }
        }
    }

})

function isSuc() {

    todos.forEach(data => {

        const inputs = document.querySelectorAll("#input")
        if (data.isSucBtn == "true") {

            for (let input of inputs) {
                const { inputId } = input.dataset

                if (inputId == data.id) {
                    input.classList.add("succesInput")
                }
            }
        }
    })
}