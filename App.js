import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList,Button,Image } from 'react-native';

import GoalItem from './components/GoalItem';
import GaolInput from './components/GoalInput';


export default function App() {
  const [modalIsVisiable,setModalIsVisiable] = useState(false)
  const [courseGoal, setCourseGoals] = useState([]);

function startAddGoalHandler() {
  setModalIsVisiable(true);
}

function endAddGoalHandler() {
  setModalIsVisiable(false);
}


  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() },
  ]);
  endAddGoalHandler()

  }
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal) =>goal.id !==id)
    })
    
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appcontainer}>
      <Button title='Add New Goal' color= "#271044" onPress={startAddGoalHandler}/>

     {modalIsVisiable && <GaolInput visiable = {modalIsVisiable}
      onAddGoal={addGoalHandler}
      onCancel = {endAddGoalHandler}
      />}
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
        </>
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