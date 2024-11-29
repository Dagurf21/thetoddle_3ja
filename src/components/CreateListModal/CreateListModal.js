import React from 'react'
import styles from './styles'
import { View, Text, TextInput, Button, Modal } from 'react-native'

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
            animationType="none"
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
                        placeholderTextColor="#C4C4C4"
                        value={listName}
                        onChangeText={setListName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Color (e.g., #ff0000)"
                        placeholderTextColor="#C4C4C4"
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
    )
}

export default CreateListModal
