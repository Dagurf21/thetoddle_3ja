import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    Button,
    Modal,
    TextInput,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useDataContext } from '../services/DataContext'; // Adjust the path to DataContext.js

const BoardDetailScreen = ({ route }) => {
    const { boardId } = route.params; // Get boardId from navigation params

    // Access context methods and data
    const { getBoardById, createList } = useDataContext();

    // Fetch the current board using context
    const board = getBoardById(boardId);

    // Local state for modal and inputs
    const [modalVisible, setModalVisible] = useState(false);
    const [newListName, setNewListName] = useState('');
    const [newListColor, setNewListColor] = useState('#ffffff');

    if (!board) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Board not found</Text>
            </View>
        );
    }

    const handleAddList = () => {
        if (!newListName.trim()) {
            Alert.alert('Error', 'List name cannot be empty.');
            return;
        }

        // Create a new list using context
        createList(board.id, {
            id: Date.now(), // Generate a unique ID
            name: newListName,
            color: newListColor,
        });

        setNewListName(''); // Reset input fields
        setNewListColor('#ffffff');
        setModalVisible(false); // Close modal
        Alert.alert('Success', 'List added successfully!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{board.name}</Text>
            {board.thumbnailPhoto ? (
                <Image source={{ uri: board.thumbnailPhoto }} style={styles.image} />
            ) : (
                <Text style={styles.text}>No image available</Text>
            )}

            {board.lists.length === 0 ? (
                <View>
                    <Text style={styles.text}>No lists in board... Create a list:</Text>
                    <TouchableOpacity
                        style={styles.createButton}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>Create List</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <Text style={styles.subtitle}>Lists:</Text>
                    <FlatList
                        data={board.lists}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View
                                style={[styles.listItem, { backgroundColor: item.color }]}
                            >
                                <Text style={styles.listText}>{item.name}</Text>
                            </View>
                        )}
                    />
                </>
            )}

            {/* Modal for Creating New List */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Create New List</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="List Name"
                            value={newListName}
                            onChangeText={setNewListName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Color (e.g., #ff0000)"
                            value={newListColor}
                            onChangeText={setNewListColor}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Add List" onPress={handleAddList} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
    },
    listItem: {
        padding: 12,
        marginVertical: 8,
        borderRadius: 6,
    },
    listText: {
        fontSize: 18,
        fontWeight: '500',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 8,
    },
    createButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
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

export default BoardDetailScreen;
