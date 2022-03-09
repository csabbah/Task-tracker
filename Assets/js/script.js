var formEl = document.querySelector('#task-form');

var taskListEl = document.querySelector('.task-list');

var counter = 0;
var createTask = () => {
  var newTask = document.createElement('li');
  newTask.innerHTML = `<li class="task-item">Task #${counter}</li>`;
  taskListEl.appendChild(newTask);
  counter++;
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  createTask();
});
