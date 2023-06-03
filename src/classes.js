export class Project {
    constructor(name, projectId) {
        this.name = name;
        this.projectId = projectId;
    }
}

export class TaskList {
    constructor(taskListId) {
        this.taskListId = taskListId;
    }
}

export class Task {
    constructor(name, dueDate, isComplete) {
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
    }

    toggleComplete() {
        if (isComplete == false) {
            isComplete == true;
        } else if (isComplete == true) {
            isComplete == false;
        }
    }
}