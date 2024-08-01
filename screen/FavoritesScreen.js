import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../component/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import {View,Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


function FavoritesScreen(){
    //context
    //const FavoriteMealctx=useContext(FavoritesContext);
   // const favoriteMeals=MEALS.filter(meal=>FavoriteMealctx.ids.includes(meal.id));
    // reducer
    const FavoriteMealIds=useSelector((state)=>state.favoritesMeal.ids);
    const favoriteMeals=MEALS.filter((meals)=>FavoriteMealIds.includes(meals.id))
   
    if(favoriteMeals.length===0){
        return <View style={styles.rootConatiner}>
            <Text style={styles.text}>
                You have no favorite meals yet.
            </Text>
        </View>
    }
    return <MealList items={favoriteMeals}/>
}

export default FavoritesScreen;
const styles=StyleSheet.create({
    rootConatiner:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:'white'
    }
})