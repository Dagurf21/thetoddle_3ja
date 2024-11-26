import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image } from 'react-native';
import { useDataContext } from '../services/DataContext';

const HomeScreen = ({ navigation }) => {
    const { boards, createBoard } = useDataContext();

    // Example handler to add a new board
    const handleAddBoard = () => {

        // TODO: Should redirect to new page or popup ?

        const newBoard = {
            id: boards.length + 1, // Generate a new ID
            name: `New Board ${boards.length + 1}`,
            thumbnailPhoto: 'https://via.placeholder.com/150', // Placeholder thumbnail
        };
        createBoard(newBoard);
    };

    return (
        <View style={styles.container}>
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
            />
            <Button
                title="Add New Board"
                onPress={handleAddBoard}
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
});

export default HomeScreen;
