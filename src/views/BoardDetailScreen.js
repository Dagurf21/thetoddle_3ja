import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import data from "../../data.json"; // Adjust the path to where data.json is located

const BoardDetailScreen = ({ route }) => {
    const { boardId } = route.params; // Get boardId from navigation params
    const board = data.boards.find((b) => b.id === boardId); // Find the board using the ID

    if (!board) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Board not found</Text>
            </View>
        );
    }

    // Filter lists that belong to the selected board
    const lists = data.lists.filter((list) => list.boardId === boardId);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{board.name}</Text>
            <Image source={{ uri: board.thumbnailPhoto }} style={styles.image} />

            <Text style={styles.subtitle}>Lists:</Text>
            <FlatList
                data={lists}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.listItem, { backgroundColor: item.color }]}>
                        <Text style={styles.listText}>{item.name}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text>No lists available for this board.</Text>}
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
    },
});

export default BoardDetailScreen;
