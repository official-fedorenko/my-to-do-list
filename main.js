const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function () {
  
  const taskText = taskInput.value.trim();
  
  if (taskText === '') return;
  
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.textContent = taskText;
  
  taskList.appendChild(taskItem)
  
  taskInput.value = '';
});
