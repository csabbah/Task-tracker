/* 
How we delete elements:
-For each task we generate, add an ID as a data attribute i.e. <li data-task-id=0></li>
-Then for task we create a delete button and assign the button that same ID
-From there, we add an event listener to the entire container that includes the Task itself
-Important - we add the delete function in this same event listener (The delete function is underneath)
/*
var taskButtonHandler = function (event) {
  // This is how we can filter out which element we are clicking on
  if (event.target.matches('.delete-btn')) {
    var currentId = event.target.attributes['data-task-id'].value;
    console.log('you clicked on the delete button with an id of:' + currentId);
    deleteTask(currentId);
  }
}

-Finally we create the function to refer to the same LI element with the matching ID
var deleteTask = function (currentId) {
  // Since our LI element has the same ID number as the Current ID in the delete button itself
  // We can reference the LI element as a whole and delete the entire element
  var taskSelected = document.querySelector(
    `.task-item[data-task-id="${currentId}"]`
  );
  taskSelected.remove();
};
*/

// #task-form is the form itself, we use an event listener on it and we
// use the formEl.reset() function to clear the input after submit
var formEl = document.querySelector('#task-form');
// This is the UL element we want to add our LI in
var tasksToDoEl = document.querySelector('#tasks-to-do');
var pageContentEl = document.querySelector('#page-content');

var taskIdCounter = 0;

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
  // Create list item
  var listItemEl = document.createElement('li');
  listItemEl.className = 'task-item';

  // Create div to hold task info and add to list item
  listItemEl.innerHTML = `
  <div class="task-info">
  <h3 class="task-name">${taskDataObj.name}</h3>
  <span class="task-type">${taskDataObj.type}</span>
  </div>`;

  // Add task id as a custom attribute to the LI element
  listItemEl.setAttribute('data-task-id', taskIdCounter);

  // Bring in the function and reference the current ID
  var taskActionsEl = createTaskActions(taskIdCounter);
  // Add the 'edit', 'delete' and 'dropdown' to each task
  listItemEl.append(taskActionsEl);

  // Add list item to list
  tasksToDoEl.appendChild(listItemEl);

  // Increment value for each iteration so each item has a unique number
  taskIdCounter += 1;
};

// Creating the 'edit', 'delete' and the 'dropdown' button to each task
var createTaskActions = function (taskId) {
  var actionContainerEl = document.createElement('div');
  actionContainerEl.className = 'task-actions';

  // Create edit button
  var editButtonEl = document.createElement('button');
  editButtonEl.textContent = 'Edit';
  editButtonEl.className = 'btn edit-btn';
  editButtonEl.setAttribute('data-task-id', taskId);

  actionContainerEl.appendChild(editButtonEl);

  // Create delete button
  var deleteButtonEl = document.createElement('button');
  deleteButtonEl.textContent = 'Delete';
  deleteButtonEl.className = 'btn delete-btn';
  deleteButtonEl.setAttribute('data-task-id', taskId);

  actionContainerEl.appendChild(deleteButtonEl);

  var statusSelectEl = document.createElement('select');

  statusSelectEl.className = 'select-status';
  statusSelectEl.setAttribute('name', 'status-change');
  statusSelectEl.setAttribute('data-task-id', taskId);

  var statusChoices = ['To Do', 'In Progress', 'Completed'];
  for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement('option');
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute('value', statusChoices[i]);

    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  actionContainerEl.appendChild(statusSelectEl);
  return actionContainerEl;
};

// Delete function
var deleteTask = function (currentId) {
  // Since our LI element has the same ID number as the Current ID in the delete button itself
  // We can reference the LI element as a whole and delete the entire element
  var taskSelected = document.querySelector(
    `.task-item[data-task-id="${currentId}"]`
  );
  taskSelected.remove();
};

// Event bubbling function - we add the event to a MAIN container...
var taskButtonHandler = function (event) {
  // This is how we can filter out which element we are clicking on
  if (event.target.matches('.delete-btn')) {
    // var currentId = event.target.attributes['data-task-id'].value;
    var currentId = event.target.getAttribute('data-task-id');
    console.log('you clicked on the delete button with an id of:' + currentId);
    deleteTask(currentId);
  }

  if (event.target.matches('.edit-btn')) {
    var currentId = event.target.attributes['data-task-id'].value;
    console.log('you clicked on the edit button with an id of:' + currentId);
  }
};

formEl.addEventListener('submit', taskFormHandler);

pageContentEl.addEventListener('click', taskButtonHandler);
