import data from '../../data.json';
import Board from '../models/BoardModel';
import List from '../models/ListModel';
import Task from '../models/TaskModel';
import BoardModel from "../models/BoardModel";

class BoardService {
    constructor() {
        // Initialize with data from JSON
        this.boards = data.boards.map(
            board => new Board(
                board.id,
                board.name,
                board.description,
                board.thumbnailPhoto
            ));
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
    createBoard(boardData) {
        const newBoard = new BoardModel(
            this.boards.length + 1,
            boardData.name,
            boardData.description,
            boardData.thumbnailPhoto
        );
        this.boards.push(newBoard);
        return newBoard;
    }

    // Read
    getBoards() {
        return this.boards;
    }

    getBoardById(boardId) {
        return this.boards.find(board => board.id === boardId);
    }

    // Update
    updateBoard(boardId, updatedData) {
        const board = this.getBoardById(boardId);
        if (board) {
            board.name = updatedData.name || board.name;
            board.description = updatedData.description || updatedData.description;
            board.thumbnailPhoto = updatedData.thumbnailPhoto || board.thumbnailPhoto;
            return board;
        }
        return null;
    }

    // Delete
    deleteBoard(boardId) {
        this.boards = this.boards.filter(board => board.id !== boardId);
    }
}

export default new BoardService();
