import { useNavigation } from "@react-navigation/native";
import { View ,Text, Pressable,Image,StyleSheet, Platform} from "react-native";
import MealDetails from "./MealDetails";

function MealItem({id,title,imageUrl,duration,complexity,affordability}){
    const navigation=useNavigation()//this give same all feature as how we pass from stack.screen
    function selectMealItemHandler(){
        navigation.navigate('MealDetails',{
            MealId:id,
            
        });
    }
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
            style={({pressed})=> pressed?styles.buttonPressed:null}
            onPress={selectMealItemHandler}>
                <View style={styles.innercontainer}>
                    <View>
                        <Image source={{uri:imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View >
                        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                    </View>
                </View>
            </Pressable>
            
        </View>
    )
}
export default MealItem; 
const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:Platform.OS==='android'? 'hidden':'visible',
        backgroundColor:'white',
        elevation:4,
    },
    innercontainer:{
        borderRadius:8,
        overflow:'hidden',
    },
    buttonPressed:{
        opacity:0.5,
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        margin:8,

    },
    
})