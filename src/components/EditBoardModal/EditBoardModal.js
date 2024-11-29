import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native';
import styles from './styles';

const EditBoardModal = ({
                            visible,
                            onClose,
                            onSubmit,
                            boardName = "",
                            setBoardName,
                            boardThumbnail = "",
                            setBoardThumbnail,
                            boardDescription = "",
                            setBoardDescription,
                        }) => {

    const isSaveDisabled = !boardName.trim() || !boardThumbnail.trim() || !boardDescription.trim();

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="none"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.createHeader}>Edit Board</Text>

                    {/* Board Name Input */}
                    <TextInput
                        accessible={true}
                        accessibilityLabel="Edit Board Name"
                        placeholder="Board Name"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        value={boardName}
                        onChangeText={(text) => {
                            setBoardName(text);
                        }}
                    />

                    {/* Thumbnail URL Input */}
                    <TextInput
                        accessible={true}
                        accessibilityLabel="Edit Thumbnail URL"
                        placeholder="Thumbnail URL"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        value={boardThumbnail}
                        onChangeText={(text) => {
                            setBoardThumbnail(text);
                        }}
                    />

                    {/* Description Input */}
                    <TextInput
                        accessible={true}
                        accessibilityLabel="Edit Board Description"
                        placeholder="Description"
                        placeholderTextColor="#C4C4C4"
                        style={styles.input}
                        multiline={true} // Allows multi-line input
                        numberOfLines={3} // Specifies visible rows
                        value={boardDescription}
                        onChangeText={(text) => {
                            setBoardDescription(text);
                        }}
                    />

                    {/* Buttons */}
                    <View style={styles.editButtons}>
                        <TouchableOpacity style={styles.button} onPress={onClose}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                isSaveDisabled && { backgroundColor: "#ccc" },
                            ]}
                            onPress={() => {
                                onSubmit();
                            }}
                            disabled={isSaveDisabled}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default EditBoardModal;
