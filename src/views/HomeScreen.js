import React, { useState } from 'react';
import { ScrollView, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDataContext } from '../services/DataContext';
import BoardItem from '../components/BoardItem';
import AddBoardModal from '../components/AddBoardModal';
import OptionsMenu from '../components/OptionsMenu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
    const { boards, createBoard, deleteBoard } = useDataContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedBoard, setSelectedBoard] = useState(null);
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardThumbnail, setNewBoardThumbnail] = useState('');

    const handlePressOptions = (event, board) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPosition({ x: pageX, y: pageY });
        setSelectedBoard(board);
        setMenuVisible(true);
    };

    const handleCreateBoard = () => {
        if (!newBoardName.trim()) {
            alert('Please enter a valid board name.');
            return;
        }

        if (!newBoardThumbnail.trim()) {
            alert('Please enter a valid thumbnail URL.');
            return;
        }

        const newBoard = {
            id: boards.length + 1,
            name: newBoardName.trim(),
            thumbnailPhoto: newBoardThumbnail.trim(),
        };

        createBoard(newBoard);
        setNewBoardName('');
        setNewBoardThumbnail('');
        setIsModalVisible(false);
    };


    const handleEditBoard = () => {
        console.log('Edit board', selectedBoard);
        setMenuVisible(false);
    };

    const handleDeleteBoard = () => {
        console.log('Delete board');
        deleteBoard(selectedBoard.id);
        setMenuVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.header}>Your Boards</Text>
            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <BoardItem
                        board={item}
                        onView={(id) => navigation.navigate('BoardDetail', { boardId: id })}
                        onOptionsPress={(event) => handlePressOptions(event, item)}
                    />
                )}
                contentContainerStyle={styles.flatListContainer}
            />

            {/* Create New Board Button */}
            <TouchableOpacity
                style={styles.createBoardButton}
                onPress={() => setIsModalVisible(true)}
            >
                <MaterialIcons name="add" size={32} color="#fff" />
                <Text style={styles.buttonText}>Create New Board</Text>
            </TouchableOpacity>

            {/* Pop-up for Create Board form */}
            <AddBoardModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={() => {
                    console.log('Board Name:', newBoardName); // Debugging
                    console.log('Thumbnail URL:', newBoardThumbnail); // Debugging
                    handleCreateBoard();
                }}
                boardName={newBoardName}
                setBoardName={setNewBoardName}
                boardThumbnail={newBoardThumbnail}
                setBoardThumbnail={setNewBoardThumbnail}
            />

            {/* Pop-up for the options on each board */}
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={handleEditBoard}
                onDelete={handleDeleteBoard}
            />
        </ScrollView>
    );
}
export default HomeScreen;
