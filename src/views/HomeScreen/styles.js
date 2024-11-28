import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    flatListContainer: {
        paddingBottom: 16,
    },
// Board
    boardButtonText: {
        fontSize: 20,
        color: '#333',
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
        backgroundColor: '#d3d3d3',
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
    dotsText: {
        fontSize: 24,
        color: '#000',
    },
    boardDetails: {
        flex: 1,
    },
// More Options
    optionsContainer: {
        flex: 1,
    },
    optionsOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    optionsMenu: {
        position: 'absolute',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1000,
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    lastMenuItem: {
        borderBottomWidth: 0,
    },
    optionsContent: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    threeDots: {
        marginLeft: 'auto',
        padding: 10,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    menuOption: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: '300',
        color: '#333',
    },
// Line
    line: {
        height: 2,
        backgroundColor: '#d3d3d3',
        marginVertical: 10,
        alignSelf: 'center',
        width: '50%',
    },

// Create board
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

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '50%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    createHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    createButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    }, /* <-- Special styles for loading screen --> */
    loadingScreencontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingScreenText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    boardDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },

});

export default styles;