import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

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

export default Task;
