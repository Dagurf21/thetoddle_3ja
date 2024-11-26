/*
 *   This file handles loading the data from data.json and provides
 *   helper methods to fetch data
 */

import data from '../../data.json';

class DataService {
    constructor() {
        this.boards = data.boards; // Property for boards
        this.lists = data.lists;   // Property for lists
        this.tasks = data.tasks;   // Property for tasks
    }

    // Method to get all boards
    getBoards() {
        return this.boards;
    }

    // Method to get lists for a specific board
    getLists(boardId) {
        return this.lists.filter((list) => list.boardId === boardId);
    }

    // Method to get tasks for a specific list
    getTasks(listId) {
        return this.tasks.filter((task) => task.listId === listId);
    }
}

const dataService = new DataService();
export default dataService;
