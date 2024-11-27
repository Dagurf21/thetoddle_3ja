import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
})

export default styles;