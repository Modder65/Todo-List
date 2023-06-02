//todos should be dynamically created objects using factories or constructors/classes
//each todo item should have a title, description, dueDate, and priority 
//add ability to create projects which act as container that can house a list of todos
//a default project should be selected for the user on page load

//class to create new todos
//class to assign a completion date to each todo item
//class to change priority of todo item
//class to set todos as complete
//use localstorage to allow data to be saved on the users computer

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
/*
let inboxTaskList = document.createElement('div');
inboxTaskList.setAttribute('class', 'taskList');
*/
const sideBar = document.getElementById('sideBar');
const logo = document.getElementById('logo');
const contentImg = document.getElementById('contentImg');
const footerImg = document.getElementById('footerImg');
const addTask = document.getElementById('addTask');
let taskListStorage = [];
let projectId = "";
createTaskList('inbox');



/* FUNCTIONS */

function hideTaskForm() {
    taskInput.value = "";
    taskForm.style.display = "none";
    addTask.style.display = "flex";
}

function hideProjectForm() {
    projectInput.value = "";
    projectForm.style.display = "none";
    addProject.style.display = "flex";
    addProject.classList.remove('selected');
    addProject.querySelector('button').classList.remove('bold');
}

function revealTaskForm() {
    addTask.style.display = "none";
    taskForm.style.display = "flex";
    taskInput.style.display = "initial";
    formBtns.style.display = "flex";
}

function revealProjectForm() {
    addProject.style.display = "none";
    projectForm.style.display = "flex";
    projectInput.style.display = "initial";
    projectBtns.style.display = "flex";
    projectInput.value = "";
}

function createTask() {
    //loop through the taskList array
    //until it finds one with its display property set to initial
    //append the task to the only list with display: initial
    if (taskInput.value === '') {
        alert('Must enter a task.');
      } else {
        taskForm.style.display = 'none';
        addTask.style.display = 'flex';
        const task = document.createElement('div');
        const taskLeftPanel = document.createElement('div');
        const taskRightPanel = document.createElement('div');
        const taskCheckBox = document.createElement('span');
        const taskName = document.createElement('p');
        const taskDate = document.createElement('input');
        const deleteTask = document.createElement('img');
        

        task.classList.add('addTask', 'task');
        taskCheckBox.classList.add('checkBox');
        taskName.textContent = taskInput.value;
        taskDate.setAttribute('type', 'date');
        deleteTask.setAttribute('src', trash);
        for (let i = 0; i < taskListStorage.length; i++) {
            if (taskListStorage[i].style.display === 'initial') {
                taskListStorage[i].appendChild(task);
            } else {
                // do nothing
            }
        }
        task.appendChild(taskLeftPanel);
        task.appendChild(taskRightPanel);
        taskLeftPanel.appendChild(taskCheckBox);
        taskLeftPanel.appendChild(taskName);
        taskRightPanel.appendChild(taskDate);
        taskRightPanel.appendChild(deleteTask);
        taskInput.value = '';
    
        taskCheckBox.addEventListener('click', () => {
          taskCheckBox.style.backgroundColor = taskCheckBox.style.backgroundColor === 'rgb(76, 175, 80)' ? 'transparent' : 'rgb(76, 175, 80)';
        });
    
        deleteTask.addEventListener('click', () => {
          task.remove();
        });
      }
}

function createProject() {
    if (projectInput.value === '') {
        alert('You must name your project.');
      } else {
        const project = document.createElement('div');
        project.classList.add('navBtn', 'projectBtn');
        const projectLeft = document.createElement('div');
        const projectImg = document.createElement('img');
        projectImg.setAttribute('src', checklist);
        const projectText = document.createElement('button');
        projectText.textContent = projectInput.value;
        const deleteProject = document.createElement('img');
        deleteProject.setAttribute('src', trash);
    
        project.appendChild(projectLeft);
        project.appendChild(deleteProject);
        projectLeft.appendChild(projectImg);
        projectLeft.appendChild(projectText);
        projectForm.style.display = 'none';
        sideBar.insertBefore(project, addProject);
        addProject.style.display = 'flex';
        addProject.classList.remove('selected');
        addProject.querySelector('button').classList.remove('bold');
        navBtns = getNavBtns();
        updateLoop();
        project.setAttribute("id", projectInput.value);
        createTaskList(projectInput.value);

        deleteProject.addEventListener('click', () => {
          project.classList.add('delete');
          project.remove();
          //loops through task Lists and deletes the one that correlates with the deleted project
          for (let i = 0; i < taskListStorage.length; i++) {
            if (taskListStorage[i].id.includes(projectId)) {
                taskListStorage[i].remove();
            }
          } 
        });
      }
}

//creates a new taskList based on the selected project in the createProject function
function createTaskList(projectId) {
    const taskList = document.createElement('div');
    taskList.classList.add('taskList');
    taskList.setAttribute('id', `taskList_${projectId}`);
    if (projectId === 'inbox') {
        taskList.style.display = 'initial';
    } else {
        // do nothing
    }
    //append the task list to the task container
    content.insertBefore(taskList, addTask);
    taskListStorage.push(taskList);
}




