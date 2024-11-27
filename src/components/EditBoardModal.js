import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

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

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    editHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    editButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default EditBoardModal;
