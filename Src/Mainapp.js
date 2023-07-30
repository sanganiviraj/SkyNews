import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Newshort from "./Component/Newshort";
import Context from "./Apis/Context";
 

console.disableYellowBox = true
const MainApp= () => {
    
    return(
        <View style={[styles.screen,{backgroundColor:'#261F46'}]}> 
            <Newshort/>
        </View>
    )
}


const styles=StyleSheet.create({
    screen:{
        flex:1,
        
    },
 
})


 export default () => {
    return(
        <Context>
            <MainApp/>
        </Context>
    );
}

// export default np;