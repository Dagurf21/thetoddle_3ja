import React, { createContext, useContext, useState } from 'react';
import DataService from './DataService';

// Create the context
const DataContext = createContext(null);

// Data Provider Component
export const DataProvider = ({ children }) => {
    // Initialize state with DataService properties and methods
    const [boards, setBoards] = useState(DataService.getBoards()); // Use method
    const [lists, setLists] = useState(DataService.lists);         // Access property directly
    const [tasks, setTasks] = useState(DataService.tasks);         // Access property directly

    console.log('Boards:', boards); // Logs the current state of boards
    console.log('Lists:', lists);   // Logs the current state of lists
    console.log('Tasks:', tasks);

    // Example method to create a new board
    const createBoard = (newBoard) => {
        DataService.boards.push(newBoard); // Add new board to the data
        setBoards([...DataService.boards]); // Update state
    };

    return (
        <DataContext.Provider
            value={{
                boards,
                lists,
                tasks,
                createBoard,
                getLists: DataService.getLists,  // Reference DataService methods
                getTasks: DataService.getTasks,  // Reference DataService methods
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

// Hook to use DataContext in components
export const useDataContext = () => useContext(DataContext);
