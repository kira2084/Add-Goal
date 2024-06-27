import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';


function WelcomeScreen() {
  const [fetchMessage,setFetchedMessage]=useState();

  const authctx=useContext(AuthContext);
  const token=authctx.token;
  useEffect(()=>{
    axios.get('https://user-auth-3dc1a-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth='+token).then((response)=>{
      setFetchedMessage(response.data)
    })
     
    
    },[token])
  return (
    
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
      
    
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
 
});