import ('../styles/todo.css');

function note(data){
    return `<div class='todo-item'>
        <p>${data}</p>
        <button class='done-btn'>Mark as Done</button>
    </div>`;
}

export default note;