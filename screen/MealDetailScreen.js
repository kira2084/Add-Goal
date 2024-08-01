import List from "../component/MealDetail/List";
import Subtitle from "../component/MealDetail/Subtitle";
import MealDetails from "../component/MealDetails";
import { MEALS } from "../data/dummy-data";
import { View,Text,Image,StyleSheet, ScrollView, Button } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../component/IconButton";
import { useDispatch, useSelector } from "react-redux";
//import { FavoritesContext } from "../store/context/favorites-context";
import {addFavorite,removeFavorite} from '../store/redux/favorites';

function MealDetailScreen({route,navigation}){
    
    // const id=route.params.ID
    // useEffect(()=>{
    //     const mealTitle=route.params.title;
    //     navigation.setOptions({
    //         title:mealTitle
    //     })
    // })
    //const favoriteMealctx=useContext(FavoritesContext);
    //console.log(favoriteMealctx)
    const favoriteMealIds=useSelector((state)=>state.favoritesMeal.ids);
    const dispatch=useDispatch();
    const MealID=route.params.MealId
    const selectedMeal=MEALS.find((meal)=>meal.id===MealID);
    //const favoriteMealIdSelected=favoriteMealctx.ids.includes(MealID);
    const favoriteMealIdSelectedReducer=favoriteMealIds.includes(MealID);
    function checkMealISIncluded(){
        //if(favoriteMealIdSelected)
        if(favoriteMealIdSelectedReducer){
            //favoriteMealctx.removeFavorite(MealID);
            dispatch(removeFavorite({id:MealID}));
        }else{
           // favoriteMealctx.addFavorite(MealID);
           dispatch(addFavorite({id:MealID}));
        }
    }
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                // <IconButton icon={favoriteMealIdSelected?"star":"star-outline"} 
                // color="white" 
                // onPress={checkMealISIncluded} /> //using context
                return <IconButton icon={favoriteMealIdSelectedReducer?"star":"star-outline"} 
                color="white" 
                onPress={checkMealISIncluded} />
            }
        });
    },[navigation,checkMealISIncluded])
    return(
        <ScrollView>
        <View style={styles.rootContainer}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} style={styles.subtitle} textStyle={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}
export default MealDetailScreen;
const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:30,
    },
    image:{
        width:'90%',
        height:200,
       margin:20,
       borderRadius:20,
      
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white'
    },
    listOuterContainer:{
        alignItems:'center'
    },
    listContainer:{
        width:'80%',
    }
   
})