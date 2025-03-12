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
})
