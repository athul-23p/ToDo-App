import note from "./components/todo.js";
import logo from './assets/todo.svg';
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
addHeader();
function addHeader(){
    const header = document.getElementById('header');
    const image_container = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src',logo);
    image_container.append(img);
    const title = document.createElement('h1');
    title.textContent = 'TODO App';

    header.append(image_container,title);
}
renderNotes();