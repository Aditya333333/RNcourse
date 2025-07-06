// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';



export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoal, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() },

    ]);

  }
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal !' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList data={courseGoal} renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}  >
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id
        }}
          alwaysBounceVertical={false}
        />




      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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

  },
  goalsContainer: {
    flex: 9
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#27104e',
    color: 'white',
    borderRadius: 8
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: 'purple',
    borderRadius: 8
  },
  goalText: {
    color: 'white'
  }

});