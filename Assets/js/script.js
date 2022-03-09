var buttonEl = document.querySelector('#save-task');
var buttonDeleteEl = document.querySelector('#delete-task');

var taskListEl = document.querySelector('.task-list');

var createTask = () => {
  var newTask = document.createElement('li');
  newTask.innerHTML = `<li class="task-item">Task #${counter}</li>`;
  taskListEl.appendChild(newTask);
};

buttonEl.addEventListener('click', createTask);
