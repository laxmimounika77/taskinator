var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    var taskToDoEl = document.querySelector("#task-to-do");
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent="This is a new task";
    taskItemEl.className="task-item";
    taskToDoEl.appendChild(taskItemEl);

}

buttonEl.addEventListener("click", createTaskHandler);