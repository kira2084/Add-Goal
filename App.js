import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList,StyleSheet,View } from 'react-native';
import Goalitem from './component/Goalitem';
import Goalinput from './component/Goalinput';
export default function App() {
  const [courseGoal,setCourseGoal]=useState([]);
  const [modalIsVisible,setModalVisisble]=useState(false);
  function addGoalHandler(enteredGoalText){
    setCourseGoal(prevgoal=>[...prevgoal,
      {text:enteredGoalText,id:Math.random().toString()}]
    );
    setModalVisisble(false);
    
  }
  function deleteItem(id){
    setCourseGoal(currentcoursegoal=>{
      return currentcoursegoal.filter((goal)=>goal.id!==id);
    })
  }
  function startHandler(){
    setModalVisisble(true);
  }
  function endAddTask(yorn){
    setModalVisisble(yorn);
  }
  return (
    <>
    <StatusBar style='light'/>
      <View style={styles.container}>
        <Button color='#5e0acc' title='Add New Goal' onPress={startHandler}
        />
        <Goalinput 
        addGoal={addGoalHandler} 
        vis={modalIsVisible}
        onCancel={endAddTask}/>
        
        <View style={styles.goaltext}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData)=>{
            return <Goalitem 
            text={itemData.item.text}
            id={itemData.item.id}
            deleteItem={deleteItem}
            ></Goalitem>
            }}
            keyExtractor={(item,index)=>{
            return item.id;
            }}
            alwaysBounceVertical={false}
          />
          </View>
        
      </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   padding:50,
    
  },
  
  goaltext:{
    flex:4,
    
  },
  
});
