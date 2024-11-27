import React from 'react';
import { View, StyleSheet } from 'react-native';
import List from './List';


const ListsSection = ({ lists }) => {
    return (
        <View style={styles.container}>
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
});

export default ListsSection;
