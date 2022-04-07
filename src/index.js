import note from "./components/todo.js";
import ('./styles/index.css');


let todo_section = document.getElementById("todos-container");

document.getElementById('create-todo-btn').addEventListener('click',function(){
    // console.log('clicked');
    let content = document.getElementById('todo-input').value;
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(content);
    localStorage.setItem('todos',JSON.stringify(todos));
    renderNotes();
})

function renderNotes(){
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todo_section.textContent='';
    todos.forEach(el => {
        let div = document.createElement('div');
        div.innerHTML = note(el);
        todo_section.append(div);
    })
    let done_btns = document.querySelectorAll('.done-btn');

    [...done_btns].forEach((el,index) => el.addEventListener('click',function(){
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.splice(index,1);
        localStorage.setItem("todos", JSON.stringify(todos));
        renderNotes();
        console.log('mark as done');
    }))

}

function markAsDone(){

}
renderNotes();