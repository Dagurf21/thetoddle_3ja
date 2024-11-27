import React, { useState } from 'react';
import {Modal, View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import styles from './styles';

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

export default TaskModal;
