// #task-form is the form itself, we use an event listener on it and we
// use the formEl.reset() function to clear the input after submit
var formEl = document.querySelector('#task-form');
// This is the UL element we want to add our LI in
var tasksToDoEl = document.querySelector('#tasks-to-do');

var taskFormHandler = function (event) {
  event.preventDefault(); // Don't refresh browser upon form submit

  // Extract the data from the input and select elements
  // Select being the drop down element, name ='task-type' being the options in the dropddwn
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // Check if inputs are empty (validate)
  if (!taskNameInput || !taskTypeInput) {
    alert('You need to fill out the task form!');
    return false;
  }

  // Clear the form (reset everything to blank)
  formEl.reset();

  // Create a object to hold all the data the user inputs
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  // Pass down the object we created and updated into into the function
  // Function builds the actual element based on the data we receive
  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement('li');
  listItemEl.className = 'task-item';

  // create div to hold task info and add to list item
  listItemEl.innerHTML = `
  <div class="task-info">
  <h3 class="task-name">${taskDataObj.name}</h3>
  <span class="task-type">${taskDataObj.type}</span>
  </div>`;

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener('submit', taskFormHandler);
