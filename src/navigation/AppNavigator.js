import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import BoardDetailScreen from '../views/BoardDetailScreen'; // Displays details of a specific board
import AddBoardScreen from '../views/AddBoardScreen';       // Adds a new board
import LoadingScreen from '../views/LoadingScreen';         // Displays a loading screen
import TaskView from '../views/TaskView';
import AddTaskScreen from "../views/AddTaskScreen";              // Displays tasks for a specific list

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Loading">
            {/* Loading Screen */}
            <Stack.Screen
                name="Loading"
                component={LoadingScreen}
                options={{ title: 'Loading' }}
            />

            {/* Home Screen */}
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />

            {/* Board Detail Screen */}
            <Stack.Screen
                name="BoardDetail"
                component={BoardDetailScreen}
                options={{ title: 'Board Detail' }}
            />

            {/* Task View (for displaying tasks of a selected list) */}
            <Stack.Screen
                name="TaskView"
                component={TaskView}
                options={{ title: 'Task View' }}
            />

            {/* Add Board Screen */}
            <Stack.Screen
                name="AddBoard"
                component={AddBoardScreen}
                options={{ title: 'Add New Board' }}
            />

            {/* Add new Task screen*/}
            <Stack.Screen
                name="AddTask"
                component={AddTaskScreen}
                options={{ title: 'Add New Task' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
