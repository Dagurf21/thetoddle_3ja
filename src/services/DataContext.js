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
            taskData.listId
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
            tasksByListId[listData.id] || []
        );
        if (!map[listData.boardId]) {
            map[listData.boardId] = [];
        }
        map[listData.boardId].push(list);
        return map;
    }, {});

    // Creating boards with lists
    return data.boards.map(
        (boardData) =>
            new Board(
                boardData.id,
                boardData.name,
                boardData.thumbnailPhoto,
                listsByBoardId[boardData.id] || []
            )
    );
};

// Initialize data
const boards = initializeModels(data);

// Context setup
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [state, setState] = useState({ boards });

    // Create
    const createBoard = (newBoard) => {
        const board = new Board(
            newBoard.id,
            newBoard.name,
            newBoard.thumbnailPhoto,
            []
        );
        setState((prevState) => ({ boards: [...prevState.boards, board] }));
    };

    const createList = (boardId, newList) => {
        setState((prevState) => {
            const board = prevState.boards.find((b) => b.id === boardId);
            if (board) {
                const list = new List(
                    newList.id,
                    newList.name,
                    newList.color,
                    boardId,
                    []
                );
                board.lists.push(list);
            }
            return { boards: [...prevState.boards] };
        });
    };

    const createTask = (listId, newTask) => {
        setState((prevState) => {
            const board = prevState.boards.find((b) =>
                b.lists.some((l) => l.id === listId)
            );
            if (board) {
                const list = board.lists.find((l) => l.id === listId);
                const task = new Task(
                    newTask.id,
                    newTask.name,
                    newTask.description,
                    false,
                    listId
                );
                list.tasks.push(task);
            }
            return { boards: [...prevState.boards] };
        });
    };

    // Read
    const getBoardById = (boardId) => {
        return state.boards.find((board) => board.id === boardId);
    };

    const getListById = (listId) => {
        for (const board of state.boards) {
            const list = board.lists.find((l) => l.id === listId);
            if (list) return list;
        }
        return null;
    };

    const getTaskById = (taskId) => {
        for (const board of state.boards) {
            for (const list of board.lists) {
                const task = list.tasks.find((t) => t.id === taskId);
                if (task) return task;
            }
        }
        return null;
    };

    // Update
    const updateBoard = (boardId, updatedData) => {
        setState((prevState) => {
            const board = prevState.boards.find((b) => b.id === boardId);
            if (board) {
                board.name = updatedData.name || board.name;
                board.thumbnailPhoto =
                    updatedData.thumbnailPhoto || board.thumbnailPhoto;
            }
            return { boards: [...prevState.boards] };
        });
    };

    const updateList = (listId, updatedData) => {
        setState((prevState) => {
            const list = getListById(listId);
            if (list) {
                list.name = updatedData.name || list.name;
                list.color = updatedData.color || list.color;
            }
            return { boards: [...prevState.boards] };
        });
    };

    const updateTask = (taskId, updatedData) => {
        setState((prevState) => {
            const task = getTaskById(taskId);
            if (task) {
                task.name = updatedData.name || task.name;
                task.description =
                    updatedData.description || task.description;
                task.isFinished =
                    updatedData.isFinished !== undefined
                        ? updatedData.isFinished
                        : task.isFinished;
            }
            return { boards: [...prevState.boards] };
        });
    };

    // Delete
    const deleteBoard = (boardId) => {
        setState((prevState) => ({
            boards: prevState.boards.filter((b) => b.id !== boardId),
        }));
    };

    const deleteList = (listId) => {
        setState((prevState) => {
            for (const board of prevState.boards) {
                board.lists = board.lists.filter((l) => l.id !== listId);
            }
            return { boards: [...prevState.boards] };
        });
    };

    const deleteTask = (taskId) => {
        setState((prevState) => {
            for (const board of prevState.boards) {
                for (const list of board.lists) {
                    list.tasks = list.tasks.filter((t) => t.id !== taskId);
                }
            }
            return { boards: [...prevState.boards] };
        });
    };

    return (
        <DataContext.Provider
            value={{
                boards: state.boards,
                createBoard,
                createList,
                createTask,
                getBoardById,
                getListById,
                getTaskById,
                updateBoard,
                updateList,
                updateTask,
                deleteBoard,
                deleteList,
                deleteTask,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
