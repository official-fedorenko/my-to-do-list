const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener("click", function () {
  let text = taskInput.value.trim();
  
  if (text === '' || text === ' ') {
    return;
  }
  // елемент списка, она же задача в нашем списке
  let addLi = document.createElement("li")
  addLi.classList.add('task');
  addLi.textContent = text;
  
  // кнопка удалить 
  let delButton = document.createElement('button');
  delButton.classList.add('delete-btn');
  delButton.textContent = 'Удалить';
  delButton.addEventListener('click', function () {
    taskList.removeChild(addLi)
  });
  
  // выполнено задание
  addLi.addEventListener('click', function () {
    addLi.classList.toggle('completed')
  })
  
  //  функция колоно кнопки удалить
  addLi.appendChild(delButton)
  
  // добавляем список
  taskList.appendChild(addLi)
  // очищает  значение в поле вода 
  taskInput.value = '';
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task').forEach((task) => {
    tasks.push({
      text: task.firstChild.textContent,
      complated: task.classList.contains('complated')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks))
};

function loadTask() {
  const taskItem = JSON.parse(localStorage.getItem('tasks'))
  
  if (!savedTasks) {
    return
  }
  
  savedTasks.forEach(task => {
    const taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.textContent = task.text;
    
    if (task.complated) {
      taskItem.classList.toggle('complated');
    };
    
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('complared')
      saveTasks();
    } );
    
    const deletButton = document.createElement('button')
    deletButton.classList.add('delete-btn')
    deletButton.textContent = 'Удалить'
    
    
    deletButton.addEventListener('click', function () {
      taskList.removeChild(taskItem)
      saveTasks();
    })
    
    taskItem.appendChild(deletButton)
    taskList.appendChild(taskItem)
  } )
}
