import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    boardButtonText: {
        fontSize: 20,
        color: '#333',
        textAlign: 'left',
        fontFamily: 'Arial',
        marginBottom: 4,
    },
    boardDescriptionText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'left',
        fontFamily: 'Arial',
    },
    boardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#DFDFDF',
    },
    thumbnail: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
    },
    dotsButton: {
        padding: 8,
    },
    boardDetails: {
        flex: 1,
    },
})

export default styles
