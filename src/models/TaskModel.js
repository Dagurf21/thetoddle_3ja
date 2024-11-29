class Task {
    constructor(id, name, description, isFinished, listId, dueDate) {
        this.id = id
        this.name = name
        this.description = description
        this.isFinished = isFinished
        this.listId = listId
        this.dueDate = dueDate // Format: 'YYYY-MM-DD'
    }

    toggleCompletion() {
        this.isFinished = !this.isFinished
    }
}

export default Task
