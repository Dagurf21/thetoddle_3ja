import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDataContext } from '../services/DataContext';
import Task from '../components/Task';
import TaskModal from '../components/AddTaskModal';

const TaskView = ({ route }) => {
    const { listId } = route.params;
    const { getListById, updateTaskInList } = useDataContext();

    const list = getListById(listId);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [isFinished, setIsFinished] = useState(false);

    if (!list) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>List not found</Text>
            </View>
        );
    }

    const toggleFinished = (taskId) => {
        const updatedTasks = list.tasks.map((task) =>
            task.id === taskId ? { ...task, isFinished: !task.isFinished } : task
        );
        updateTaskInList(listId, updatedTasks);
    };

    const handleCreateTask = () => {
        if (!newTaskName.trim()) {
            alert('Task name is required.');
            return;
        }

        const newTask = {
            id: Date.now().toString(), // Unique ID for the task
            name: newTaskName.trim(),
            description: newTaskDescription.trim(),
            isFinished,
        };

        updateTaskInList(listId, [...list.tasks, newTask]);

        // Reset modal inputs and close the modal
        setNewTaskName('');
        setNewTaskDescription('');
        setIsFinished(false);
        setIsModalVisible(false);
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
            {/* Add Task Button */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => setIsModalVisible(true)}
            >
                <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>

            {/* Task Modal */}
            <TaskModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={handleCreateTask}
                taskName={newTaskName}
                setTaskName={setNewTaskName}
                taskDescription={newTaskDescription}
                setTaskDescription={setNewTaskDescription}
                isFinished={isFinished}
                setIsFinished={setIsFinished}
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
    addButton: {
        marginTop: 16,
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default TaskView;
