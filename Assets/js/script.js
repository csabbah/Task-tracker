var formEl = document.querySelector('#task-form');

var taskListEl = document.querySelector('.task-list');

var counter = 0;
var createTask = () => {
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  var taskNameInput = document.querySelector("input[name='task-name']").value;

  var listItemEl = document.createElement('li');
  listItemEl.classList.add('task-item');
  var newTask = document.createElement('div');
  newTask.classList.add('task-info');
  newTask.innerHTML = `<h4 class="task-item">Task #${counter}: ${taskNameInput}<span class='task-type'>${taskTypeInput}</span></h4>`;

  taskListEl.appendChild(newTask);
  counter++;
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  createTask();
  document.querySelector("input[name='task-name']").value = '';
});
