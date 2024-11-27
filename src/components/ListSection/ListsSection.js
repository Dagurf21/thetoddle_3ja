import React from 'react';
import { View } from 'react-native';
import List from '../List/List';
import styles from './styles';


const ListsSection = ({ lists }) => {
    return (
        <View style={styles.container}>
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
        </View>
    );
};

export default ListsSection;
