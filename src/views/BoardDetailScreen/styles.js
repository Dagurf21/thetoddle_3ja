import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 8,
        color: '#333',
    },
    headerContainer: {
        marginBottom: 16,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    descriptionText: {
        marginTop: 8,
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        textAlign: 'center',
    },
    createBoardButton: {
        alignSelf: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4caf50',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
})

export default styles
