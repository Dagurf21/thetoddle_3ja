import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Button,
    Image,
    TextInput,
    Modal,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useDataContext } from '../services/DataContext';

const HomeScreen = ({ navigation }) => {
    const { boards, createBoard } = useDataContext();
    const { deleteBoard } = useDataContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardThumbnail, setNewBoardThumbnail] = useState('');

    const handleAddBoard = () => {
        if (!newBoardName.trim() || !newBoardThumbnail.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        const newBoard = {
            id: boards.length + 1, // Generate a new ID
            name: newBoardName,
            thumbnailPhoto: newBoardThumbnail,
        };

        createBoard(newBoard);
        setNewBoardName('');
        setNewBoardThumbnail('');
        setIsModalVisible(false); // Close the modal
    };

    const handleDelete = () => {
        deleteBoard(1); // Delete the board with id=1
    };


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.header}>Boards</Text>
            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.boardItem}>
                        <Image
                            source={{ uri: item.thumbnailPhoto }}
                            style={styles.thumbnail}
                        />
                        <View style={styles.boardDetails}>
                            <Text style={styles.boardName}>{item.name}</Text>
                            <Button
                                title="View Board"
                                onPress={() =>
                                    navigation.navigate('BoardDetail', { boardId: item.id })
                                }
                            />
                        </View>
                    </View>
                )}
                // Ensure FlatList scrolls independently
                contentContainerStyle={styles.flatListContainer}
            />
            <Button
                title="Add New Board"
                onPress={() => setIsModalVisible(true)}
            />

            <Button title="Delete board 1" onPress={handleDelete} />

            {/* Modal for adding a new board */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Add New Board</Text>
                        <TextInput
                            placeholder="Board Name"
                            style={styles.input}
                            value={newBoardName}
                            onChangeText={setNewBoardName}
                        />
                        <TextInput
                            placeholder="Thumbnail URL"
                            style={styles.input}
                            value={newBoardThumbnail}
                            onChangeText={setNewBoardThumbnail}
                        />
                        <View style={styles.modalButtons}>
                            <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
                            <Button title="Add" onPress={handleAddBoard} />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    boardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
    },
    boardDetails: {
        flex: 1,
    },
    boardName: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
    },
    flatListContainer: {
        paddingBottom: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalHeader: {
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
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default HomeScreen;
