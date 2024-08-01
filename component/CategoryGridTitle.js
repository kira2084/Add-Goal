import { Pressable, View,Text,StyleSheet,Platform } from "react-native";


function CategoryGridTitle({title,color,onPressed}){
    
    return(
        <View style={styles.gridItem}>
            <Pressable
             android_ripple={{color:'#ccc'}} 
             style={({pressed})=>[
                styles.button,
                pressed?styles.buttonPressed:null
             ]}
             onPress={onPressed}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTitle;

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        elevation:4,
        height:150,
        backgroundColor:'white',
        overflow:Platform.OS==="android"? "hidden":"visible",
        borderRadius:8,
    },
    button:{
        flex:1,
         
    },
    buttonPressed:{
        opacity:0.5,
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})