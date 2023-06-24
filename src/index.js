/*** Main Section ***/ 
/* Sub Sections */


/*** IMPORTS ***/
import './style.css';
import { isToday, isThisWeek, isThisMonth, parseISO } from 'date-fns';
import { Project, Task } from './classes.js';
import logoImg from './assets/images/logo.svg';
import inboxImg from './assets/images/inbox.svg';
import todayImg from './assets/images/today.svg';
import thisWeekImg from './assets/images/thisweek.svg';
import thisMonthImg from './assets/images/thismonth.svg';
import addImg from './assets/images/add.svg';
import githubImg from './assets/images/github.svg';
import checklist from './assets/images/checklist.svg';
import trash from './assets/images/trash.svg';
import menuImg from './assets/images/menu.svg';





/*** Task & Project Storage ***/
let tasks = [];
let projects = [];




/***  UI Elements ***/
let headerContent = document.querySelector("#headerContent");
let mainContent = document.querySelector("#content");
let sideBar = document.querySelector("#sideBar");
let taskList = document.querySelector("#taskList");
let inboxBtn = document.querySelector("#inbox");
let todayBtn = document.querySelector("#today");
let thisWeekBtn = document.querySelector("#thisweek");
let thisMonthBtn = document.querySelector('#thismonth');
let addProjBtn = document.querySelector("#addProject");
let addTaskBtn = document.querySelector("#addTask");
let taskForm = document.querySelector("#taskForm");
let projectForm = document.querySelector("#projectForm");
let formBtns = document.querySelector(".formBtns");
let projectFormBtns = document.querySelector(".projectFormBtns");
let cancelBtn = document.querySelector(".cancelBtn");
let projectCancelBtn = document.querySelector(".projectCancelBtn");
let createProjBtn = document.querySelector(".createProjBtn");
let footerImg = document.querySelector("#footerImg");

headerContent.querySelector("img").setAttribute("src", logoImg);
inboxBtn.querySelector("img").setAttribute("src", inboxImg);
todayBtn.querySelector("img").setAttribute("src", todayImg);
thisWeekBtn.querySelector("img").setAttribute("src", thisWeekImg);
thisMonthBtn.querySelector("img").setAttribute("src", thisMonthImg);
addProjBtn.querySelector("img").setAttribute("src", addImg);
addTaskBtn.querySelector("img").setAttribute("src", addImg);
footerImg.setAttribute("src", githubImg);


/* UI Elements - MOBILE */
let mobileMenu = document.querySelector("#menu");
let sideBarStyle = window.getComputedStyle(sideBar);

mobileMenu.setAttribute("src", menuImg);

mobileMenu.addEventListener("click", () => {
    if (sideBarStyle.display == "none") {
        sideBar.style.display = "block";
    } else {
        sideBar.style.display = "none";
    }
});


/* UI Elements - Selecting Buttons */
function getNavBtns() {
    let navBtns = document.querySelectorAll(".navBtn");
    return navBtns;
}

let navBtns = getNavBtns();

function unselectAllNavBtns() {
    navBtns = getNavBtns();
    navBtns.forEach(navBtn => {
        navBtn.classList.remove("selected");
        navBtn.querySelector("button").classList.remove("bold");
    });
}

function updateAddTaskBtn(e) {
    if (e.currentTarget.getAttribute("id") == "today") {
        mainContent.querySelector("h2").classList.remove("hide");
        mainContent.querySelector("h2").classList.add("reveal");
        addTaskBtn.classList.remove("reveal");
        addTaskBtn.classList.add("hide");
    } else if (e.currentTarget.getAttribute("id") == "thisweek") {
        mainContent.querySelector("h2").classList.remove("hide");
        mainContent.querySelector("h2").classList.add("reveal");
        addTaskBtn.classList.remove("reveal");
        addTaskBtn.classList.add("hide");
    } else if (e.currentTarget.getAttribute("id") == "thismonth") {
        mainContent.querySelector("h2").classList.remove("hide");
        mainContent.querySelector("h2").classList.add("reveal");
        addTaskBtn.classList.remove("reveal");
        addTaskBtn.classList.add("hide");
    } else {
        // show addTaskBtn when inbox or any projects are selected only
        mainContent.querySelector("h2").classList.remove("hide");
        mainContent.querySelector("h2").classList.add("reveal");
        addTaskBtn.classList.remove("hide");
        addTaskBtn.classList.add("reveal");
    }
}

