const message =
  "Welcome to your task manage, Press: \n 1. to see all your tasks \n 2. to add a task \n 3. to delete a task\n 4. to mark a task as done \n 5. to Exit the task manager	";
const prompt = require("prompt-sync")();
const fs = require("fs");

const savedTasks = [];
const markedAsDone = [];
let taskIndex = 0;

function addTask() {
  const task = prompt("Enter your task: ");
  taskIndex = savedTasks.length;
  savedTasks.push(` task(${taskIndex}): ${task}`);
  console.log("task added");
  mainMenu();
}

function deleteTask() {
  console.log(savedTasks);
  const taskDeleteNumber = prompt("Enter the task number to delete: ");
  savedTasks.splice(taskDeleteNumber, 1);
  console.log("task deleted");
  console.log(savedTasks);
  mainMenu();
}

function markTaskAsDone() {
  console.log(savedTasks);
  const taskDoneNumber = prompt("Enter the task number to mark as done: ");
  markedAsDone.push(savedTasks[taskDoneNumber]);
  savedTasks.splice(taskDoneNumber, 1);
  console.log("task marked as done");
  console.log(savedTasks);
  mainMenu();
}

function exit() {
  console.log("Goodbye");
  process.exit();
}

function showAllTasks() {
  console.log(`all tasks: ${savedTasks}`);
  console.log(`marked as done: ${markedAsDone}`);
  mainMenu();
  if (savedTasks.length === 0) {
    console.log("You have no tasks");
    mainMenu();
    if (markedAsDone.length === 0) {
      console.log("You have no tasks marked as done");
      mainMenu();
    }
  }
}

function mainMenu() {
  console.log(message);
  const choice = prompt("Enter your choice: ");
  switch (choice) {
    case "1":
      showAllTasks();
      break;
    case "2":
      addTask();
      break;
    case "3":
      deleteTask();
      break;
    case "4":
      markTaskAsDone();
      break;
    case "5":
      exit();
      break;

    default:
      console.log("Invalid choice");
      mainMenu();
      break;
  }
}

mainMenu();
