import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#f8f9fa', // Neutral background
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden', // Ensure the stripe stays within the border radius
    },
    colorStripe: {
        width: 10, // Stripe width for the flag
        height: '100%', // Extend the stripe to the full height of the box
    },
    listContent: {
        flex: 1, // Allow the text to fill the remaining space
        padding: 16, // Add padding around the text
    },
    listName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    optionsButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionsText: {
        fontSize: 18,
        color: '#666',
    },
});

export default styles;