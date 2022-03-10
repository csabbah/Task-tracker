var formEl = document.querySelector('#task-form');
var tasksToDoEl = document.querySelector('#tasks-to-do');

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (!taskNameInput || !taskTypeInput) {
    alert('You need to fill out the task form!');
    return false;
  }

  formEl.reset();

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement('li');
  listItemEl.className = 'task-item';

  // create div to hold task info and add to list item
  listItemEl.innerHTML = `<div class="task-info"><h3 class="task-name">${taskDataObj.name}</h3><span class="task-type">${taskDataObj.type}</span></div>`;

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener('submit', taskFormHandler);
