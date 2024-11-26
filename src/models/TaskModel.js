// src/models/Task.js
class Task {
    constructor(id, name, description, isFinished, listId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isFinished = isFinished;
        this.listId = listId;
    }

    toggleCompletion() {
        this.isFinished = !this.isFinished;
    }
}

export default Task;
