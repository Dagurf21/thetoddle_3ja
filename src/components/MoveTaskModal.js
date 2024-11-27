import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

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
                                <Text style={styles.listItemText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeButtonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    listItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    listItemText: {
        fontSize: 16,
    },
    closeButton: {
        marginTop: 16,
        padding: 12,
        backgroundColor: '#f44336',
        borderRadius: 8,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default MoveTaskModal;
