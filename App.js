import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';



export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style = {styles.inputcontainer}>
       <TextInput style ={styles.textInput} placeholder='Your course goal !'/>
       <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List of  Goals..</Text>
      </View>
    

     
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
  //  margin:50,
   padding:50
  },
inputcontainer:{
  flexDirection:'row',
  justifyContent:'center'
},
textInput:{
  borderWidth:1,
  borderColor:'orange',
  width:'80%',
  marginRight:8

}

});