import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OptionsMenu from './OptionsMenu';
import EditListModal from '../components/EditListModal';
import { useDataContext } from '../services/DataContext';

const List = ({ list }) => {
    const navigation = useNavigation();
    const { deleteList, updateList } = useDataContext();

    // Variables for options menu
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    // States for editList inside options
    const [selectedList, setSelectedList] = useState(null);
    const [editListName, setEditListName] = useState('');
    const [editListColor, setEditListColor] = useState('');
    const [isEditListModalVisible, setIsEditListModalVisible] = useState(false);

    const handleNavigateToTasks = () => {
        navigation.navigate('TaskView', { listId: list.id });
    };

    const handlePressOptions = (event) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPosition({ x: pageX, y: pageY });
        setSelectedList(list);
        setMenuVisible(true);
    };

    const handleEditList = () => {
        setEditListName(selectedList.name);
        setEditListColor(selectedList.color);
        setIsEditListModalVisible(true);
        setMenuVisible(false);
    };

    const handleSaveEditedList = () => {
        if (!editListName.trim()) {
            alert('List name cannot be empty.');
            return;
        }

        const updatedList = {
            id: selectedList.id,
            name: editListName.trim(),
            color: editListColor.trim(),
        };

        updateList(selectedList.id, updatedList);
        setIsEditListModalVisible(false);
    };

    const handleDeleteList = () => {
        deleteList(selectedList.id);
        setMenuVisible(false);
    };

    return (
        <View style={styles.listContainer}>
            {/* Color stripe */}
            <View style={[styles.colorStripe, { backgroundColor: list.color }]} />

            {/* List name (navigates to tasks) */}
            <TouchableOpacity style={styles.listContent} onPress={handleNavigateToTasks}>
                <Text style={styles.listName}>{list.name}</Text>
            </TouchableOpacity>

            {/* Options menu trigger */}
            <TouchableOpacity
                style={styles.optionsButton}
                onPress={(event) => handlePressOptions(event)}
            >
                <Text style={styles.optionsText}>⋮</Text>
            </TouchableOpacity>

            {/* Options menu */}
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={handleEditList}
                onDelete={handleDeleteList}
            />

            {/* Edit List Modal */}
            <EditListModal
                visible={isEditListModalVisible}
                onClose={() => setIsEditListModalVisible(false)}
                onSubmit={handleSaveEditedList}
                listName={editListName}
                setListName={setEditListName}
                listColor={editListColor}
                setListColor={setEditListColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#f8f9fa', // Neutral background
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden', // Ensure the stripe stays within the border radius
    },
    colorStripe: {
        width: 10, // Stripe width for the flag
        height: '100%', // Extend the stripe to the full height of the box
    },
    listContent: {
        flex: 1, // Allow the text to fill the remaining space
        padding: 16, // Add padding around the text
    },
    listName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    optionsButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionsText: {
        fontSize: 18,
        color: '#666',
    },
});

export default List;
