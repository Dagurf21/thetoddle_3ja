import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the App!</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default LoadingScreen;
