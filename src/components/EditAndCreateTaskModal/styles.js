import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
    },
    textArea: {
        height: 80,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    datePickerContainer: {
        marginBottom: 16,
    },
    datePickerLabel: {
        marginBottom: 8,
    },
    datePickerButton: {
        backgroundColor: '#ddd',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 16,
    },
    datePickerText: {
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        padding: 12,
        borderRadius: 4,
        width: '35%',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#e74c3c',
    },
    createButton: {
        backgroundColor: '#2ecc71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})

export default styles
