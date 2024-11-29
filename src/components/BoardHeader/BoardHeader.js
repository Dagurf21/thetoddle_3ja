import React from 'react'
import styles from './styles'
import { View, Text, Image } from 'react-native'

const BoardHeader = ({ board }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{board.name}</Text>
            <Text style={styles.description}>{board.description}</Text>
            {board.thumbnailPhoto ? (
                <Image
                    source={{ uri: board.thumbnailPhoto }}
                    style={styles.image}
                />
            ) : (
                <Text style={styles.text}>No image available</Text>
            )}
        </View>
    )
}

export default BoardHeader
