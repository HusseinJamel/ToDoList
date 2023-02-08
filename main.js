let inputTask = document.getElementById('inputTask');
let addBtn = document.getElementById('addBtn');

let tasks;

if (localStorage.taskStorage != null) {
  tasks = JSON.parse(localStorage.taskStorage);
}
else {
  tasks = [];
}

addBtn.addEventListener('click', () => {
  let newTask = {
    task: inputTask.value,
  }
  
  tasks.push(newTask);
  
  localStorage.setItem('taskStorage', JSON.stringify(tasks))
  
  inputTask.value = '';
  
  showTasks();
})

function showTasks() {
  
  let taskDiv = '';
  
  for(let i = 0 ; i < tasks.length ;i++){
    taskDiv += `
    <div id="theDoneTask" class="task">
      <h4>${tasks[i].task}</h4>
      <div>
        <button onclick="doneTask(${i})" id="donebtn"><img id="doneicon" src="doneicon.png"></button>
        <button onclick="deleteTask(${i})" id="deletebtn"><img id="deleteicon" src="deleteicon.png"></button>
      </div>
    </div>
    `
  }
  
  document.getElementById('outputTask').innerHTML = taskDiv;
}

function deleteTask(i){
  tasks.splice(i, 1);
  localStorage.taskStorage = JSON.stringify(tasks)
  showTasks()
}

function doneTask(i){
  
}

showTasks();