////FIND OUT HOW TO ACCESS PROJECT ID VARIABLE IN SHOWTASKLIST FUNCTION////
////CREATETASKLIST FUNCTION IS CALLED INSIDE THE CREATEPROJECT FUNCTION////
////SO A UNIQUE TASK LIST IS CREATED EVERYTIME A NEW FUNCTION IS CREATED////
////SHOWTASKLIST FUNCTION MUST BE CALLED INSIDE UPDATELOOP FUNCTION WHEN A PROJECT IS SELECTED////


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
//content.insertBefore(inboxTaskList, document.getElementById('addTask'));

//accesses all elements with the class navBtn dynamically
function getNavBtns() {
    return document.querySelectorAll('.navBtn');
}
let navBtns = getNavBtns();

//accesses all taskLists and returns them
function getTaskLists() {
    return document.querySelectorAll('.taskList');
}
let taskLists = getTaskLists();

//updates to recieve any new taskLists that were created and hides them all
function hideAllTaskLists() {
    taskLists = getTaskLists();
    taskLists.forEach(taskList => {
        taskList.style.display = 'none';
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
                hideAllTaskLists();
                for (let i = 0; i < taskListStorage.length; i++) {
                    if (taskListStorage[i].id.includes('inbox')) {
                        taskListStorage[i].style.display = "initial";
                    } else {
                        taskListStorage[i].style.display = "none";
                    }
                }
            } else if (navBtn.getAttribute("id") == "today") {
                contentHeader.textContent = "Today"
                contentHeader.style.display = "initial";
                addTask.style.display = "none";
                taskForm.style.display = "none";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                taskInput.value = "";
                hideAllTaskLists();
            } else if (navBtn.getAttribute("id") == "thisweek") {
                contentHeader.textContent = "This Week";
                contentHeader.style.display = "initial";
                addTask.style.display = "none";
                taskForm.style.display = "none";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                taskInput.value = "";
                hideAllTaskLists();
            } else if (navBtn.classList.contains('projectBtn')) {
                contentHeader.textContent = navBtn.querySelector('button').textContent;
                navBtns = getNavBtns();
                updateLoop();
                hideAllTaskLists();
                projectId = navBtn.getAttribute('id');
                for (let i = 0; i < taskListStorage.length; i++) {
                    if (taskListStorage[i].id.includes(projectId)) {
                        taskListStorage[i].style.display = "initial";
                    } else {
                        taskListStorage[i].style.display = "none";
                    }
                }
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

const taskForm = document.createElement('div');
const formBtns = document.createElement('div');
const taskInput = document.createElement('input');
const addBtn = document.createElement('button');
const cancelBtn = document.createElement('button');

taskForm.classList.add('taskForm');
taskForm.style.display = 'none';
taskInput.setAttribute('type', 'text');
taskInput.style.display = 'none';
formBtns.classList.add('formBtns');
formBtns.style.display = 'none';
addBtn.classList.add('addBtn');
addBtn.textContent = 'Add';
cancelBtn.classList.add('cancelBtn');
cancelBtn.textContent = 'Cancel';

taskForm.appendChild(taskInput);
formBtns.appendChild(addBtn);
formBtns.appendChild(cancelBtn);
taskForm.appendChild(formBtns);
content.appendChild(taskForm);



addTask.addEventListener('click', () => {
    revealTaskForm();
});



//button that reveals a prompt to add a project to the page
//div that holds input and div which holds both buttons
const addProject = document.getElementById('addProject');
const projectForm = document.createElement('div');
const projectBtns = document.createElement('div');
const projectInput = document.createElement('input');
const projectAddBtn = document.createElement('button');
const projectCancelBtn = document.createElement('button');

projectForm.classList.add('taskForm');
projectForm.style.display = 'none';
projectInput.setAttribute('type', 'text');
projectInput.style.display = 'none';
projectBtns.classList.add('formBtns');
projectBtns.style.display = 'none';
projectAddBtn.classList.add('addBtn');
projectAddBtn.textContent = 'Add';
projectCancelBtn.classList.add('cancelBtn');
projectCancelBtn.textContent = 'Cancel';

projectForm.appendChild(projectInput);
projectBtns.appendChild(projectAddBtn);
projectBtns.appendChild(projectCancelBtn);
projectForm.appendChild(projectBtns);
sideBar.appendChild(projectForm);


addProject.addEventListener('click', () => {
    revealProjectForm();
});

addBtn.addEventListener('click', () => {
    createTask();
});
  

//when the cancel task or project button is clicked it hides the form 
cancelBtn.addEventListener('click', () => {
    hideTaskForm();
});

projectCancelBtn.addEventListener('click', () => {
    hideProjectForm();
});

//project add button onclick(as long as thers text in the input field)
//creates a new container div, img, and button element
//append the img and button element as children to the container div
//append the container div to sideBar 
projectAddBtn.addEventListener('click', () => {
    createProject();
});
  


//EVEYRTHING WORKS, JUST MAKE SURE TO DELETE TASK LISTS IF THEIR CORRESPONDING PROJECT IS DELETED