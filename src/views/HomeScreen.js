import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useDataContext } from '../context/DataContext';

const HomeScreen = ({ navigation }) => {
    const { boards } = useDataContext();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Boards</Text>
            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.boardItem}>
                        <Text style={styles.boardName}>{item.name}</Text>
                        <Button
                            title="View Board"
                            onPress={() =>
                                navigation.navigate('BoardDetail', { boardId: item.id })
                            }
                        />
                    </View>
                )}
            />
            <Button
                title="Add New Board"
                onPress={() => navigation.navigate('AddBoard')}
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
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        marginBottom: 8,
    },
    boardName: {
        fontSize: 18,
        fontWeight: '500',
    },
});

export default HomeScreen;
