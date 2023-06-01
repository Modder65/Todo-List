/* IMPORTS */

import './style.css';
import logoImg from './assets/images/logo.svg';
import inboxImg from './assets/images/inbox.svg';
import todayImg from './assets/images/today.svg';
import thisweekImg from './assets/images/thisweek.svg';
import addImg from './assets/images/add.svg';
import githubImg from './assets/images/github.svg';
import checklist from './assets/images/checklist.svg';
import trash from './assets/images/trash.svg';


/* GLOBAL VARIABLES */

const content = document.getElementById('content');
const contentHeader = document.getElementById('contentHeader');
let inboxTaskList = document.createElement('div');
const sideBar = document.getElementById('sideBar');
const logo = document.getElementById('logo');
const contentImg = document.getElementById('contentImg');
const footerImg = document.getElementById('footerImg');

//todos should be dynamically created objects using factories or constructors/classes
//each todo item should have a title, description, dueDate, and priority 
//add ability to create projects which act as container that can house a list of todos
//a default project should be selected for the user on page load

//class to create new todos
//class to assign a completion date to each todo item
//class to change priority of todo item
//class to set todos as complete
//use localstorage to allow data to be saved on the users computer




/* IMAGE LAYOUT */

logo.setAttribute("src", logoImg);
contentImg.setAttribute("src", addImg);
footerImg.setAttribute("src", githubImg); 

//accesses all elements with class navImg and converts them to an array of values
const navImgs = document.getElementsByClassName('navImg');
const imageElements = Array.from(navImgs);

//stores the icons to be used for the sideBar buttons
const sideBarImgs = [
    inboxImg,
    todayImg,
    thisweekImg,
    addImg
]; 

//loops through navImgs variable after converting the data to an array,
//and sets each image element to use the correct image
imageElements.forEach((imageElement, index) => {
    imageElement.setAttribute("src", sideBarImgs[index]);
});


/* CREATING & APPENDING ELEMENTS */
content.insertBefore(inboxTaskList, document.getElementById('addTask'));

//accesses all elements with the class navBtn dynamically
function getNavBtns() {
    return document.querySelectorAll('.navBtn');
}
let navBtns = getNavBtns();

//accesses all eements with the class inboxTasks and hides them if the user isnt on the inbox tab
function getInboxTasks() {
    return document.querySelectorAll('.inboxTask');
}
let inboxTasks = getInboxTasks();

function updateInboxTasks() {
    inboxTasks.forEach(task => {
        if (document.querySelector("#inbox").classList.contains("selected")) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    }); 
}



//iterates through all elements with class navBtn and assings each a click event listener
function updateLoop() {
    navBtns.forEach(navBtn => {
        navBtn.addEventListener('click', () => {
            //Remove selected class from all navBtns and bold class from their child buttons 
            navBtns.forEach(btn => {
                btn.classList.remove('selected');
                btn.querySelector('button').classList.remove('bold');
            });
    
            //Add selected class to the clicked navBtn and bold class to its child button
            navBtn.classList.add('selected');
            navBtn.querySelector('button').classList.add('bold');
            //change the content header and display depending on the selected navBtn
            if (navBtn.getAttribute("id") == "inbox") {
                contentHeader.textContent = "Inbox";
                contentHeader.style.display = "initial";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                addTask.style.display = "flex";
                inboxTasks = getInboxTasks();
                updateInboxTasks();
            } else if (navBtn.getAttribute("id") == "today") {
                contentHeader.textContent = "Today"
                contentHeader.style.display = "initial";
                addTask.style.display = "none";
                taskForm.style.display = "none";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                taskInput.value = "";
            } else if (navBtn.getAttribute("id") == "thisweek") {
                contentHeader.textContent = "This Week";
                contentHeader.style.display = "initial";
                addTask.style.display = "none";
                taskForm.style.display = "none";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                taskInput.value = "";
            } else if (navBtn.classList.contains('projectBtn')) {
                contentHeader.textContent = navBtn.querySelector('button').textContent;
                navBtns = getNavBtns();
                updateLoop();
                inboxTasks = getInboxTasks();
                updateInboxTasks();
                //if navBtn already has selected class 
                if (navBtn.classList.contains('delete')) {
                    addTask.style.display = "none";
                    contentHeader.style.display = "none";
                } else {
                    contentHeader.style.display = "initial";
                    addTask.style.display = "flex";
                }
            }
        });
    });
}

updateLoop();

//button that reveals a prompt to add a task to the page
//div that holds input and div which holds both buttons
const addTask = document.getElementById('addTask');
const taskForm = document.createElement('div');
const formBtns = document.createElement('div');
formBtns.setAttribute("class", "formBtns");
content.appendChild(taskForm);
taskForm.setAttribute("class", "taskForm");
taskForm.style.display = "none";
const taskInput = document.createElement('input');
taskForm.appendChild(taskInput);
taskInput.style.display = "none";
taskInput.setAttribute("type", "text");
taskForm.appendChild(formBtns);
formBtns.style.display = "none";
const addBtn = document.createElement('button');
addBtn.setAttribute("class", "addBtn");
addBtn.textContent = "Add";
formBtns.appendChild(addBtn);
const cancelBtn = document.createElement('button');
cancelBtn.setAttribute("class", "cancelBtn");
cancelBtn.textContent = "Cancel";
formBtns.appendChild(cancelBtn);


