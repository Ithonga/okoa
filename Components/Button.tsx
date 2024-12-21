import React from 'react';
import {
    Alert,
    Button,
    Pressable,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

const App: React.FC = () => {
    const onPress = (buttonType: string) => {
        Alert.alert(buttonType);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button onPress={() => onPress('Button')} title='Button' color='#f1f1f1' />
                <Pressable
                    onPress={() => onPress('Pressable')}
                    style={({pressed}) => [
                        styles.button,
                        {
                            backgroundColor: pressed ? '#0a84ff' : '#f1f1f1',
                        },
                    ]}>
                    {({pressed}) => <Text style={styles.text}>{pressed ? 'Pressed!!' : 'Pressable'}</Text>}
                </Pressable>
                <TouchableHighlight
                    onPress={() => onPress('TouchableHighlight')}
                    underlayColor='red'
                    style={styles.button}>
                    <Text style={styles.text}>TouchableHighlight</Text>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => onPress('TouchableOpacity')} style={styles.button}>
                    <Text style={styles.text}>TouchableOpacity</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => onPress('TouchableWithoutFeedback')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
      </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#f1f1f1',
    },
    text: {
        color: '#000',
    },
});