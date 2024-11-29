import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window') // Get the screen width

const styles = StyleSheet.create({
    loadingScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingScreenText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: width * 0.9,
        height: width * 0.99 * 0.43, // Maintain aspect ratio (assuming the original aspect ratio is 600x200)
        margin: 10,
    },
})

export default styles
