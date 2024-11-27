import React from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const CreateListModal = ({
                             visible,
                             onClose,
                             onSubmit,
                             listName,
                             setListName,
                             listColor,
                             setListColor,
                         }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Create New List</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="List Name"
                        value={listName}
                        onChangeText={setListName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Color (e.g., #ff0000)"
                        value={listColor}
                        onChangeText={setListColor}
                    />
                    <View style={styles.modalButtons}>
                        <Button title="Cancel" onPress={onClose} />
                        <Button title="Add List" onPress={onSubmit} />
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
    modalView: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
        width: '100%',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default CreateListModal;
