import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
    const [showDatePicker, setShowDatePicker] = useState(false); // For displaying date picker

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false); // Close the picker
        if (selectedDate) {
            setDueDate(selectedDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD
        }
    };

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
                    />

                    {/* Task Description Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Task Description"
                        value={taskDescription}
                        onChangeText={setTaskDescription}
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
                        style={styles.toggleButton}
                        onPress={() => setIsFinished(!isFinished)}
                    >
                        <Text style={styles.toggleText}>
                            {isFinished ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </Text>
                    </TouchableOpacity>

                    {/* Modal Buttons */}
                    <View style={styles.modalButtons}>
                        <Button title="Cancel" onPress={onClose} />
                        <Button title="Save" onPress={onSubmit} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export