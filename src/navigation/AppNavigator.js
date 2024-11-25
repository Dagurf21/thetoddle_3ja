import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BoardDetailScreen from '../screens/BoardDetailScreen'; // Placeholder for the board detail screen
import AddBoardScreen from '../screens/AddBoardScreen';       // Placeholder for adding a board

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
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
