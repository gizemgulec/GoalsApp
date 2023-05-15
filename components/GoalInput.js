import { useState } from 'react';
import {
    View, 
    TextInput, 
    Button, 
    StyleSheet, 
    Modal, 
    Image
} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        console.log('enteredText', enteredText)
      };

    function addGoalsHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                {/* <Image style={styles.image} source={require('../assets/images/goals.png')}/> */}
                <TextInput style={styles.input}
                    placeholder='Your cours goals!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalsHandler} color={"#b180f0"} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={"#f31282"}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 24,
        padding: 16,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      input: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        borderRadius: 6,
        //marginRight: 8,
        padding: 16
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
});