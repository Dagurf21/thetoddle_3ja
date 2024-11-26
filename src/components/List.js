// Displays lists for a specific board
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const List = ({ list }) => {
    const navigation = useNavigation();

    const handleNavigateToTasks = () => {
        navigation.navigate('TaskView', { listId: list.id });
    };

    return (
        <TouchableOpacity
            style={[styles.listContainer, { backgroundColor: list.color }]} onPress={handleNavigateToTasks}>
            <Text style={styles.listName}>{list.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    listName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default List;
