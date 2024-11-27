import React from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import styles from './styles'

const CreateBoardModal = ({
                           visible,
                           onClose,
                           onSubmit,
                           boardName,
                           setBoardName,
                           boardThumbnail,
                           setBoardThumbnail,
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
                    <Text style={styles.createHeader}>Create New Board</Text>
                    <TextInput
                        placeholder="Board Name"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        value={boardName}
                        onChangeText={setBoardName}
                    />
                    <TextInput
                        placeholder="Thumbnail URL"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        value={boardThumbnail}
                        onChangeText={setBoardThumbnail}
                    />
                    <View style={styles.createButtons}>
                        <Button title="Cancel" onPress={onClose} color="#818181" />
                        <Button title="Create" onPress={onSubmit} color="#818181" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CreateBoardModal;
