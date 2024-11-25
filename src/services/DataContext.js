/*
* Using React Context to make data accessible
* globally, without having to pass props down manually
*/

import React, { createContext, useContext, useState } from 'react';
import DataService from "./DataService";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [boards, setBoards] = useState(DataService.getBoards());
    const [lists, setLists] = useState(DataService.lists());
    const [tasks, setTasks] = useState(DataService.tasks());

    const createBoard = (newBoard) => {
        DataService.createBoard(newBoard);
        setBoards([...DataService.boards()]);
    };

    return (
        <DataContext.Provider
        value={{
        boards,
        lists,
        tasks,
        createBoard,
        getLists: DataService.getLists,
        getTasks: DataService.getTasks,}
        }>
            {children}
            </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);