import React, { useState } from 'react';
import styles from '../styles/GlobalStyles.js';
import {
    View,
    Text,
    FlatList,
    Button,
    Image,
    TextInput,
    Modal,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import { useDataContext } from '../services/DataContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({ navigation }) => {
    const { boards, createBoard } = useDataContext();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardThumbnail, setNewBoardThumbnail] = useState('');
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [menuDimensions, setMenuDimensions] = useState({ width: 0, height: 0 });
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const handlePressOptions = (event) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPosition({ x: pageX -10, y: pageY -20 });
        setIsOptionsVisible(true);
    };

    const adjustedMenuPosition = {
        top: menuPosition.y + menuDimensions.height > screenHeight
            ? screenHeight - menuDimensions.height - 10
            : menuPosition.y,
        left: menuPosition.x + menuDimensions.width > screenWidth
            ? screenWidth - menuDimensions.width - 10
            : menuPosition.x,
    };


    const handleAddBoard = () => {
        if (!newBoardName.trim() || !newBoardThumbnail.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        const newBoard = {
            id: boards.length + 1,
            name: newBoardName,
            thumbnailPhoto: newBoardThumbnail,
        };

        createBoard(newBoard);
        setNewBoardName('');
        setNewBoardThumbnail('');
        setIsModalVisible(false);

    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.header}>Your boards</Text>

        {/*Boards*/}
            <FlatList
                data={boards}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        style={styles.boardItem}
                        onPress={() => navigation.navigate('BoardDetail', { boardId: item.id })}
                    >
                        <Image
                            source={{ uri: item.thumbnailPhoto }}
                            style={styles.thumbnail}
                        />
                {/*Board name*/}
                        <Text style={styles.boardButtonText}>{item.name}</Text>

                {/*More options*/}
                        <TouchableOpacity
                            style={styles.optionsContainer}
                            onPress={(event) => handlePressOptions(event)}>
                            <MaterialIcons
                                style={styles.threeDots}
                                name="more-vert"
                                size={32}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}

                contentContainerStyle={styles.flatListContainer}

            />

        {/*Modal for more options*/}
            <Modal
                visible={isOptionsVisible}
                transparent={true}
                animationType='none'
                onRequestClose={() => setIsOptionsVisible(false)}
            >
                <TouchableOpacity
                    style={{ flex: 1 }}>
                    {isOptionsVisible && (
                        <View
                            style={[
                                styles.optionsMenu,
                                {
                                    top: adjustedMenuPosition.top,
                                    left: adjustedMenuPosition.left,
                                },
                            ]}
                            onLayout={(event) => {
                                const { width, height } = event.nativeEvent.layout;
                                setMenuDimensions({ width, height });
                            }}
                        >
                            <TouchableOpacity onPress={() => console.log('Edit')} style={styles.menuOption}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons
                                        name="edit"
                                        size={24}
                                        color="#9E9E9E"
                                        style={{ marginRight: 8 }}
                                    />
                                    <Text style={styles.menuItemText}>Edit</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => console.log('Delete')} style={styles.menuOption}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons
                                        name="delete"
                                        size={24}
                                        color="#9E9E9E"
                                        style={{ marginRight: 8 }}
                                    />
                                    <Text style={styles.menuItemText}>Delete</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsOptionsVisible(false)} style={styles.menuOption}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons
                                        name="close"
                                        size={24}
                                        color="#9E9E9E"
                                        style={{ marginRight: 8 }}
                                    />
                                    <Text style={styles.menuItemText}>Close</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    )}
                </TouchableOpacity>
            </Modal>

            <View style={styles.line} />

        {/*Create new board*/}
            <TouchableOpacity
                title="Create New Board"
                onPress={() => setIsModalVisible(true)}>
                <MaterialIcons
                    style={styles.createBoardButton}
                    name="add"
                    size={32}
                    color="#818181"
                />
            </TouchableOpacity>


        {/* Modal for creating a new board */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="none"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.createHeader}>
                            Create New Board
                        </Text>
                        <TextInput
                            placeholder="Board Name"
                            placeholderTextColor={'#C4C4C4'}
                            style={styles.input}
                            value={newBoardName}
                            onChangeText={setNewBoardName}
                        />
                        <TextInput
                            placeholder="Thumbnail URL"
                            placeholderTextColor={'#C4C4C4'}
                            style={styles.input}
                            value={newBoardThumbnail}
                            onChangeText={setNewBoardThumbnail}
                        />
                        <View style={styles.createButtons}>
                            <Button title="Cancel" onPress={() => setIsModalVisible(false)} color='#818181'/>
                            <Button title="Create" onPress={handleAddBoard} color='#818181' />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};


export default HomeScreen;
