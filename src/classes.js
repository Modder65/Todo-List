export class Project {
    constructor(name, projectId) {
        this.name = name;
        this.projectId = projectId;
    }
}

export class Task {
    constructor(name, dueDate, isComplete, section) {
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
        this.section = section;
    }

    toggleComplete() {
        if (isComplete === false) {
            isComplete = true;
        } else if (isComplete === true) {
            isComplete = false;
        }
    }
}