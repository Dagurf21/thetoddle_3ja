// Display a single board
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const BoardItem = ({ board, onView }) => {
    return (
        <View style={styles.boardItem}>
            <Image source={{ uri: board.thumbnailPhoto }} style={styles.thumbnail} />
            <View style={styles.boardDetails}>
                <Text style={styles.boardName}>{board.name}</Text>
                <Button title="View Board" onPress={() => onView(board.id)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default BoardItem;
