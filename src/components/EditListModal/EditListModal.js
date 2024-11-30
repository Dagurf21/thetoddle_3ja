import React from 'react'
import styles from './styles'
import { View, Text, TextInput, Button, Modal } from 'react-native'

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
            animationType="none"
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
                        <Button
                            title="Cancel"
                            onPress={onClose}
                            color="#818181"
                        />
                        <Button
                            title="Save"
                            onPress={onSubmit}
                            color="#818181"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditListModal
