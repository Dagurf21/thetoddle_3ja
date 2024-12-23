import React, { useState } from 'react'
import styles from './styles'
import {
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native'
import { useDataContext } from '../../services/DataContext'
import BoardItem from '../../components/BoardItem/BoardItem'
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal'
import EditBoardModal from '../../components/EditBoardModal/EditBoardModal'
import OptionsMenu from '../../components/OptionsMenu/OptionsMenu'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeScreen = ({ navigation }) => {
    const { boards, createBoard, updateBoard, deleteBoard } = useDataContext()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
    const [selectedBoard, setSelectedBoard] = useState(null)

    // State for creating a new board
    const [newBoardName, setNewBoardName] = useState('')
    const [newBoardThumbnail, setNewBoardThumbnail] = useState('')
    const [newBoardDescription, setNewBoardDescription] = useState('')

    // State for editing an existing board
    const [isEditModalVisible, setIsEditModalVisible] = useState(false)
    const [editBoardName, setEditBoardName] = useState('')
    const [editBoardThumbnail, setEditBoardThumbnail] = useState('')
    const [editBoardDescription, setEditBoardDescription] = useState('')

    const handlePressOptions = (event, board) => {
        const { pageX, pageY } = event.nativeEvent
        setMenuPosition({ x: pageX, y: pageY })
        setEditBoardName(board.name)
        setEditBoardThumbnail(board.thumbnailPhoto)
        setEditBoardDescription(board.description)
        setSelectedBoard(board)
        setMenuVisible(true)
    }

    const handleCreateBoard = () => {
        if (
            !newBoardName.trim() ||
            !newBoardThumbnail.trim() ||
            !newBoardDescription.trim()
        ) {
            alert('Please fill in all fields.')
            return
        }

        const newBoard = {
            id: boards.length + 1,
            name: newBoardName.trim(),
            thumbnailPhoto: newBoardThumbnail.trim(),
            description: newBoardDescription.trim(),
        }

        createBoard(newBoard)
        setNewBoardName('')
        setNewBoardThumbnail('')
        setNewBoardDescription('')
        setIsModalVisible(false)
    }

    const handleSaveBoard = () => {
        setMenuVisible(false)
        if (!selectedBoard) {
            alert('No board selected to save.')
            return
        }

        if (
            !editBoardName.trim() ||
            !editBoardThumbnail.trim() ||
            !editBoardDescription.trim()
        ) {
            alert('Please fill in all fields.')
            return
        }

        const updatedBoard = {
            name: editBoardName.trim(),
            thumbnailPhoto: editBoardThumbnail.trim(),
            description: editBoardDescription.trim(),
        }

        updateBoard(selectedBoard.id, updatedBoard)

        setIsEditModalVisible(false)
        setMenuVisible(false)
    }

    const handleDeleteBoard = () => {
        deleteBoard(selectedBoard.id)
        setMenuVisible(false)
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Your Boards</Text>

                {/* Open calendar button */}
                <TouchableOpacity
                    style={styles.calendarButton}
                    onPress={() => navigation.navigate('Calendar')}
                >
                    <MaterialIcons
                        name="calendar-today"
                        size={24}
                        color="#000"
                    />
                    <Text style={styles.calendarText}>Calendar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <BoardItem
                        board={item}
                        onView={(id) =>
                            navigation.navigate('BoardDetail', { boardId: id })
                        }
                        onOptionsPress={(event) =>
                            handlePressOptions(event, item)
                        }
                    />
                )}
                contentContainerStyle={styles.flatListContainer}
            />

            {/* Create New Board Button */}
            <TouchableOpacity
                style={styles.createBoardButton}
                onPress={() => setIsModalVisible(true)}
            >
                <MaterialIcons name="add" size={32} color="#fff" />
                <Text style={styles.buttonText}>Create New Board</Text>
            </TouchableOpacity>

            {/* Modal for Creating a New Board */}
            <CreateBoardModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onSubmit={handleCreateBoard}
                boardName={newBoardName}
                setBoardName={setNewBoardName}
                boardThumbnail={newBoardThumbnail}
                setBoardThumbnail={setNewBoardThumbnail}
                boardDescription={newBoardDescription}
                setBoardDescription={setNewBoardDescription} // New props for description
            />

            {/* Modal for Editing a Board */}
            <EditBoardModal
                visible={isEditModalVisible}
                onClose={() => setIsEditModalVisible(false)}
                onSubmit={handleSaveBoard}
                boardName={editBoardName}
                setBoardName={setEditBoardName}
                boardThumbnail={editBoardThumbnail}
                setBoardThumbnail={setEditBoardThumbnail}
                boardDescription={editBoardDescription}
                setBoardDescription={setEditBoardDescription} // New props for description
            />

            {/* Options Menu for a Board */}
            <OptionsMenu
                visible={menuVisible}
                position={menuPosition}
                onClose={() => setMenuVisible(false)}
                onEdit={() => setIsEditModalVisible(true)}
                onDelete={handleDeleteBoard}
            />
        </ScrollView>
    )
}

export default HomeScreen
