// Displays tasks for a specific list
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ task }) => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{task.name}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 6,
    },
    taskName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskDescription: {
        fontSize: 16,
        color: '#666',
    },
});

export default Task;
