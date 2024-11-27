import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TextInput,
    Switch,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const TaskModal = ({
                       visible,
                       onClose,
                       onSubmit,
                       taskName = '',
                       setTaskName,
                       taskDescription = '',
                       setTaskDescription,
                       isFinished = false,
                       setIsFinished,
                   }) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Edit Task</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Task Name"
                        placeholderTextColor="#C4C4C4"
                        value={taskName}
                        onChangeText={setTaskName}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Task Description"
                        placeholderTextColor="#C4C4C4"
                        value={taskDescription}
                        onChangeText={setTaskDescription}
                        multiline={true}
                    />
                    <View style={styles.switchContainer}>
                        <Text>Mark as Completed</Text>
                        <Switch
                            value={isFinished}
                            onValueChange={setIsFinished}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={onClose}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.submitButton]}
                            onPress={onSubmit}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    button: {
        width: 100,
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 8,
    },
    cancelButton: {
        backgroundColor: '#007bff',
    },
    submitButton: {
        backgroundColor: '#007bff',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TaskModal;