function disableNavBtns() {
    navBtns = getNavBtns();
    navBtns.forEach(navBtn => {
        navBtn.classList.add("disable");
    });
}

function enableNavBtns() {
    navBtns = getNavBtns();
    navBtns.forEach(navBtn => {
        navBtn.classList.remove("disable");
    });
}

function attachNavBtnEventListener() {
    navBtns = getNavBtns();
    navBtns.forEach(navBtn => {
        navBtn.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("selected")) {
                // if you click on a navBtn that is already selected, do nothing
            } else {
                if (e.currentTarget.getAttribute("id") == "addProject") {
                    // addProject button shouldnt be selected its only function is to reveal the form to add a project
                    // do nothing
                } else {
                    unselectAllNavBtns();
                    updateAddTaskBtn(e);
                    e.currentTarget.classList.add("selected");
                    e.currentTarget.querySelector("button").classList.add("bold");
                    taskList.classList.add("hide");
                    

                    //hides task form if its opened when another section is selected
                    taskForm.classList.remove("reveal");
                    taskForm.classList.add("hide");

                    // event.currentTarget only refers to the element the event listener is attached to
                    // not its children, which event.target also refers to
                    mainContent.querySelector("h2").textContent = e.currentTarget.querySelector("button").textContent;
                    updateTaskList();
                }
            }
        });
    });
}

attachNavBtnEventListener();


/* UI Elements - Revealing & Hiding Forms */
addTaskBtn.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("reveal");
    e.currentTarget.classList.add("hide");
    taskForm.classList.remove("hide");
    taskForm.classList.add("reveal");
    formBtns.classList.remove("hide");
    formBtns.classList.add("reveal");
});

addProjBtn.addEventListener("click", (e) => {
    unselectAllNavBtns();
    disableNavBtns();
    taskList.classList.add("hide");
    mainContent.querySelector("h2").classList.remove("reveal");
    mainContent.querySelector("h2").classList.add("hide");
    addTaskBtn.classList.remove("reveal");
    addTaskBtn.classList.add("hide");
    taskForm.classList.remove("reveal");
    taskForm.classList.add("hide");
    e.currentTarget.classList.remove("reveal");
    e.currentTarget.classList.add("hide");
    projectForm.classList.remove("hide");
    projectForm.classList.add("reveal");
    projectFormBtns.classList.remove("hide");
    projectFormBtns.classList.add("reveal");
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let input = taskForm.querySelector("input");
    input.value = "";
    taskForm.classList.remove("reveal");
    taskForm.classList.add("hide");
    addTaskBtn.classList.remove("hide");
    addTaskBtn.classList.add("reveal");
});

projectCancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    enableNavBtns();
    let input = taskForm.querySelector("input");
    input.value = "";
    projectForm.classList.remove("reveal");
    projectForm.classList.add("hide");
    addProjBtn.classList.remove("hide");
    addProjBtn.classList.add("reveal");
    inboxBtn.classList.add("selected");
    inboxBtn.querySelector("button").classList.add("bold");
    mainContent.querySelector("h2").textContent = "Inbox";
    mainContent.querySelector("h2").classList.remove("hide");
    mainContent.querySelector("h2").classList.add("reveal");
    addTaskBtn.classList.remove("hide");
    addTaskBtn.classList.add("reveal");
});


