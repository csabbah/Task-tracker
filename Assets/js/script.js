var buttonEl = document.querySelector('#save-task');
var buttonDeleteEl = document.querySelector('#delete-task');

var taskListEl = document.querySelector('.task-list');
var counter = 0;

var createTask = () => {
  var newTask = document.createElement('li');
  newTask.innerHTML = `<li class="task-item">Task #${counter}</li>`;
  taskListEl.appendChild(newTask);
  counter++;
};

var removeTask = () => {
// };
buttonEl.addEventListener('click', createTask);

buttonDeleteEl.addEventListener('click', removeTask);
