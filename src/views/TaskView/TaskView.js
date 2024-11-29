import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDataContext } from '../../services/DataContext';
import Task from '../../components/Task/Task';
import TaskModal from '../../components/EditAndCreateTaskModal/EditAndCreateModal'; // Unified modal
import OptionsMenu from '../../components/OptionsMenuTask/OptionsMenuTask';
import MoveTaskModal from '../../components/MoveTaskModal/MoveTaskModal';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles';

const TaskView = ({ route }) => {
    const { listId } = route.params;
    const { getListById, updateTaskInList, getAllLists } = useDataContext();
    const list = getListById(listId);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false); // Separate state for edit modal
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedTask, setSelectedTask] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [isFinished, setIsFinished] = useState(false);
    const [dueDate, setDueDate] = useState('');
    const [isMoveModalVisible, setIsMoveModalVisible] = useState(false);

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
        if (!taskName.trim() || !dueDate.trim()) {
            alert('Please fill in all required fields.');
            return;
        }

        const newTask = {
            id: Date.now().toString(),
            name: taskName.trim(),
            description: taskDescription.trim(),
            isFinished,
            dueDate: dueDate.trim(),
        };

        updateTaskInList(listId, [...list.tasks, newTask]);

        setTaskName('');
        setTaskDescription('');
        setIsFinished(false);
        setDueDate('');
        setIsModalVisible(false);
    };

    const handleEditTask = () => {
        if (!taskName.trim() || !taskDescription.trim() || !dueDate.trim()) {
            alert('Please fill in all fields.');
            setMenuVisible(false)
            return;
        }

        const updatedTasks = list.tasks.map((task) =>
            task.id === selectedTask.id
                ? {
                    ...task,
                    name: taskName.trim(),
                    description: taskDescription.trim(),
                    isFinished,
                    dueDate: dueDate.trim(),
                }
                : task
        );

        updateTaskInList(listId, updatedTasks);
        setIsEditModalVisible(false); // Close edit modal
        setMenuVisible(false);
    };

    const handleDeleteTask = () => {
        const updatedTasks = list.tasks.filter((task) => task.id !== selectedTask.id);
        updateTaskInList(listId, updatedTasks);
        setMenuVisible(false);
    };

    const handlePressOptions = (event, task) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPosition({ x: pageX, y: pageY });
        setSelectedTask(task);
        setMenuVisible(true);
    };

    const ProgressBar = ({ tasks }) => {
        const completedTasks = tasks.filter((task) => task.isFinished).length;
        const totalTasks = tasks.length;
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

        return (
            <View style={styles.progressContainer}>
                <Text style={styles.progressText}>{`Progress: ${completedTasks}/${totalTasks}`}</Text>
                <View style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${progress}%` }]} />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.scrollContainer}>
            <Text style={styles.header}>{list.name}</Text>

            {/* Progress Bar */}
            <ProgressBar tasks={list.tasks} />

            {/* Task List */}
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
                ListEmptyComponent={<Text style={styles.progressText}>No tasks available.</Text>}
                contentContainerStyle={styles.flatListContainer}
            />

            <TouchableOpacity
                style={styles.createBoardButton}
                onPress={() => {
                    setIsModalVisible(true);
                    setSelectedTask(null); // Ensure it's for creating, not editing
                }}
            >
                <MaterialIcons name="add" size={32} color="#fff" />
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>

            {/* Task Modal for Creating */}
            <TaskModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={handleCreateTask}
                taskName={taskName}
                setTaskName={setTaskName}
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                isFinished={isFinished}
                setIsFinished={setIsFinished}
                dueDate={dueDate}
                setDueDate={setDueDate}
            />

            {/* Task Modal for Editing */}
            <TaskModal
                visible={isEditModalVisible}
                onClose={() => setIsEditModalVisible(false)}
                onSubmit={handleEditTask}
                taskName={taskName}
                setTaskName={setTaskName}
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                isFinished={isFinished}
                setIsFinished={setIsFinished}
                dueDate={dueDate}
                setDueDate={setDueDate}
            />

            {/* Options Menu */}
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={() => setIsEditModalVisible(true)}
                onDelete={handleDeleteTask}
                onMove={() => {
                    setIsMoveModalVisible(true);
                }}
            />

            {/* Move Task Modal */}
            <MoveTaskModal
                visible={isMoveModalVisible}
                onClose={() => setIsMoveModalVisible(false)}
                lists={getAllLists().filter((l) => l.id !== listId)}
                onMove={(targetListId) => {
                    const targetList = getListById(targetListId);
                    if (targetList) {
                        updateTaskInList(listId, list.tasks.filter((task) => task.id !== selectedTask.id));
                        updateTaskInList(targetListId, [...targetList.tasks, selectedTask]);
                    }
                    setIsMoveModalVisible(false);
                }}
            />
        </View>
    );
};

export default TaskView;
