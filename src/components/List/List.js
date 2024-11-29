import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import OptionsMenu from '../OptionsMenu/OptionsMenu'
import EditListModal from '../EditListModal/EditListModal'
import { useDataContext } from '../../services/DataContext'
import styles from './styles'

const List = ({ list }) => {
    const navigation = useNavigation()
    const { deleteList, updateList } = useDataContext()

    // Variables for options menu
    const [menuVisible, setMenuVisible] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })

    // States for editing list
    const [isEditListModalVisible, setIsEditListModalVisible] = useState(false)
    const [editListName, setEditListName] = useState('')
    const [editListColor, setEditListColor] = useState('')

    const handleNavigateToTasks = () => {
        navigation.navigate('TaskView', { listId: list.id })
    }

    const handlePressOptions = (event) => {
        const { pageX, pageY } = event.nativeEvent
        setMenuPosition({ x: pageX, y: pageY })
        setMenuVisible(true)
    }

    const handleSaveEditedList = () => {
        if (!editListName.trim()) {
            alert('List name cannot be empty.')
            return
        }

        const updatedList = {
            id: list.id,
            name: editListName.trim(),
            color: editListColor.trim(),
        }

        updateList(list.id, updatedList)
        setIsEditListModalVisible(false)
    }

    const handleDeleteList = () => {
        deleteList(list.id)
        setMenuVisible(false)
    }

    return (
        <View style={styles.listContainer}>
            {/* Color stripe */}
            <View
                style={[styles.colorStripe, { backgroundColor: list.color }]}
            />

            {/* List name (navigates to tasks) */}
            <TouchableOpacity
                style={styles.listContent}
                onPress={handleNavigateToTasks}
            >
                <Text style={styles.listName}>{list.name}</Text>
            </TouchableOpacity>

            {/* Options menu trigger */}
            <TouchableOpacity
                style={styles.optionsButton}
                onPress={(event) => handlePressOptions(event)}
            >
                <Text style={styles.optionsText}>⋮</Text>
            </TouchableOpacity>

            {/* Options menu */}
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={() => setIsEditListModalVisible(true)}
                onDelete={handleDeleteList}
            />

            {/* Edit List Modal */}
            <EditListModal
                visible={isEditListModalVisible}
                onClose={() => setIsEditListModalVisible(false)}
                onSubmit={handleSaveEditedList}
                listName={editListName}
                setListName={setEditListName}
                listColor={editListColor}
                setListColor={setEditListColor}
            />
        </View>
    )
}

export default List
