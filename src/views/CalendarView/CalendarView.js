import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Calendar } from 'react-native-calendars'
import styles from './styles'
import { useDataContext } from '../../services/DataContext'

const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState('')
    const { getTasksByDate, getMarkedDates } = useDataContext()

    const markedDates = {
        ...getMarkedDates(),
        [selectedDate]: { selected: true, selectedColor: 'blue' },
    }

    const tasksForSelectedDate = getTasksByDate(selectedDate)

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString)
    }

    return (
        <View style={styles.container}>
            <Calendar onDayPress={handleDayPress} markedDates={markedDates} />
            <View style={styles.taskList}>
                {selectedDate ? (
                    <>
                        <Text style={styles.selectedDateText}>
                            Tasks for {selectedDate}:
                        </Text>
                        {tasksForSelectedDate.length > 0 ? (
                            <FlatList
                                data={tasksForSelectedDate}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <Text style={styles.taskItem}>
                                        - {item.name}{' '}
                                        {item.isFinished ? '(Completed)' : ''}
                                    </Text>
                                )}
                            />
                        ) : (
                            <Text style={styles.noTasksText}>
                                No tasks for this date.
                            </Text>
                        )}
                    </>
                ) : (
                    <Text style={styles.selectedDateText}>
                        Select a date to see tasks
                    </Text>
                )}
            </View>
        </View>
    )
}

export default CalendarView
