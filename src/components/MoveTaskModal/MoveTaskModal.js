import React from 'react'
import { Modal, View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'

const MoveTaskModal = ({ visible, onClose, lists, onMove }) => {
    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Move Task To:</Text>
                    <FlatList
                        data={lists}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.listItem}
                                onPress={() => onMove(item.id)}
                            >
                                <Text style={styles.listItemText}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <Text style={styles.closeButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default MoveTaskModal
