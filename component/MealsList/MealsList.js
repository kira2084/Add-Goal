import { View,FlatList,StyleSheet } from "react-native";
import MealItem from "../Mealitem";


function MealList({items}){
    function renderMealItem(itemData){
        // function PressHandlerOfMealDetail(){
        //     //const mealItems=MEALS.find((item)=>item===catId).title
        //     navigation.navigate('MealDetails',{
        //         ID:catId,
                
        //     }
        //     );
        //}
        const item=itemData.item;
        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
        }
        return <MealItem {...mealItemProps} />;
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={items}
            keyExtractor={(itemdata)=>itemdata.id}
            renderItem={renderMealItem}/>
        </View>
    )
}
export default MealList;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        
    }
})