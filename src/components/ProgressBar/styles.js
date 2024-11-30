import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    progressContainer: {
        marginVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center', // Center align text and bar
    },
    progressText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    progressBar: {
        height: 12, // Adjust height for better visibility
        width: '100%',
        backgroundColor: '#e0e0e0', // Light gray background
        borderRadius: 6, // Rounded corners
        overflow: 'hidden', // Ensure progress is clipped within bar
    },
    progress: {
        height: '100%',
        backgroundColor: '#4caf50', // Green for progress
    },
})

export default styles
