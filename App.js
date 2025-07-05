// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Button,TextInput,ScrollView} from 'react-native';



export default function App() {
   const [enteredGoalText,setEnteredGoalText] = useState('');
   const [courseGoal,setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
   setEnteredGoalText(enteredText)
  }
   function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,enteredGoalText]);
    
   }
  return (
    <View style={styles.appcontainer}>
      <View style = {styles.inputcontainer}>
       <TextInput style ={styles.textInput} placeholder='Your course goal !' onChangeText={goalInputHandler}/>
       <Button  title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <ScrollView>
        {courseGoal.map((goal) => (
          <View key={goal} style={styles.goalItem }  >
        <Text style ={styles.goalText}>{goal}</Text>
        </View>
        ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
  flex:1,
   paddingTop:50,
   paddingHorizontal:16,
  },
inputcontainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginBottom:14,
  borderBottomWidth:1,
  borderBottomColor:'#cccccc',

},
textInput:{
  borderWidth:1,
  borderColor:'#cccccc',
  width:'70%',
  marginRight:8

},
goalsContainer:{
 flex:9
},
goalItem:{
  margin:8,
  padding:8,
  backgroundColor:'#27104e',
  color:'white',
  borderRadius:8
},
goalItem:{
  margin:8,
  padding:8,
  backgroundColor:'purple',
  borderRadius:8
},
goalText:{
  color:'white'
}

});