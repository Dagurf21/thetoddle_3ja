import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';

const EditListModal = ({
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
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.editHeader}>Edit List</Text>
                    <TextInput
                        placeholder="List Name"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        value={listName}
                        onChangeText={setListName}
                    />
                    <TextInput
                        placeholder="List Color"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        value={listColor}
                        onChangeText={setListColor}
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

export default EditListModal;
