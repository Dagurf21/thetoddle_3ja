import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ProgressBar = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.isFinished).length;
    const totalTasks = tasks.length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <View style={styles.container}>
            <Text style={styles.progressText}>{`Progress: ${completedTasks}/${totalTasks}`}</Text>
            <View style={styles.progressBar}>
                <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
        </View>
    );
};

export default ProgressBar;
