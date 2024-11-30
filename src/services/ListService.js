import data from '../../data.json'
import ListModel from '../models/ListModel'
import TaskModel from '../models/TaskModel'

class ListService {
    constructor() {
        // Initialize with data from JSON
        this.lists = data.lists.map(
            (list) =>
                new ListModel(list.id, list.name, list.color, list.boardId),
        )
        this.tasks = data.tasks.map(
            (task) =>
                new TaskModel(
                    task.id,
                    task.name,
                    task.description,
                    task.isFinished,
                    task.listId,
                ),
        )
    }

    // Create
    addList(listData) {
        const newList = new ListModel(
            this.lists.length + 1,
            listData.name,
            listData.color,
            listData.boardId,
        )
        this.lists.push(newList)
        return newList
    }

    // Read
    getLists() {
        return this.lists
    }

    getListById(id) {
        return this.lists.find((list) => list.id === id)
    }

    // Update
    updateList(listId, updatedData) {
        const list = this.getListById(listId)
        if (list) {
            list.name = updatedData.name || list.name
            list.color = updatedData.color || list.color
            list.boardId = updatedData.boardId || list.boardId
            return list
        }
        return null
    }

    // Delete
    deleteList(listId) {
        // Delete the list
        this.lists = this.lists.filter((list) => list.id !== listId)

        // Cascade delete tasks associated with the list
        this.tasks = this.tasks.filter((task) => task.listId !== listId)
    }

    // Get tasks for a specific list
    getTasksForList(listId) {
        return this.tasks.filter((task) => task.listId === listId)
    }
}

export default new ListService()
