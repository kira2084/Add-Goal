import {StyleSheet,View,Text, Pressable} from 'react-native'

function Goalitem(props){


    return(
      
        <View style={styles.listgoal}>
          <Pressable android_ripple={{color:'green'}} onPress={props.deleteItem.bind(this,props.id)}>
          <Text style={styles.insidelist}>{props.text}</Text>
          </Pressable>
        </View>
       
    
    )
}

const styles=StyleSheet.create({
    listgoal:{
        margin:8,
        
        fontSize:20,
        borderRadius:6,
        color:'white',
        backgroundColor:'#5e0acc',
        
        
      },
      insidelist:{
        color:'white',
        paddingLeft:6,
        paddingTop:8,
        padding:8,
      }
})
export default Goalitem;