import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import List from '../List/List'

const ListsSection = ({ lists }) => {
    return (
        <View style={styles.container}>
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
        </View>
    )
}

export default ListsSection
