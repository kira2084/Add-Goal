
import { StatusBar, StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screen/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screen/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import {store} from './store/redux/store'
//import {useNavigation} from '@react-navigation/native';
const Stack=createNativeStackNavigator();//Stack.Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
  const Drawer=createDrawerNavigator();
  function DrawerNavigator(){
    return <Drawer.Navigator screenOptions={
      {headerStyle:{backgroundColor:"#351401"},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:"#3f2f25"},
      drawerContentStyle:{backgroundColor:"#351401"},
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1'

    }
    }>
        <Drawer.Screen name='Categories' component={CategoriesScreen}
        options={{
          title:"All Categories",
          drawerIcon:({color,size})=><Ionicons name="list" color={color} size={size}/>
        }}/>
        <Drawer.Screen name='Favorite' component={FavoritesScreen}
        options={{
          drawerIcon:({color,size})=><Ionicons name="star" color={color} size={size}/>
        }}/>
    </Drawer.Navigator>;
  }
export default function App() {
  //const navigation=useNavigation();//even we use this type to send navigation which screen to show alternative even it's screen or not
  
  return (
    // "<NavigationContainer>" we wrap becos Notify state changes for screen tracking, state persistence etc and
    //Handle system back button on Android by using the BackHandler API from React Native.
    <>
      <StatusBar style="light" />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={
          {headerStyle:{backgroundColor:"#351401"},
          headerTintColor:'white',
          contentStyle:{backgroundColor:'#3f2f25'},}
        }>
          <Stack.Screen 
          name='MealsCategories' 
          component={DrawerNavigator}
          options={{
            headerShown:false,
            
          }} />
          <Stack.Screen name='MealsOverview' 
          component={MealsOverviewScreen}
          options={({route,navigation})=>{
            const catId=route.params.categoryId;
            return{
              title:catId
            }
          }}/>
          <Stack.Screen name='MealDetails' component={MealDetailScreen} options={{
            title:"About the Meal"
          }}/>
         
        </Stack.Navigator>
        
      </NavigationContainer>
      </Provider>
     { /*</FavoritesContextProvider>*/}
    </>
    // options={{
    //   headerRight:()=>{
    //     return <Button title='Tap Me'/>
    //   }
    // }}//to add at header means where we go back from one screen to other
        
      
    
  );
}

const styles = StyleSheet.create({
 screen:{
   margin:100,
   alignItems:'center'
 }
  
});
