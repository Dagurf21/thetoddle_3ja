import data from '../../data.json';
import List from '../models/ListModel';
import Task from '../models/TaskModel';

class TaskService {
    constructor() {
        this.lists = data.lists.map(
            list => new List(
                list.id,
                list.name,
                list.color,
                list.boardId
            ));
        this.tasks = data.tasks.map(
            task => new Task(
                task.id,
                task.name,
                task.description,
                task.isFinished,
                task.listId
            ));
    }

    // Create
    addTask(taskData) {
        const newTask = new Task(
            this.tasks.length + 1,
            taskData.name,
            taskData.description,
            taskData.isFinished,
            taskData.listId,
        )
        this.tasks.push(newTask);
        return newTask;
    }

    // Read
    getTasks() {
        return this.tasks;
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    getTaskByListId(listId) {
        return this.tasks.find(task => task.listId === listId);
    }

    // Update
    updateTask(taskId, updatedData) {
        const task = this.getTaskById(taskId);
        if (task) {
            task.name = updatedData.name || task.name;
            task.description = updatedData.description || task.description;
            task.isFinished = updatedData.isFinished || task.isFinished;
            task.listId = updatedData.listId || task.listId;
            return task;
        }
        return null;
    }

    // Delete
    deleteBoard(boardId) {
        this.tasks = this.tasks.filter(task => task.id !== boardId);
    }
}

export default new TaskService();
