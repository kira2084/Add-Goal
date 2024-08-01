

import MealList from "../component/MealsList/MealsList";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import { useEffect,useLayoutEffect } from "react";
function MealsOverviewScreen({route,navigation}){
    const catId=route.params.categoryId;//categoryId is sent by 'CategoriesScreen' when we navigation.navigate throught it we can send data required for next screen and it accesees using route.params.'given name'
    const displayedMeals=MEALS.filter((mealitem)=>{
        return mealitem.categoryIds.indexOf(catId)>=0;
    })
    //we don't use useEffect becos if image load but there is slow in rendering title so if we use useLayoutEffect it get simulation
    useLayoutEffect(()=>{
        const categorytitle=CATEGORIES.find((category)=>category.id===catId).title;
       
        navigation.setOptions({
            title:categorytitle
            
        })//using setOptions becos option are able get only in<stack.screen/> and only setoptions way to set anything in anywhere
    },[catId,navigation])
   
    return <MealList items={displayedMeals}/>
}

export default MealsOverviewScreen;

