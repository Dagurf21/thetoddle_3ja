import React, { useState } from 'react';
import { ScrollView, Text, FlatList, Dimensions } from 'react-native';
import { useDataContext } from '../services/DataContext';
import BoardItem from '../components/BoardItem';
import AddBoardModal from '../components/AddBoardModal';
import OptionsMenu from '../components/OptionsMenu';
import styles from '../styles/GlobalStyles';

const HomeScreen = ({ navigation }) => {
    const { boards, createBoard } = useDataContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [selectedBoard, setSelectedBoard] = useState(null);

    const handlePressOptions = (event, board) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPosition({ x: pageX, y: pageY });
        setSelectedBoard(board);
        setMenuVisible(true);
    };

    const handleAddBoard = (name, thumbnail) => {
        createBoard({ id: boards.length + 1, name, thumbnailPhoto: thumbnail });
        setIsModalVisible(false);
    };

    const handleEditBoard = () => {
        console.log('Edit board', selectedBoard);
        setMenuVisible(false);
    };

    const handleDeleteBoard = () => {
        console.log('Delete board', selectedBoard);
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
            <AddBoardModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={handleAddBoard}
            />
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={handleEditBoard}
                onDelete={handleDeleteBoard}
            />
        </ScrollView>
    );
};

export default HomeScreen;
