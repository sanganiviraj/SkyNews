import React, { useContext, useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { SceneMap,TabView } from "react-native-tab-view";
import Discover from "../Newsscreens/Discover";
import Newshow from "../Newsscreens/Newshow";
import Topnavigation from "./Topnavigation";
import { Newscontext } from "../Apis/Context";
 
const Newshort= () => {
    const layoute = useWindowDimensions();
    const {index,setindex} = useContext(Newscontext );
    // const {index,setindex} = useState(1);


    const [routes] = useState([
        { key:'first', title:'discover'},
        { key:'second', title:'Newshow'}
    ])

    const renderscene = SceneMap({
        first : Discover,
        second : Newshow    
    })

    return(
       <TabView 
       navigationState = {{index,routes}}
       renderScene = {renderscene}
       onIndexChange = {setindex}
       initialLayoute = {{width : layoute.width}}
       renderTabBar={()=> <Topnavigation index={index} setindex={setindex}/>}
       />
    )
}

const styles=StyleSheet.create({
   screen:{
    backgroundColor:'pink',
    
   }
})

export default Newshort;