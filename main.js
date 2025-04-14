let input = document.getElementById("inputValue")
let button = document.getElementById("addValue")
let list = document.querySelector(".list")

button.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask()
    }
})

function addTask() {
    if (input.value.trim() === '') {
        window.alert("Please, add the Task")
    } else {
        newTask()
    }

}

function newTask() {
    let div = document.createElement("div")
    div.classList.add("item")
    let task = document.createTextNode(input.value)
    let btn = document.createElement("button")
    btn.textContent = "Delete"

    btn.addEventListener("click", function () {
        btn.parentElement.remove()
    })

    list.append(div)
    div.append(task)
    div.append(btn)

    input.value = '';
}
