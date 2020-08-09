const addButton = document.querySelector("#addButton");
const taskInput = document.querySelector("#searchBar");
//const todoList = document.querySelector("#taskZone");
const rowList = document.querySelector("#todo-list");

addButton.disabled = true;

addButton.addEventListener("click", newTask);
rowList.addEventListener("click", deleteTask);
rowList.addEventListener("dblclick", renameTask);
addEventListener("keyup",ableBtn);
                           





function newTask(event){ 
    
let taskName = taskInput.value;
    
const newTodo = document.createElement("li");
newTodo.innerText = taskName;
newTodo.classList.add("todo-item");
rowList.appendChild(newTodo);
    
const trashButton = document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
newTodo.appendChild(trashButton);

//trashButton.addEventListener("click",deleteTask(e));
    
const ligne = document.createElement('hr');
ligne.classList.add("ligne");
newTodo.appendChild(ligne);
    
taskInput.value = "";
ableBtn();
}

function deleteTask(e){
    const item =e.target;
    console.log(item);
    if (item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.remove();
    } else if (item.classList[0]==="fas"){
        const todo = item.parentElement.parentElement;
        todo.classList.add('fall');
        todo.remove();  
    }
}

function renameTask(e){
    const item =e.target;
    if (item.classList[0]==="todo-item"){
        console.log(item.textContent);

    }
}

function ableBtn() {
    if (taskInput.value != "") {
        addButton.removeAttribute("disabled");
    } else {
        addButton.setAttribute("disabled", null);
    }
}

