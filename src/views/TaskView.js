// Screen to view tasks in a list
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useDataContext } from '../services/DataContext';
import Task from '../components/Task';

const TaskView = ({ route }) => {
    const { listId } = route.params;
    const { getListById } = useDataContext();

    const list = getListById(listId);

    if (!list) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>List not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{list.name}</Text>
            <FlatList
                data={list.tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Task task={item} />}
                ListEmptyComponent={<Text style={styles.text}>No tasks available.</Text>}
            />
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
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 8,
    },
});

export default TaskView;
