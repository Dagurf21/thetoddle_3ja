import data from '../../data.json';
import TaskModel from '../models/TaskModel';

class TaskService {
    constructor() {
        this.tasks = data.tasks.map(
            task => new TaskModel(
                task.id,
                task.name,
                task.description,
                task.isFinished,
                task.listId
            )
        );
    }

    // Create
    addTask(taskData) {
        const newTask = new TaskModel(
            this.tasks.length + 1,
            taskData.name,
            taskData.description,
            false, // Default: not finished
            taskData.listId
        );
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

    getTasksByListId(listId) {
        return this.tasks.filter(task => task.listId === listId); // Return all tasks in a list
    }

    // Update
    updateTask(taskId, updatedData) {
        const task = this.getTaskById(taskId);
        if (task) {
            task.name = updatedData.name || task.name;
            task.description = updatedData.description || task.description;
            task.isFinished =
                updatedData.isFinished !== undefined
                    ? updatedData.isFinished
                    : task.isFinished;
            task.listId = updatedData.listId || task.listId;
            return task;
        }
        return null;
    }

    // Delete
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}

export default new TaskService();
