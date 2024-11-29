import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const OptionsMenu = ({
    visible,
    position,
    onClose,
    onEdit,
    onDelete,
    onMove,
}) => {
    // Add onMove here
    const [menuDimensions, setMenuDimensions] = useState({
        width: 0,
        height: 0,
    })

    const adjustedPosition = {
        top:
            position.y + menuDimensions.height > Dimensions.get('window').height
                ? Dimensions.get('window').height - menuDimensions.height - 10
                : position.y,
        left:
            position.x + menuDimensions.width > Dimensions.get('window').width
                ? Dimensions.get('window').width - menuDimensions.width - 10
                : position.x,
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="none"
            onRequestClose={onClose}
        >
            <TouchableOpacity style={styles.optionsOverlay} onPress={onClose}>
                <View
                    style={[styles.optionsMenu, adjustedPosition]}
                    onLayout={(event) => {
                        const { width, height } = event.nativeEvent.layout
                        setMenuDimensions({ width, height })
                    }}
                >
                    <TouchableOpacity
                        onPress={onEdit}
                        style={styles.menuOption}
                    >
                        <MaterialIcons
                            name="edit"
                            size={24}
                            color="#9E9E9E"
                            style={styles.icon}
                        />
                        <Text style={styles.menuItemText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onDelete}
                        style={styles.menuOption}
                    >
                        <MaterialIcons
                            name="delete"
                            size={24}
                            color="#9E9E9E"
                            style={styles.icon}
                        />
                        <Text style={styles.menuItemText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onMove}
                        style={styles.menuOption}
                    >
                        <MaterialIcons
                            name="swap-horizontal-circle"
                            size={24}
                            color="#9E9E9E"
                            style={styles.icon}
                        />
                        <Text style={styles.menuItemText}>Move Task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.menuOption}
                    >
                        <MaterialIcons
                            name="close"
                            size={24}
                            color="#9E9E9E"
                            style={styles.icon}
                        />
                        <Text style={styles.menuItemText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

export default OptionsMenu
