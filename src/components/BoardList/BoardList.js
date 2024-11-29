import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDataContext } from '../../services/DataContext'

const BoardList = () => {
    const { boards } = useDataContext()

    return (
        <View>
            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default BoardList
