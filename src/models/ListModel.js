import Task from './TaskModel.js'

class List {
    constructor(id, name, color, boardId, tasks = []) {
        this.id = id
        this.name = name
        this.color = color
        this.boardId = boardId
        this.tasks = tasks.map(
            (task) =>
                new Task(
                    task.id,
                    task.name,
                    task.description,
                    task.isFinished,
                    task.listId,
                ),
        )
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId)
    }
}

export default List
