import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen/HomeScreen';
import BoardDetailScreen from '../views/BoardDetailScreen/BoardDetailScreen';
import CreateBoardScreen from '../views/CreateBoardScreen/CreateBoardScreen';
import LoadingScreen from '../views/LoadingScreen/LoadingScreen';
import TaskView from '../views/TaskView/TaskView';
import CalendarView from "../views/CalendarView/CalendarView";              // Displays tasks for a specific list
import AddTaskScreen from "../views/AddTaskScreen/AddTaskScreen";
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

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
                options={({ navigation }) => ({
                    title: 'Home',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{ marginRight: 10 }}
                        >
                        </TouchableOpacity>
                    ),
                })}
            />

            {/* Board Detail Screen */}
            <Stack.Screen
                name="BoardDetail"
                component={BoardDetailScreen}
                options={({ navigation }) => ({
                    title: 'Board Detail',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{ marginRight: 10 }}
                        >
                            <Image
                                source={require('../../assets/logo.png')}
                                style={styles.logo}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />

            {/* Task View (for displaying tasks of a selected list) */}
            <Stack.Screen
                name="TaskView"
                component={TaskView}
                options={({ navigation }) => ({
                    title: 'Task View',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{ marginRight: 10 }}
                        >
                            <Image
                                source={require('../../assets/logo.png')}
                                style={styles.logo}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />

            {/* Add Board Screen */}
            <Stack.Screen
                name="CreateBoard"
                component={CreateBoardScreen}
                options={{ title: 'Add New Board' }}
            />

            {/* Add new Task screen*/}
            <Stack.Screen
                name="AddTask"
                component={AddTaskScreen}
                options={{ title: 'Add New Task' }}
            />

            {/* Calendar Screen */}
            <Stack.Screen
                name="Calendar"
                component={CalendarView}
                options={({ navigation }) => ({
                    title: 'Calendar',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{ marginRight: 10 }}
                        >
                            <Image
                                source={require('../../assets/logo.png')}
                                style={styles.logo}
                            />
                        </TouchableOpacity>
                    ),
                })}
            />


        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 140,
        height: 60,
        marginRight: 10,
    }
})

export default AppNavigator;
