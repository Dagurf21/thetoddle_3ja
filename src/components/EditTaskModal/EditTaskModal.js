import React, { useState } from 'react'
import styles from './styles'
import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const TaskModal = ({
    visible,
    onClose,
    onSubmit,
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
    isFinished,
    setIsFinished,
    dueDate,
    setDueDate,
}) => {
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false)
        if (selectedDate) {
            setDueDate(selectedDate.toISOString().split('T')[0])
        }
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalHeader}>Task Details</Text>

                    {/* Task Name Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Task Name"
                        value={taskName}
                        onChangeText={setTaskName}
                        placeholderTextColor="#999"
                    />

                    {/* Task Description Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Task Description"
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                        placeholderTextColor="#999"
                        multiline
                        numberOfLines={3}
                    />

                    {/* Due Date Picker */}
                    <TouchableOpacity
                        style={styles.datePickerButton}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={styles.datePickerText}>
                            {dueDate ? `Due Date: ${dueDate}` : 'Set Due Date'}
                        </Text>
                    </TouchableOpacity>

                    {/* Show DateTimePicker */}
                    {showDatePicker && (
                        <DateTimePicker
                            value={dueDate ? new Date(dueDate) : new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    {/* Is Finished Toggle */}
                    <TouchableOpacity
                        style={[
                            styles.toggleButton,
                            isFinished ? styles.complete : styles.incomplete,
                        ]}
                        onPress={() => setIsFinished(!isFinished)}
                    >
                        <Text style={styles.toggleText}>
                            {isFinished
                                ? 'Mark as Incomplete'
                                : 'Mark as Complete'}
                        </Text>
                    </TouchableOpacity>

                    {/* Modal Buttons */}
                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onClose}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.saveButton]}
                            onPress={onSubmit}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default TaskModal
