import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import BoardDetailScreen from '../views/BoardDetailScreen'; // Placeholder for the board detail screen
import AddBoardScreen from '../views/AddBoardScreen';       // Placeholder for adding a board
import LoadingScreen from '../views/LoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen
                name="Loading"
                component={LoadingScreen}
                options={{ title: 'Loading' }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="BoardDetail"
                component={BoardDetailScreen}
                options={{ title: 'Board Detail' }}
            />
            <Stack.Screen
                name="AddBoard"
                component={AddBoardScreen}
                options={{ title: 'Add New Board' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
