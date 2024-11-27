import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styleviews';

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={styles.loadingScreencontainer}>
            <Text style={styles.loadingScreenText}>Welcome to the App!</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};


export default LoadingScreen;
