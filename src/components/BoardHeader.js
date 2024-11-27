import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BoardHeader = ({ board }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{board.name}</Text>
            {board.thumbnailPhoto ? (
                <Image source={{ uri: board.thumbnailPhoto }} style={styles.image} />
            ) : (
                <Text style={styles.text}>No image available</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        marginBottom: 16,
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
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
    },
});

export default BoardHeader;
