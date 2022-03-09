var formEl = document.querySelector('#task-form');
var taskListEl = document.querySelector('.task-list');

// package up data as an object
var taskDataObj = {};

var taskEl = (taskNameInput, taskTypeInput) => {
  // Create the LI element
  var newTask = document.createElement('li');
  newTask.classList.add('task-info');
  newTask.innerHTML = `<h4 class="task-item">${taskNameInput}<span class='task-type'>${taskTypeInput}</span></h4>`;
  // Add it to the main wrapper
  taskListEl.appendChild(newTask);
};
var createTask = () => {
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  var taskNameInput = document.querySelector("input[name='task-name']").value;

  taskEl(taskNameInput, taskTypeInput);

  // package up data as an object
  taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  createTask();
  document.querySelector("input[name='task-name']").value = ''; // Reset value of input
  console.log(taskDataObj);
});
