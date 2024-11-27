import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    loadingScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingScreenText: {
        fontSize: 30,
        fontWeight: 'bold',
        // marginBottom: 20
    },
    logo: {
        width: 600,
        height: 200,
        // resizeMode: 'cover',
        margin: 10,
    }
});

export default styles;