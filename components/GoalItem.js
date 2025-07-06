
import { StyleSheet,View,Text,Pressable } from "react-native";
function GoalItem(props) {
 return(  
  <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>

 <View style={styles.goalItem}  >
    <Text style={styles.goalText}>{props.text}</Text>
    </View>
  </Pressable> 
 );
}
export default GoalItem;


const styles = StyleSheet.create({
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

})