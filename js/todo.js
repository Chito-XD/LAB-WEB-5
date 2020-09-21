

const post = document.getElementById("ButtonPost");
const clear = document.getElementById("ButtonClear");
const mark = document.getElementById("ButtonMark");
const del = document.getElementById("ButtonDelete");
 
post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

 
function TodoPost(e) {
    e.preventDefault();
    
    const todo = document.getElementById("todoText").value;
    const list = document.getElementById("todoList");

    let currentList = list.innerHTML;
    list.innerHTML = currentList + `<input type = "checkbox" name="todo" />  ${todo}  <br>`
}

 
function TodoClear(e) {
    e.preventDefault();
    const list = document.getElementsByName("todo");
    for( task of list) {
        task.checked = false;
    }
}
 

function TodoMark(e) {
    e.preventDefault();
    const list = document.getElementsByName("todo");
    for( task of list) {
        task.checked = true;
    }
}
 

function TodoDel(e) {
    e.preventDefault();
    const list = document.getElementById("todoList");
    list.innerHTML = "";
}