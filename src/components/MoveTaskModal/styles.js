import { StyleSheet } from 'react-native';

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

export default styles;