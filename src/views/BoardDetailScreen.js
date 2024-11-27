import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useDataContext } from '../services/DataContext';
import BoardHeader from '../components/BoardHeader/BoardHeader';
import CreateListModal from '../components/CreateListModal/CreateListModal';
import ListsSection from '../components/ListSection/ListsSection';
import styles from '../styles/GlobalStyles';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BoardDetailScreen = ({ route }) => {
    const { boardId } = route.params;
    const { getBoardById, createList } = useDataContext();
    const board = getBoardById(boardId);

    const [modalVisible, setModalVisible] = useState(false);
    const [newListName, setNewListName] = useState('');
    const [newListColor, setNewListColor] = useState('#ffffff');

    if (!board) {
        return (
            <View style={styles.scrollContainer}>
                <Text style={styles.text}>Board not found</Text>
            </View>
        );
    }

    const handleAddList = () => {
        if (!newListName.trim()) {
            Alert.alert('Error', 'List name cannot be empty.');
            return;
        }

        createList(board.id, {
            id: Date.now(), // Generate unique ID
            name: newListName.trim(),
            color: newListColor.trim(),
        });

        setNewListName('');
        setNewListColor('#ffffff');
        setModalVisible(false);
        Alert.alert('Success', 'List added successfully!');
    };

    return (
        <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Board Header */}
                <BoardHeader board={board} />

                {/* Lists Section */}
                <ListsSection lists={board.lists} />
            </ScrollView>

            {/* Create List Button */}
            <TouchableOpacity
                style={styles.createBoardButton}
                onPress={() => setModalVisible(true)}
            >
                <MaterialIcons name="add" size={32} color="#fff" />
                <Text style={styles.buttonText}>Create New List</Text>
            </TouchableOpacity>

            {/* Modal for Creating New List */}
            <CreateListModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={handleAddList}
                listName={newListName}
                setListName={setNewListName}
                listColor={newListColor}
                setListColor={setNewListColor}
            />
        </View>
    );
};

export default BoardDetailScreen;
