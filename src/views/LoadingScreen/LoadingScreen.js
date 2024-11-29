import React from 'react'
import styles from './styles'
import { View, Text, Button, Image } from 'react-native'

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={styles.loadingScreenContainer}>
            <Text style={styles.loadingScreenText}>
                Welcome to "The TOODLER"
            </Text>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default LoadingScreen