/* UI Elements - Creating Tasks */
function createNewTask() {
    let inputValue = taskForm.querySelector("input").value;
    let section = mainContent.querySelector("h2").textContent;
    let task = new Task(inputValue, undefined, false, section);
    tasks.push(task);
    
    let taskContainer = document.createElement("div");
    let taskLeftSide = document.createElement("div");
    let taskRightSide = document.createElement("div");
    let taskCheckbox = document.createElement("div");
    let taskName = document.createElement("p");
    let taskDate = document.createElement("input");
    let taskDelete = document.createElement("img");

    taskContainer.classList.add("task");
    taskCheckbox.classList.add("checkbox");
    taskName.textContent = task.name + ` (${task.section})`;
    taskContainer.classList.add("task_"+task.section);
    taskDate.setAttribute("type", "date");
    taskDate.classList.add("date");
    taskDelete.setAttribute("src", trash)
    taskDelete.classList.add("removeTask");

    taskContainer.appendChild(taskLeftSide);
    taskContainer.appendChild(taskRightSide);
    taskLeftSide.appendChild(taskCheckbox);
    taskLeftSide.appendChild(taskName);
    taskRightSide.appendChild(taskDate);
    taskRightSide.appendChild(taskDelete);
    taskList.appendChild(taskContainer);

    attachDateEvents(task);
    updateTaskList();
}



taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskForm.classList.remove("reveal");
    taskForm.classList.add("hide");
    addTaskBtn.classList.add("reveal");
    createNewTask();
    attachTaskRemovalEvents();
    let input = taskForm.querySelector("input");
    input.value = "";
});


/* UI Elements - Removing Tasks */
function getTaskRemovalImgs() {
    let taskRemovalImgs = document.querySelectorAll(".removeTask");
    return taskRemovalImgs;
}

let taskRemovalImgs = getTaskRemovalImgs();

function attachTaskRemovalEvents() {
    taskRemovalImgs = getTaskRemovalImgs();
    taskRemovalImgs.forEach(img => {
        img.addEventListener("click", (e) => {
            let taskNameValue = e.currentTarget.parentNode.parentNode.querySelector("p").textContent;
            // iterates tasks array in reverse to avoid shifting index values during element removal
            for (let i = tasks.length - 1; i >= 0; i--) {
                if (taskNameValue.includes(tasks[i].name)) {
                    tasks.splice(i, 1);
                }
            }
            e.currentTarget.parentNode.parentNode.remove();
        });
    });
}


/* UI Elements - Creating Projects */
function createNewProject() {
    let inputValue = projectForm.querySelector("input").value;
    let project = new Project(inputValue, undefined);
    projects.push(project);

    let projectContainer = document.createElement("div");
    let projectLeftSide = document.createElement("div");
    let projectDelete = document.createElement("img");
    let projectImg = document.createElement("img");
    let projectName = document.createElement("button");

    projectContainer.classList.add("projectBtn");
    projectContainer.classList.add("navBtn");
    
    

    projectDelete.setAttribute("src", trash);
    projectDelete.classList.add("removeProject");
    projectImg.setAttribute("src", checklist);
    projectName.textContent = project.name;

    sideBar.insertBefore(projectContainer, addProjBtn);
    projectContainer.appendChild(projectLeftSide);
    projectContainer.appendChild(projectDelete);
    projectLeftSide.appendChild(projectImg);
    projectLeftSide.appendChild(projectName);

    attachNavBtnEventListener();
    // automatically selects the newly created project
    autoSelectProject(projectContainer);
}

function autoSelectProject(projectContainer) {
    projectContainer.click();
}

projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    enableNavBtns();
    projectForm.classList.remove("reveal");
    projectForm.classList.add("hide");
    addProjBtn.classList.add("reveal");
    createNewProject();
    attachProjectRemovalEvents();
    let input = projectForm.querySelector("input");
    input.value = "";
});


/* UI Elements - Removing Projects */
function getProjectRemovalImgs() {
    let projectRemovalImgs = document.querySelectorAll(".removeProject");
    return projectRemovalImgs;
}

let projectRemovalImgs = getProjectRemovalImgs();

function attachProjectRemovalEvents() {
    projectRemovalImgs = getProjectRemovalImgs();
    projectRemovalImgs.forEach(img => {
        img.addEventListener("click", (e) => {
            //selects the project before deleting it so the removeProjectTasks function works as intended
            e.currentTarget.parentNode.click();
            let projectNameValue = e.currentTarget.parentNode.querySelector("button").textContent;
            // iterates projects array in reverse to avoid shifting index values during element removal
            updateProjectsArray(projectNameValue);
            e.currentTarget.parentNode.remove();
            removeProjectTasks(e);
            updateTasksArray(projectNameValue);
            inboxBtn.click();
        });
    });
}

