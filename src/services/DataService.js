/*
 *   This file handles loading the data from data.json and provides
 *   helper methods to fetch data
 */

import data from '../../data.json';

class DataService {
    constructor() {
        this.boards = data.boards;
        this.lists = data.lists;
        this.tasks = data.tasks;
    }

    // Get all boards
    getBoards() {
        return this.boards;
    }

    // Get lists for a specific board
    getLists(boardId) {
        return this.lists.filter(list => list.boardId === boardId);
    }

    // Get tasks for a specific list
    getTasks(listId) {
        return this.tasks.filter(task => task.listId === listId);
    }

    // TODO: Here would be CRUD methods, since we are not writing to the file we don't need them
}

const dataService = new DataService();
export default dataService;
