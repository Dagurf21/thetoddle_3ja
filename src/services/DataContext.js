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
            taskData.dueDate // Include dueDate
        );
        if (!map[taskData.listId]) {
            map[taskData.listId] = [];
        }
        map[taskData.listId].push(task);
        return map;
    }, {});

    // Flatten all tasks into a single array
    const allTasks = Object.values(tasksByListId).flat();

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
    const boards = data.boards.map(
        (boardData) =>
            new Board(
                boardData.id,
                boardData.name,
                boardData.description,
                boardData.thumbnailPhoto,
                listsByBoardId[boardData.id] || []
            )
    );

    return { boards, allTasks }; // Return both boards and allTasks
};

// Initialize data
//const { boards, allTasks } = initializeModels(data);


// Context setup
const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const { boards, allTasks } = initializeModels(data); // Initialize boards and tasks here

    // Initialize state inside the component
    const [state, setState] = useState({
        boards,   // Boards initialized
        allTasks, // All tasks initialized
    });

    // Create
    const createBoard = (newBoard) => {
        const board = new Board(
            newBoard.id,
            newBoard.name,
            newBoard.description,
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
                    false, // Default is not finished
                    listId,
                    newTask.dueDate
                );

                list.tasks.push(task);

                // Add to allTasks
                return {
                    boards: [...prevState.boards],
                    allTasks: [...prevState.allTasks, task],
                };
            }
            return prevState;
        });
    };


    // Read
    const getTasksByDate = (date) => {
        return state.allTasks.filter((task) => task.dueDate === date);
    };

    const getMarkedDates = () => {
        return state.allTasks.reduce((acc, task) => {
            if (task.dueDate) {
                acc[task.dueDate] = {
                    marked: true,
                    dotColor: task.isFinished ? "green" : "red", // Reflect task completion
                };
            }
            return acc;
        }, {});
    };

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
            const updatedBoards = prevState.boards.map((board) => {
                if (board.id === boardId) {
                    // Return a new object for the updated board to avoid mutating the state directly
                    return { ...board, ...updatedData };
                }
                return board;
            });

            return { boards: updatedBoards };
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
            const updatedBoards = prevState.boards.map((board) => ({
                ...board,
                lists: board.lists.map((list) => ({
                    ...list,
                    tasks: list.tasks.map((task) =>
                        task.id === taskId ? { ...task, ...updatedData } : task
                    ),
                })),
            }));

            const updatedAllTasks = prevState.allTasks.map((task) =>
                task.id === taskId ? { ...task, ...updatedData } : task
            );

            return { boards: updatedBoards, allTasks: updatedAllTasks };
        });
    };


    // TODO: Needlessly complicated look into simplifying
    const updateTaskInList = (listId, updatedTasks) => {
        setState((prevState) => {
            const updatedBoards = prevState.boards.map((board) => ({
                ...board,
                lists: board.lists.map((list) =>
                    list.id === listId ? { ...list, tasks: updatedTasks } : list
                ),
            }));

            // Update allTasks to reflect changes in the specific task
            const updatedAllTasks = prevState.allTasks.map((task) => {
                const updatedTask = updatedTasks.find((t) => t.id === task.id);
                return updatedTask ? updatedTask : task;
            });

            return { boards: updatedBoards, allTasks: updatedAllTasks };
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

    const getAllLists = () => {
        return state.boards.flatMap((board) => board.lists);
    };

    const deleteTask = (taskId) => {
        setState((prevState) => {
            const updatedBoards = prevState.boards.map((board) => ({
                ...board,
                lists: board.lists.map((list) => ({
                    ...list,
                    tasks: list.tasks.filter((task) => task.id !== taskId),
                })),
            }));

            const updatedAllTasks = prevState.allTasks.filter(
                (task) => task.id !== taskId
            );

            return { boards: updatedBoards, allTasks: updatedAllTasks };
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
                getTasksByDate,
                getMarkedDates,
                updateBoard,
                updateList,
                updateTask,
                updateTaskInList,
                deleteBoard,
                deleteList,
                deleteTask,
                getAllLists
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
