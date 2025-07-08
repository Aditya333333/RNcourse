import { useState } from 'react';
import { StyleSheet, View, TextInput, Button,Modal,Image } from 'react-native';


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
        <Modal visible ={props.visible} animationType='slide'>
        <View style={styles.inputcontainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
            <TextInput style={styles.textInput} placeholder='Your course goal !' 
            onChangeText={goalInputHandler} 
             value={enteredGoalText}
            />
           
            <View style={styles.ButtonContainer}>
                <View style={styles.button}>

            <Button title='Add Goal' onPress={addGoalHandler} color="purple"/>
                </View>
                <View style={styles.button}>

            <Button title='Cancel'onPress={props.onCancel} color="red"/>
                </View>

            </View>
        </View>
        </Modal>
    );
}

export default GaolInput;
const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
       
        justifyContent: 'center',
        alignItems: 'center',
    
        padding:16,
       backgroundColor:'#6b7db3'

    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        borderRadius:6,
        width: '100%',
        color:'black',
        padding:16,

    },
    ButtonContainer:{
         flexDirection: 'row',
         marginTop:16

    },
    image:{
        width:100,
height:100,
margin:8
    },
    button:{
        width:'30%',
        marginHorizontal:14,
    }

})