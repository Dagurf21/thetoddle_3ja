import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        alignItems: 'center',
    },
    progressText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    progressBar: {
        height: 10,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: '#4caf50',
    },
});
