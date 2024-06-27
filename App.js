import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext,useEffect, useState } from 'react';
import IconButton from './components/ui/IconButton'
import AppLoading from 'expo-app-loading';
import LoadingOverlay from './components/ui/LoadingOverlay';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authctx=useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
        
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
        headerRight:({tintColor})=>(
          <IconButton icon="exit"color={tintColor} size={24} onPress={authctx.logout}/>
        )
      }}/>
    </Stack.Navigator>
  );
}

function Navigation() {
  const authctx=useContext(AuthContext);
  //console.log(authctx.isAuthenticated)
  return (
    //where we us provider we can't use context means wrapping inside <auth.provider>
    
    <NavigationContainer>
     {!authctx.isAuthenticated&&<AuthStack />}
     {authctx.isAuthenticated && <AuthenticatedStack/>}
    </NavigationContainer>
    
  );
}
function Root(){
  const [isTryingLogin,setIsTryingLogin]=useState(true);
  const authctx=useContext(AuthContext);
    useEffect(()=>{
      //this used becos at starting if we already logined and just we fetching stored token in mobile memeory ifpresnt or not only we run once at time app opened or running
      async function fetchToken(){
        const storedToken=await AsyncStorage.getItem('token');
        if(storedToken){
          authctx.authenticate(storedToken);
        }
        setIsTryingLogin(false);
      }
    fetchToken();
  },[])
  if(isTryingLogin){
    //acutal need to use return <Apploading but it is depricated/>;
    return <LoadingOverlay/>;
  }
  return <Navigation />
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
      <Root/>
      </AuthContextProvider>
    </>
  );
}