//removes all tasks associated with the project that was just deleted
function removeProjectTasks(e) {
    projectsUI = getAllProjects();
    taskListChildren = getAllTasks();
        if (e.currentTarget.parentNode.classList.contains("selected")) {
            let projId = e.currentTarget.parentNode.querySelector("button").textContent;
            for (let i = taskListChildren.length - 1; i >= 0; i--) {
                let child = taskListChildren[i];
                if (child.classList.contains("task_"+projId)) {
                    child.remove();
                }
            }
        }
}

function updateProjectsArray(projectNameValue) {
    for (let i = projects.length - 1; i >= 0; i--) {
        if (projects[i].name === projectNameValue) {
            projects.splice(i, 1);
        }
    }
}

function updateTasksArray(projectNameValue) {
    // loop through the tasks array and remove all taks with a section name that equals the name
    // of the current content Header 
    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].section === projectNameValue) {
            tasks.splice(i, 1);
        }
    }
}


/* UI Elements - Updating Display & Task Organization */
function getAllTasks() {
    let taskListChildren = document.querySelector("#taskList").children;
    return taskListChildren;
}

let taskListChildren = getAllTasks();

function getAllProjects() {
    let projectsUI = document.querySelectorAll(".projectBtn");
    return projectsUI;
}

let projectsUI = getAllProjects();

function getHeaderText() {
    let headerText = mainContent.querySelector("h2").textContent;
    return headerText;
}

let headerText = getHeaderText();

function getDatePickers() {
    let datePickers = document.querySelectorAll(".date");
    return datePickers;
}

let datePickers = getDatePickers();

function handleDateChange(e) {
    let dateValue = parseISO(e.currentTarget.value);
    if (isToday(dateValue)) {
        e.currentTarget.parentNode.parentNode.classList.add("task_thisweek");
        e.currentTarget.parentNode.parentNode.classList.add("task_thismonth");
        e.currentTarget.parentNode.parentNode.classList.add("task_today");
    } else if (isThisWeek(dateValue)) {
        e.currentTarget.parentNode.parentNode.classList.remove("task_today");
        e.currentTarget.parentNode.parentNode.classList.remove("task_thismonth");
        e.currentTarget.parentNode.parentNode.classList.add("task_thisweek");
    } else if (isThisMonth(dateValue)) {
        e.currentTarget.parentNode.parentNode.classList.remove("task_today");
        e.currentTarget.parentNode.parentNode.classList.remove("task_thisweek");
        e.currentTarget.parentNode.parentNode.classList.add("task_thismonth");
    } else {
        // do nothing
    }
}

function attachDateEvents(task) {
    // occurs everytime a task is created 
    datePickers = getDatePickers();
    datePickers.forEach(datePicker => {
        datePicker.addEventListener("change", (e) => {
            handleDateChange(e);
            // makes sure the dueDate value for the correct instance of class Task is changed when its corresponding task UI elements date value is altered
            // by checking if the name of the task UI container matches the name property of the instance of class Task
            if (e.currentTarget.parentNode.parentNode.querySelector("p").textContent.includes(task.name)) {
                task.dueDate = e.currentTarget.value;
            } else {
                // do nothing
            }
        });
    });
}

function updateTaskList() {
    taskListChildren = getAllTasks();
    headerText = getHeaderText();
    for (let i = 0; i < taskListChildren.length; i++) {
        let child = taskListChildren[i];
        if (child.classList.contains("task_today") && headerText === "Today") {
            child.classList.remove("hide");
            taskList.classList.remove("hide");
        } else if (child.classList.contains("task_thisweek") && headerText === "This Week") {
            child.classList.remove("hide");
            taskList.classList.remove("hide");
        } else if (child.classList.contains("task_thismonth") && headerText === "This Month") {
            child.classList.remove("hide");
            taskList.classList.remove("hide");
        } else if (child.querySelector("p").textContent.includes(headerText)) {
            child.classList.remove("hide");
            taskList.classList.remove("hide");
        } else {
            child.classList.add("hide");
        }
    }
}
