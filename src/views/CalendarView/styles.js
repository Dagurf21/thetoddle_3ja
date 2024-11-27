import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    selectedDateText: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    taskList: {
        marginTop: 16,
        flex: 1,
    },
    taskItem: {
        fontSize: 14,
        marginVertical: 4,
        padding: 8,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
    },
    noTasksText: {
        marginTop: 16,
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
});

export default styles;
