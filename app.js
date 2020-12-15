const addTask = document.querySelector(".addTask");
const list = document.querySelector(".list");
const taskInput = document.querySelector("#taskInput");

class Task {
    constructor(title, progres) {
        this.title = title;
        this.progres = progres;
        const element = document.createElement("div");
        const Tasktitle = document.createElement("p");
        const button1 = document.createElement("BUTTON");
        const button2 = document.createElement("BUTTON");
        element.classList.add("element");
        button1.classList.add("done");
        button2.classList.add("delete");
        list.appendChild(element);
        element.appendChild(Tasktitle);
        element.appendChild(button1);
        element.appendChild(button2);
        Tasktitle.innerHTML = this.title;
        button1.innerHTML = "Done";
        button2.innerHTML = "Delete";
        button2.setAttribute("data-del", taskInput.value);
        button2.addEventListener("click", () => del(button2));
        button1.addEventListener("click", () => done(button1));
    }
}

let table = [];


addTask.addEventListener("click", () => {
    if (taskInput.value == "") {
        alert("You cannot add blank task!")
    } else {
        let task = new Task(taskInput.value, "notDone")
        table.push(task);

    }
});

const del = (e) => {
    table.reduce(x => x.title === e.getAttribute("data-del"));
    e.parentElement.remove();
    // document.querySelector(`div[data-del=${e.getAttribute("data-del")}`).remove();
    console.log(table);
}
const done = (e) => {
    e.parentElement.classList.add("doneDiv");
    e.classList.add("doneBtn");
    e.disabled = true;
}
