import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ task, toggleFinished }) => {
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity
                style={[
                    styles.checkbox,
                    task.isFinished ? styles.checkboxChecked : styles.checkboxUnchecked,
                ]}
                onPress={() => toggleFinished(task.id)}
            />
            <View style={styles.taskDetails}>
                <Text
                    style={[
                        styles.taskName,
                        task.isFinished ? styles.taskFinished : null,
                    ]}
                >
                    {task.name}
                </Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 6,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#666',
        marginRight: 12,
        borderRadius: 4,
    },
    checkboxChecked: {
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
    },
    checkboxUnchecked: {
        backgroundColor: 'transparent',
    },
    taskDetails: {
        flex: 1,
    },
    taskName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskDescription: {
        fontSize: 16,
        color: '#666',
    },
    taskFinished: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
});

export default Task;
