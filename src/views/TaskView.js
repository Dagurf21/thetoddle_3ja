import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDataContext } from '../services/DataContext';
import Task from '../components/Task';

const TaskView = ({ route }) => {
    const { listId } = route.params;
    const { getListById, updateTaskInList } = useDataContext(); // Add method to update tasks in the context

    const list = getListById(listId);

    if (!list) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>List not found</Text>
            </View>
        );
    }

    const toggleFinished = (taskId) => {
        // Update task in the current list
        const updatedTasks = list.tasks.map((task) =>
            task.id === taskId ? { ...task, isFinished: !task.isFinished } : task
        );
        updateTaskInList(listId, updatedTasks); // Call context to persist the changes
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{list.name}</Text>
            <FlatList
                data={list.tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Task task={item} toggleFinished={toggleFinished} />
                )}
                ListEmptyComponent={<Text style={styles.text}>No tasks available.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
    },
});

export default TaskView;
