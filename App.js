// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GaolInput from './components/GoalInput';


export default function App() {
  const [courseGoal, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() },

    ]);

  }
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal) =>goal.id !==id)
    })
    
  }
  return (
    <View style={styles.appcontainer}>

      <GaolInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoal} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem ={deleteGoalHandler} />;
        }}
          keyExtractor={(item, index) => {
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
  goalsContainer: {
    flex: 9
  }



});