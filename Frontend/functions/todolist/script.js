// script.js

let todoList = [];

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListElement = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
        todoList.push(newTodo);
        todoInput.value = '';
        renderTodoList();
    }
}

function renderTodoList() {
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoElement = document.createElement('li');
        todoElement.textContent = todo;
        todoElement.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
        todoListElement.appendChild(todoElement);
    });
}

renderTodoList();