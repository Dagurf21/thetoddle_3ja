import React, { useState } from 'react';
import { Text, StyleSheet, FlatList, Button, ScrollView } from 'react-native';
import { useDataContext } from '../services/DataContext';
import BoardItem from '../components/BoardItem';
import AddBoardModal from '../components/AddBoardModal';

const HomeScreen = ({ navigation }) => {
    const { boards, createBoard, deleteBoard } = useDataContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardThumbnail, setNewBoardThumbnail] = useState('');

    const handleAddBoard = () => {
        if (!newBoardName.trim() || !newBoardThumbnail.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        const newBoard = {
            id: boards.length + 1,
            name: newBoardName,
            thumbnailPhoto: newBoardThumbnail,
        };

        createBoard(newBoard);
        setNewBoardName('');
        setNewBoardThumbnail('');
        setIsModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.header}>Boards</Text>
            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <BoardItem
                        board={item}
                        onView={(id) => navigation.navigate('BoardDetail', { boardId: id })}
                    />
                )}
                contentContainerStyle={styles.flatListContainer}
            />
            <Button title="Add New Board" onPress={() => setIsModalVisible(true)} />

            {/*<Button title="Delete board 1" onPress={() => deleteBoard(1)} />*/}

            <AddBoardModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={handleAddBoard}
                boardName={newBoardName}
                setBoardName={setNewBoardName}
                boardThumbnail={newBoardThumbnail}
                setBoardThumbnail={setNewBoardThumbnail}
            />
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
    flatListContainer: {
        paddingBottom: 16,
    },
});

export default HomeScreen;
