import React, { createContext, useContext, useState } from "react";
import Board from "../models/BoardModel";
import List from "../models/ListModel";
import Task from "../models/TaskModel";
import data from "../../data.json";

// Helper to initialize models
const initializeModels = (data) => {

    // Creating tasks based on listId of task
    const tasksByListId = data.tasks.reduce((map, taskData) => {
        const task = new Task(
            taskData.id,
            taskData.name,
            taskData.description,
            taskData.isFinished,
            taskData.listId,
        );
        if (!map[taskData.listId]) {
            map[taskData.listId] = [];
        }

        map[taskData.listId].push(task);

        return map;
    }, {});

    // Creating lists based on boardId of list
    const listsByBoardId = data.lists.reduce((map, listData) => {
        const list = new List(
            listData.id,
            listData.name,
            listData.color,
            listData.boardId,
            tasksByListId[listData.id] || [],
        );
        if (!map[listData.boardId]) {
            map[listData.boardId] = [];
        }

        map[listData.boardId].push(list);

        return map;
    }, {});

    return data.boards.map(
    (boardData) =>
        new Board(
            boardData.id,
            boardData.name,
            boardData.thumbnailPhoto,
            listsByBoardId[boardData.id] || [],
        ),
    );
};

// Initialize data
const boards = initializeModels(data);

// Context setup
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [state, setState] = useState({ boards });

        // Example: Add a new board
        const createBoard = (newBoard) => {
        const board = new Board(
            newBoard.id,
            newBoard.name,
            newBoard.thumbnailPhoto,
            [],
        );
        setState((prevState) => ({ boards: [...prevState.boards, board] }));
  };

    return (
        <DataContext.Provider value={{ boards: state.boards, createBoard }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
