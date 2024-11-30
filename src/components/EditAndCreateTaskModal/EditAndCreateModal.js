import React, { useState } from 'react'
import styles from './styles'
import {
    Modal,
    View,
    Text,
    TextInput,
    Switch,
    TouchableOpacity,
    Platform,
} from 'react-native'
import DatePicker from 'react-datepicker' // Web date picker
import DateTimePicker from '@react-native-community/datetimepicker' // Mobile date picker
import 'react-datepicker/dist/react-datepicker.css'

// TODO: EDIT TASK DOEST NOT OPEN ON IOS

const EditAndCreateTaskModal = ({
    visible,
    onClose,
    onSubmit,
    taskName = '',
    setTaskName,
    taskDescription = '',
    setTaskDescription,
    isFinished = false,
    setIsFinished,
    dueDate = '',
    setDueDate,
}) => {
    const [showDatePicker, setShowDatePicker] = useState(false)

    const handleDateChange = (event, selectedDate) => {
        if (Platform.OS === 'web') {
            setDueDate(
                selectedDate ? selectedDate.toISOString().split('T')[0] : '',
            )
        } else {
            const currentDate = selectedDate || new Date(dueDate)
            setShowDatePicker(false)
            if (selectedDate) {
                setDueDate(currentDate.toISOString().split('T')[0])
            }
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
                    <Text style={styles.modalTitle}>Create Task</Text>

                    {/* Task Name Input */}
                    <TextInput
                        style={styles.input}
                        placeholder="Task Name"
                        placeholderTextColor="#C4C4C4"
                        value={taskName}
                        onChangeText={setTaskName}
                    />

                    {/* Task Description Input */}
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Task Description"
                        placeholderTextColor="#C4C4C4"
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                        multiline={true}
                    />

                    {/* Completion Toggle */}
                    <View style={styles.switchContainer}>
                        <Text>Mark as Completed</Text>
                        <Switch
                            value={isFinished}
                            onValueChange={setIsFinished}
                        />
                    </View>

                    {/* Date Picker */}
                    {Platform.OS === 'web' ? (
                        <View style={styles.datePickerContainer}>
                            <Text style={styles.datePickerLabel}>
                                Due Date:
                            </Text>
                            <DatePicker
                                selected={dueDate ? new Date(dueDate) : null}
                                onChange={(date) =>
                                    setDueDate(date.toISOString().split('T')[0])
                                }
                                dateFormat="yyyy-MM-dd"
                                className="react-datepicker"
                                placeholderText="Select a date"
                            />
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.datePickerButton}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={styles.datePickerText}>
                                {dueDate
                                    ? `Due Date: ${dueDate}`
                                    : 'Set Due Date'}
                            </Text>
                        </TouchableOpacity>
                    )}

                    {Platform.OS !== 'web' && showDatePicker && (
                        <DateTimePicker
                            value={dueDate ? new Date(dueDate) : new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}

                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onClose}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.createButton]}
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

export default EditAndCreateTaskModal
