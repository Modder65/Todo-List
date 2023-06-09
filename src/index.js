/* IMPORTS */

import './style.css';
import { isToday, isThisWeek, parseISO} from 'date-fns';
import { Project, TaskList, Task } from './classes.js';
import logoImg from './assets/images/logo.svg';
import inboxImg from './assets/images/inbox.svg';
import todayImg from './assets/images/today.svg';
import thisweekImg from './assets/images/thisweek.svg';
import addImg from './assets/images/add.svg';
import githubImg from './assets/images/github.svg';
import checklist from './assets/images/checklist.svg';
import trash from './assets/images/trash.svg';
import menuImg from './assets/images/menu.svg';



/* LOCALSTORAGE 

//checks if this is the first time the page is loading
//only retrieve the stored data if this isnt the first page load
const isFirstLoad = !localStorage.getItem('isPageLoaded');
localStorage.setItem('isPageLoaded', true);

document.addEventListener('DOMContentLoaded', () => {
    if (!isFirstLoad) {
        retrieveSavedTasks();
        retrieveSavedProjects();
        //allows projects saved in localstorage to be selected after page is reloaded 
        navBtns = getNavBtns();
        updateLoop();
        projDeleteBtns = getProjDeleteBtns();
        projDeleteBtns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.target.parentNode.remove();
                localStorage.removeItem(btn);
            });
        });

        taskDeleteBtns = getTaskDeleteBtns();
        taskDeleteBtns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.target.parentNode.parentNode.remove();
                localStorage.removeItem(btn);
            });
        });
    }
});


function saveTasks() {
    const storageElement = document.querySelector('#taskList');
    const storageElementContents = storageElement.outerHTML;
    localStorage.setItem('savedTaskList', storageElementContents);
}

function retrieveSavedTasks() {
    const retrievedStorage = localStorage.getItem('savedTaskList');

    if (retrievedStorage) {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = retrievedStorage;

        const retrievedDiv = tempElement.firstChild;

        content.insertBefore(retrievedDiv, document.querySelector('#addTask'));
    }
}


function saveProjects() {
    let projectBtns = document.querySelectorAll('.projectBtn');
    let projectBtnsHTML = [];

    projectBtns.forEach(project => {
        projectBtnsHTML.push(project.outerHTML);
    });

    localStorage.setItem('projectBtns', JSON.stringify(projectBtnsHTML));
}

function retrieveSavedProjects() {
    let projectBtnsJSON = localStorage.getItem('projectBtns');

    if (projectBtnsJSON) {
        let projectBtnsHTML = JSON.parse(projectBtnsJSON);

        projectBtnsHTML.forEach(project => {
            let element = document.createElement('div');
            element.innerHTML = project;
            sideBar.insertBefore(element, addProject);
        });
    } else {
        // do nothing
    }

}
*/

/* GLOBAL VARIABLES */
const main = document.querySelector('main');
const content = document.getElementById('content');
const contentHeader = document.getElementById('contentHeader');
const sideBar = document.getElementById('sideBar');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const contentImg = document.getElementById('contentImg');
const footerImg = document.getElementById('footerImg');
const addTask = document.getElementById('addTask');
const deleteProject = document.querySelectorAll('.deleteProject');
let taskInstances = []; //tied to instances of class task
let tasks = []; //tied to the task UI elements
let projectId = "";
//variable that stores the value of a tasks date
let taskDateValue = ""
//creates shared task list
createTaskList();



/* FUNCTIONS */

//accesses all elements with the class navBtn dynamically
function getNavBtns() {
    return document.querySelectorAll('.navBtn');
}
let navBtns = getNavBtns();

function getProjects() {
    return document.querySelectorAll('.projectBtn');
}
let projects = getProjects();

function getProjDeleteBtns() {
    return document.querySelectorAll('.deleteProject');
}
let projDeleteBtns = getProjDeleteBtns();

function getTaskDeleteBtns() {
    return document.querySelectorAll('.deleteTask');
}
let taskDeleteBtns = getTaskDeleteBtns();

