import { FlatList } from "react-native";

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from "../component/CategoryGridTitle";

function CategoriesScreen({navigation}){
    function renderCategory(itemData){
        function PressHandler(){
            //name provided in stack.scrren that one used here
            navigation.navigate('MealsOverview',{
                categoryId:itemData.item.id,
                title:itemData.item.title,
            });
        }
        return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPressed={PressHandler}/>
    }
    //"navigation" provided by react in Stack.screen
    return(
        <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item)=>item.id} 
        renderItem={renderCategory} 
        numColumns={2} 
        />
    )
}
export default CategoriesScreen; 