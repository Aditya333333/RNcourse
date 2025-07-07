
import { StyleSheet,View,Text,Pressable } from "react-native";

function GoalItem(props) {
 return(  
   <View style={styles.goalItem}  >
   <Pressable  android_ripple={{color:'#210644'}} 
   onPress={props.onDeleteItem.bind(this,props.id)}
  style={({pressed}) =>pressed && styles.pressedItem}
  >
    <Text style={styles.goalText}>{props.text}</Text>
  </Pressable> 
    </View>
 );
}
export default GoalItem;


const styles = StyleSheet.create({
 goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#271044',
    color: 'white',
    borderRadius: 8
  },
  pressedItem:{
    opacity:0.5
  },
  goalItem: {
    margin: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  goalText: {
    padding: 8,
    color: 'white',
    borderRadius: 8,
  }

})