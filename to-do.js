document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value.trim();
    const taskTime = taskDatetime.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} <small>${taskTime ? `- Due: ${new Date(taskTime).toLocaleString()}` : ''}</small></span>
        <div>
            <button onclick="markComplete(this)">✔️</button>
            <button onclick="editTask(this)">✏️</button>
            <button onclick="removeTask(this)">🗑️</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDatetime.value = '';
}

function markComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').textContent;
    const taskInput = document.getElementById('task-input');

    taskInput.value = taskText.split(' - ')[0].trim();
    taskItem.remove();
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