addTask.addEventListener('click', () => {
    addTask.style.display = "none";
    taskForm.style.display = "flex";
    taskInput.style.display = "initial";
    formBtns.style.display = "flex";
});



//button that reveals a prompt to add a project to the page
//div that holds input and div which holds both buttons
const addProject = document.getElementById('addProject');
const projectForm = document.createElement('div');
const projectBtns = document.createElement('div');
projectBtns.setAttribute("class", "formBtns");
sideBar.appendChild(projectForm);
projectForm.setAttribute("class", "taskForm");
projectForm.style.display = "none";
const projectInput = document.createElement('input');
projectForm.appendChild(projectInput);
projectInput.style.display = "none";
projectInput.setAttribute("type", "text");
projectForm.appendChild(projectBtns);
projectBtns.style.display = "none";
const projectAddBtn = document.createElement('button');
projectAddBtn.setAttribute("class", "addBtn");
projectAddBtn.textContent = "Add";
projectBtns.appendChild(projectAddBtn);
const projectCancelBtn = document.createElement('button');
projectCancelBtn.setAttribute("class", "cancelBtn");
projectCancelBtn.textContent = "Cancel";
projectBtns.appendChild(projectCancelBtn);

addProject.addEventListener('click', () => {
    addProject.style.display = "none";
    projectForm.style.display = "flex";
    projectInput.style.display = "initial";
    projectBtns.style.display = "flex";
    projectInput.value = "";
});

addBtn.addEventListener('click', () => {
    if (taskInput.value == "") {
        alert("Must enter a task.");
    } else {
        taskForm.style.display = "none";
        addTask.style.display = "flex";
        const task = document.createElement("div");
        const taskLeftPanel = document.createElement("div");
        const taskRightPanel = document.createElement("div");
        const taskCheckBox = document.createElement("span");
        const taskName = document.createElement("p");
        const taskDate = document.createElement("input");
        const deleteTask = document.createElement("img");
        task.setAttribute("class", "addTask");
        task.classList.add("task");
        if (document.querySelector('#inbox').classList.contains('selected')) {
            task.classList.add('inboxTask');
        } else {
            //do nothing
        }
        taskCheckBox.setAttribute("class", "checkBox");
        taskName.textContent = taskInput.value;
        taskDate.setAttribute("type", "date");
        deleteTask.setAttribute("src", trash);
        content.appendChild(task, addTask);
        task.appendChild(taskLeftPanel);
        task.appendChild(taskRightPanel);
        taskLeftPanel.appendChild(taskCheckBox);
        taskLeftPanel.appendChild(taskName);
        taskRightPanel.appendChild(taskDate);
        taskRightPanel.appendChild(deleteTask);
        taskInput.value = "";

        

        taskCheckBox.addEventListener('click', () => {
            if (taskCheckBox.style.backgroundColor == "rgb(76, 175, 80)") {
                console.log();
                taskCheckBox.style.backgroundColor = "transparent"
            } else {
                taskCheckBox.style.backgroundColor = "rgb(76, 175, 80)";
            }
        });

        //click event on task trash image to delete the task from the list
        deleteTask.addEventListener('click', () => {
            task.remove();
        });
    }
});

//when the cancel task or project button is clicked it hides the form 
cancelBtn.addEventListener('click', () => {
    taskInput.value = "";
    taskForm.style.display = "none";
    addTask.style.display = "flex";
});

projectCancelBtn.addEventListener('click', () => {
    projectInput.value = "";
    projectForm.style.display = "none";
    addProject.style.display = "flex";
    addProject.classList.remove('selected');
    addProject.querySelector('button').classList.remove('bold');
});

//project add button onclick(as long as thers text in the input field)
//creates a new container div, img, and button element
//append the img and button element as children to the container div
//append the container div to sideBar 
projectAddBtn.addEventListener('click', () => {
    if (projectInput.value == "") {
        alert("You must name your project.");
    } else {
        const project = document.createElement('div');
        project.setAttribute("class", "navBtn");
        project.classList.add("projectBtn");
        const projectLeft = document.createElement('div');
        const projectImg = document.createElement('img');
        projectImg.setAttribute("src", checklist);
        const projectText = document.createElement('button');
        projectText.textContent = projectInput.value;
        const deleteProject = document.createElement('img');
        deleteProject.setAttribute("src", trash);
        project.appendChild(projectLeft);
        project.appendChild(deleteProject);
        projectLeft.appendChild(projectImg);
        projectLeft.appendChild(projectText);
        projectForm.style.display = "none";
        sideBar.insertBefore(project, addProject);
        addProject.style.display = "flex";
        addProject.classList.remove('selected');
        addProject.querySelector('button').classList.remove('bold');

        //everytime a new project is created, updated the navBtns nodelist and run the forEach loop again
        navBtns = getNavBtns();
        updateLoop();

        //click event on project trash image to delete the project from the list
        deleteProject.addEventListener('click', () => {
            project.classList.add('delete');
            project.remove();
        });
    }
});

//add a special class to tasks depending on which section they were created under
//when a new section is selected, change display to none on all of the tasks 
//created from other sections 


//getting project tasks is a bit trickier 
//first you have to set a special class to each project
//the class should equal "project"+"-"+projectInput.value
//