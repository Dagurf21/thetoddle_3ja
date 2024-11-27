import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#666',
        marginRight: 12,
        borderRadius: 4,
    },
    checkboxChecked: {
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
    },
    checkboxUnchecked: {
        backgroundColor: 'transparent',
    },
    taskDetails: {
        flex: 1,
    },
    taskName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskDescription: {
        fontSize: 16,
        color: '#666',
    },
    taskFinished: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    dotsButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;