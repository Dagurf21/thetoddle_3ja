import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'

const ProgressBar = ({ tasks }) => {
    const completedTasks = tasks.filter((task) => task.isFinished).length
    const totalTasks = tasks.length
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

    return (
        <View style={styles.progressContainer}>
            <Text
                style={styles.progressText}
            >{`Progress: ${completedTasks}/${totalTasks}`}</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
        </View>
    )
}

export default ProgressBar
