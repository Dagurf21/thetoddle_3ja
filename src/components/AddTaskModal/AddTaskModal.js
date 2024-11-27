import React, { useState } from 'react';
import {Modal, View, Text, TextInput, Switch, TouchableOpacity, Button,} from 'react-native';
import styles from './styles'

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
            animationType="none"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Create Task</Text>
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

                    <View style={styles.createButtons}>
                        <Button title="Cancel" onPress={onClose}  />
                        <Button title="Create" onPress={onSubmit}  />
                    </View>

                </View>
            </View>
        </Modal>
    );
};


export default TaskModal;
