import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/GlobalStyles';

const BoardItem = ({ board, onView, onOptionsPress }) => {
    return (
        <TouchableOpacity style={styles.boardItem} onPress={() => onView(board.id)}>
            <Image source={{ uri: board.thumbnailPhoto }} style={styles.thumbnail} />
            <Text style={styles.boardButtonText}>{board.name}</Text>
            <TouchableOpacity style={styles.dotsButton} onPress={onOptionsPress}>
                <MaterialIcons name="more-vert" size={32} style={styles.threeDots} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default BoardItem;
