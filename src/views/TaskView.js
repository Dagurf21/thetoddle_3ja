import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDataContext } from '../services/DataContext';
import Task from '../components/Task';
import TaskModal from '../components/AddTaskModal';
import OptionsMenu from '../components/OptionsMenu';
import styles from '../styles/GlobalStyles';

const TaskView = ({ route }) => {
    const { listId } = route.params;
    const { getListById, updateTaskInList } = useDataContext();

    const list = getListById(listId);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedTask, setSelectedTask] = useState(null);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [isFinished, setIsFinished] = useState(false);

    if (!list) {
        return (
            <View style={styles.optionsContent}>
                <Text style={styles.header}>List not found</Text>
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

    const handleEditModal = () => {
        // Set modal values for editing
        setNewTaskName(selectedTask.name);
        setNewTaskDescription(selectedTask.description);
        setIsFinished(selectedTask.isFinished);

        // Close the menu and show the modal
        setMenuVisible(false);
        setIsModalVisible(true);
    };

    const handleEditTask = () => {
        if (!newTaskName.trim() || !newTaskDescription.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        const updatedTasks = list.tasks.map((task) =>
            task.id === selectedTask.id
                ? { ...task, name: newTaskName.trim(), description: newTaskDescription.trim(), isFinished }
                : task
        );

        updateTaskInList(listId, updatedTasks);
        setIsModalVisible(false); // Close the modal after editing
    };

    const handleDeleteTask = () => {
        const updatedTasks = list.tasks.filter((task) => task.id !== selectedTask.id);
        updateTaskInList(listId, updatedTasks);
        setMenuVisible(false); // Close the menu after deletion
    };

    const handlePressOptions = (event, task) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPosition({ x: pageX, y: pageY });
        setSelectedTask(task);
        setMenuVisible(true); // Show the menu
    };

    return (
        <View style={styles.scrollContainer}>
            <Text style={styles.header}>{list.name}</Text>
            <FlatList
                data={list.tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Task
                        task={item}
                        toggleFinished={toggleFinished}
                        onOptionsPress={(event) => handlePressOptions(event, item)}
                    />
                )}
                ListEmptyComponent={<Text style={styles.textCenter}>No tasks available.</Text>}
                contentContainerStyle={styles.flatListContainer}
            />
            {/* Add Task Button */}
            <TouchableOpacity
                style={styles.createBoardButton}
                onPress={() => setIsModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>

            {/* Task Modal for Creating and Editing Tasks */}
            <TaskModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={selectedTask ? handleEditTask : handleCreateTask} // Different handlers for editing vs creating
                taskName={newTaskName}
                setTaskName={setNewTaskName}
                taskDescription={newTaskDescription}
                setTaskDescription={setNewTaskDescription}
                isFinished={isFinished}
                setIsFinished={setIsFinished}
            />

            {/* Options Menu */}
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={handleEditModal} // Use the edit handler
                onDelete={handleDeleteTask} // Use the delete handler
            />
        </View>
    );
};

export default TaskView;
