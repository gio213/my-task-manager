const message =
  "Welcome to your task manage, Press: \n 1. to see all your tasks \n 2. to add a task \n 3. to delete a task\n 4. to mark a task as done \n 5. to Exit the task manager	";
const prompt = require("prompt-sync")();
const fs = require("fs");

const savedTasks = [];
console.log(typeof savedTasks);
const markedAsDone = [];
let taskIndex = 0;

function addTask() {
  const task = prompt("Enter your task: ");
  if (task.length === 0) {
    console.log("Cannot add empty task 😒");
  } else {
    savedTasks.push(task);
    console.log("task added");
  }
  fs.writeFileSync("tasks.json", JSON.stringify(savedTasks));
  console.log(typeof savedTasks);
  console.log(taskIndex);
  console.log(savedTasks);

  mainMenu();
}

function showAllTasks() {
  const tasks = fs.readFileSync("tasks.json", "utf8");
  console.log(tasks);
  mainMenu();
}

function deleteTask() {
  fs.readFileSync("tasks.json", "utf8");
  const taskToDelete = prompt("Enter the task you want to delete: ");
  const index = savedTasks.indexOf(taskToDelete);
  savedTasks.splice(index, 1);
  fs.writeFileSync("tasks.json", JSON.stringify(savedTasks));
  console.log("task deleted");
  mainMenu();
}

function exit() {
  console.log("Goodbye");
  process.exit();
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
