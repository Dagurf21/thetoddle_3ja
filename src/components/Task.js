import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Task = ({ task, toggleFinished, onOptionsPress }) => {
    return (
        <View style={styles.taskContainer}>
            {/* Checkbox for toggling task completion */}
            <TouchableOpacity
                style={[
                    styles.checkbox,
                    task.isFinished ? styles.checkboxChecked : styles.checkboxUnchecked,
                ]}
                onPress={() => toggleFinished(task.id)}
            />

            {/* Task details: name and description */}
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

            {/* Dots button for options menu */}
            <TouchableOpacity
                style={styles.dotsButton}
                onPress={(event) => onOptionsPress(event, task)} // Trigger the menu
            >
                <MaterialIcons name="more-vert" size={24} color="#666" />
            </TouchableOpacity>
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
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
    dotsButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Task;
