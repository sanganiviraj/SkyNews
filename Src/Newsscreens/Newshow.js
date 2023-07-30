import React, { useContext, useState } from "react";
import { StatusBar, StyleSheet, View,Text, FlatList,Image,ActivityIndicator } from "react-native";
import { Newscontext } from "../Apis/Context";
import Singlenews from "../Component/singlenews";
// import Carousel from "react-native-snap-carousel"

// import Carousel, { Pagination } from 'react-native-snap-carousel';

 
const Newshow= () => {
    const { news:{articles},loading }=useContext(Newscontext);
    const [viewheight,setheight] = useState(null);
    // const [loading,setloading] = useState(false);
    // const [data,setdata] = useState(articles)

    // console.log('====================================');
    // console.log(articles);
    // console.log('====================================');

    // console.log(datas);



    return(
        <View style={styles.screen} onLayout={e => setheight(e.nativeEvent.layout.height)}> 
           { loading ?  <FlatList 
                data={articles.slice(0,20)}
                pagingEnabled
                keyExtractor={(item) => item}
                decelerationRate='fast'
                renderItem={({ item,index }) => ( 
                    <View style={[styles.item, { height: viewheight }]} > 
                        
                        <Singlenews  item={item} index={index} loading={loading}/>

                    </View>
                )}
            /> : <View style={{flex:1,justifyContent:'center'}}> 
            <ActivityIndicator size="large" /> 
            </View>}

        
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        // marginTop:StatusBar.currentHeight
    },
    item: {
        backgroundColor: '#282C35'
    },
    img: {
        height: '100%',
        width: '100%'
    }
})

export default Newshow;