function updateInboxTasks() {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("task_inbox")) {
            tasks[i].style.display = "flex";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

function updateTodaysTasks() {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("task_today")) {
            tasks[i].style.display = "flex";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

function updateThisWeeksTasks() {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("task_thisweek") || tasks[i].classList.contains("task_today")) {
            tasks[i].style.display = "flex";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

function updateProjectTasks() {
    projects = getProjects();
    projects.forEach(proj => {
        if (proj.classList.contains('selected')) {
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].classList.contains("task_"+proj.id)) {
                    tasks[i].style.display = "flex";
                } else {
                    tasks[i].style.display = "none";
                }
            }
        }
    });
    
}

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
        deleteTask.setAttribute('class', 'deleteTask');
        document.querySelector('#taskList').appendChild(task);
        task.appendChild(taskLeftPanel);
        task.appendChild(taskRightPanel);
        taskLeftPanel.appendChild(taskCheckBox);
        taskLeftPanel.appendChild(taskName);
        taskRightPanel.appendChild(taskDate);
        taskRightPanel.appendChild(deleteTask);
        taskInput.value = '';
        
        //adds task_inbox class to any task that was created while the inbox section was selected
        if (document.querySelector('#inbox').classList.contains('selected')) {
            task.classList.add('task_inbox');
            taskName.textContent += ` (inbox)`;
        } else {
            projects = getProjects();
            projects.forEach(proj => {
                 if (proj.classList.contains('selected')) {
                    console.log('hello');
                    projectId = proj.getAttribute('id');
                    task.classList.add('task_'+projectId);
                    taskName.textContent += ` (${projectId})`;
                }
             });
        }

        let taskInstance = new Task(taskName.textContent, undefined, false);
        taskInstances.push(taskInstance);
        tasks.push(task);
        console.log(tasks);
        console.log(taskInstances);
        
        //saveTasks();

        //gets the current date of the task that a date was just chosen for
        taskDate.addEventListener('change', () => {
            taskDateValue = taskDate.value;
            taskInstance.dueDate = taskDateValue
            console.log(tasks);
            console.log(taskInstances);
            checkDate();
        });

        taskCheckBox.addEventListener('click', () => {
          if (taskInstance.isComplete == false) {
            taskInstance.isComplete = true;
            taskCheckBox.style.backgroundColor = 'rgb(76, 175, 80)';
            console.log(taskInstance);
          } else {
            taskInstance.isComplete = false;
            taskCheckBox.style.backgroundColor = 'transparent';
            console.log(taskInstance);
          }
          
        });
    
        deleteTask.addEventListener('click', (event) => {
          //not working - delete corresponding task from array if its deleted from the page
            for (let i = 0; i < tasks.length; i++) {
                if (taskInstances[i].name == taskName.textContent) {
                    taskInstances.splice(i, 1); 
                    console.log(taskInstances);
                } else {
                    // do nothing
                }
                    task.remove();
                    //saveTasks();
            }
        });

        // function checks if dueDate of a task is set for Today or This Week
        // then removes them from inbox and appends them to the Today or This Week section
        function checkDate() {
            let parsedDate = parseISO(taskInstance.dueDate);
            let isDateToday = isToday(parsedDate);
            let isDateThisWeek = isThisWeek(parsedDate);
            if (isDateToday == true) {
                task.classList.add("task_today");
                task.classList.add("task_thisweek");
                document.querySelector('#taskList').appendChild(task);
            } else if (isDateThisWeek == true) {
                task.classList.remove("task_today");
                //checks if the task already contains the class thisweek if the first if statement previously ran
                if (!task.classList.contains('task_thisweek')) {
                    task.classList.add("task_thisweek");
                } else {
                    // do nothing
                }
                document.querySelector('#taskList').appendChild(task);
            } else {
                task.classList.remove("task_today");
                task.classList.remove("task_thisweek");
                document.querySelector('#taskList').appendChild(task);
            }
        }
      }
}

function createProject() {
    if (projectInput.value === '') {
        alert('You must name your project.');
      } else {
        let projectInstance = new Project(projectInput.value, projectInput.value);
        const project = document.createElement('div');
        project.classList.add('navBtn', 'projectBtn');
        const projectLeft = document.createElement('div');
        const projectImg = document.createElement('img');
        projectImg.setAttribute('src', checklist);
        const projectText = document.createElement('button');
        projectText.textContent = projectInstance.name;
        const deleteProject = document.createElement('img');
        deleteProject.setAttribute('class', 'deleteProject');
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
        project.setAttribute("id", projectInstance.projectId);
        createTaskList(projectInstance.projectId);

        saveProjects();
        

        deleteProject.addEventListener('click', () => {
          project.classList.add('delete');
          project.remove();
        });
      }
}

//creates a new taskList 
function createTaskList() {
    let taskListInstance = new TaskList("taskList");
    const taskList = document.createElement('div');
    taskList.setAttribute("id", taskListInstance.name);
    content.insertBefore(taskList, addTask);
}

/* IMAGE LAYOUT */

logo.setAttribute("src", logoImg);
menu.setAttribute("src", menuImg);
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
                updateInboxTasks();
                
            } else if (navBtn.getAttribute("id") == "today") {
                contentHeader.textContent = "Today"
                contentHeader.style.display = "initial";
                addTask.style.display = "none";
                taskForm.style.display = "none";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                taskInput.value = "";
                updateTodaysTasks();
            } else if (navBtn.getAttribute("id") == "thisweek") {
                contentHeader.textContent = "This Week";
                contentHeader.style.display = "initial";
                addTask.style.display = "none";
                taskForm.style.display = "none";
                projectForm.style.display = "none";
                addProject.style.display = "flex";
                taskInput.value = "";
                updateThisWeeksTasks();
            } else if (navBtn.classList.contains('projectBtn')) {
                contentHeader.textContent = navBtn.querySelector('button').textContent;
                navBtns = getNavBtns();
                updateProjectTasks();

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
    saveTasks();
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
  

//reveals sidebar when clicked on mobile
menu.addEventListener('click', () => {
    if (sideBar.style.display == 'none') {
        sideBar.style.display = 'block';
    } else {
        sideBar.style.display = 'none';
    }
    
});   


//still have to save projects with localstorage
//save the taskInstance and task arrays
//and save the event listeners with localstorage
