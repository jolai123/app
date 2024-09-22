// script.js

let calendarGrid = [];
let tasks = [];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const prevMonthBtn = document.getElementById('prev-month-btn');
const nextMonthBtn = document.getElementById('next-month-btn');
const monthDisplay = document.getElementById('month-display');
const calendarGridElement = document.getElementById('calendar-grid');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListElement = document.getElementById('task-list');

prevMonthBtn.addEventListener('click', prevMonth);
nextMonthBtn.addEventListener('click', nextMonth);
addTaskBtn.addEventListener('click', addTask);

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

function renderCalendar() {
    const monthName = getMonthName(currentMonth);
    monthDisplay.textContent = `${monthName} ${currentYear}`;
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    calendarGridElement.innerHTML = '';
    for (let i = 0; i < daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-grid-cell';
        dayElement.textContent = i + 1;
        calendarGridElement.appendChild(dayElement);
        calendarGrid.push(dayElement);
    }
}

function getMonthName(month) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[month];
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = '';
        renderTaskList();
    }
}

function renderTaskList() {
    taskListElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task;
        taskListElement.appendChild(taskElement);
    });
}

renderCalendar();
renderTaskList();