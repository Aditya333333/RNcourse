import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


function GaolInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
       props.onAddGoal(enteredGoalText);
       setEnteredGoalText(''); 
    }

    return (
        <View style={styles.inputcontainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal !' onChangeText={goalInputHandler} 
             value={enteredGoalText}
            />
           
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    );
}

export default GaolInput;
const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8

    }

})