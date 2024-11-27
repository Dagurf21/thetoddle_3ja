import React from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import styles from './styles';

const EditBoardModal = ({
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
                    <Text style={styles.editHeader}>Edit Board</Text>
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
                    <View style={styles.editButtons}>
                        <Button title="Cancel" onPress={onClose} color="#818181" />
                        <Button title="Save" onPress={onSubmit} color="#818181" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditBoardModal;
