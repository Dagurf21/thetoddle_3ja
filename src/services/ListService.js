import data from '../../data.json';
import Board from '../models/BoardModel';
import List from '../models/ListModel';
import Task from '../models/TaskModel';
import ListModel from "../models/ListModel";

class ListService {
    constructor() {
        // Inizialize with data from JSON
        this.list = data.lists.map(
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
                task.thumbnailPhoto)
            );
    }

    // Create
    addList(listData) {
        const newList = new ListModel(
            listData.id,
            listData.name,
            listData.color,
            listData.boardId,
        )
        this.list.push(newList);
        return(newList);
    }

    // Read
    getlists() {
        return this.getlists();
    }

    getListById(id) {
        return this.getlists().find(list => list.id === id);
    }

    // Update
    updateList(listId, updatedData) {
        const list = this.getListById(listId);
        if (list) {
            list.name = updatedData.name || list.name;
            list.color = updatedData.color || list.color;
            list.boardId = updatedData.boardId || list.boardId;
            return list;
        }
        return null;
    }

    // Delete
    deleteList(listId) {
        this.lists = this.lists.filter(list => list.id !== listId);
    }
}

export default new ListService();