import { StyleSheet,View,TextInput,Button, Modal,Image } from "react-native"
import { useState } from "react";
function Goalinput(props){
    const  [enteredGoalText,setEnteredText]=useState('');
    function goalInputHandler(enteredText){
        setEnteredText(enteredText);
       
      }
      function addGoalHandler(){
        
        props.addGoal(enteredGoalText);
        setEnteredText("");
      }
      function endcancel(){
        setEnteredText("");
        props.onCancel(false);
      }
    return(
      <Modal visible={props.vis} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require("../assets/images/goal.jpg")}/>
          <TextInput style={styles.textinput} placeholder=' enter goal' onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
          <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler} />
            <View style={styles.twobtn}>
              
              <Button title='Cancel' onPress={endcancel} />
            </View>
           
          </View>
          
        </View>
     </Modal>
    )
}
const styles=StyleSheet.create({
    inputContainer:{
      flex:1,
      paddingTop:190,
      padding:8,
      backgroundColor:'#311b6b',
      
    },
    image:{
      width:100,
      height:100,
      margin:20,
      marginLeft:127,
      borderRadius:60,
    },
    textinput:{
      borderColor:'#cccccc',
      borderWidth:1,
      marginRight:8,
      padding:8,
      color:'white',
    },
    button:{
      flexDirection:'col',
      padding:8,
      margin:8,
      justifyContent:'space-evenly'
    },
      twobtn:{
       marginTop:16,
      }
})

export default Goalinput;