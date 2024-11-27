import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/GlobalStyles';

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




{ /* OLD CODE FROM DAGUR
  // Display a single board
  import React from "react";
  import { View, Text, Image, StyleSheet, Button } from "react-native";

  const BoardItem = ({ board, onView }) => {
    return (
      <View style={styles.boardItem}>
        <Image
          source={{ uri: board.thumbnailPhoto }}
          style={styles.thumbnail}
        />
        <View style={styles.boardDetails}>
          <Text style={styles.boardName}>{board.name}</Text>
          <Button title="View Board" onPress={() => onView(board.id)} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    boardItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
      padding: 12,
      borderWidth: 1,
      borderColor: "#ddd",
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
      fontWeight: "500",
      marginBottom: 8,
    },
  });

  export default BoardItem;
*/}
