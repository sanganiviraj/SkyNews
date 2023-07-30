import React from "react";
import { StatusBar, StyleSheet, Text, View,Dimensions,Image, ImageBackground, TouchableOpacity, ScrollView, Linking,ActivityIndicator } from "react-native";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Singlenews= ({item,index,loading}) => {
    return(
        <View style={{flex:1,backgroundColor:'#282C35'}} key={index}>
        {loading ? <Image source={{ uri: item.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }} />
        : <View style={{flex:1}}> 
            <ActivityIndicator size="large" /> 
         </View>
        }

        <ScrollView >
        <View style={[styles.description,{backgroundColor:'#282C35'}]}>
            <Text style={[styles.text,{color:'white'}]}>{item.title}</Text>

            <Text style={[styles.content,{color:'white'}]}>{item.description}</Text>

            <Text style={[styles.author,{color:'white'}]}> Short by <Text style={{fontSize:14,fontWeight:400,color:'white'}}>
                {
                    item.author ?? 'Unknown'
                }    
            </Text>
            </Text>
        </View>
        </ScrollView>

            <ImageBackground 
            blurRadius={30}
            style={styles.footer}
            source={{uri: item.urlToImage}}
            >
                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <Text style={{ fontSize: 15, color: "white" }}>
                        '{item?.content?.slice(0, 45)}...'
                    </Text>
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
                        Read More
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 10,
        
    },
    description: {
        padding: 15,
        height:'100%'
        
        
    },
    content: { fontSize: 18, paddingBottom: 10 },
    author:{
        fontWeight:700,
        fontSize:14
    },
    footer: {
        height: 80,
        width: windowWidth,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#d7be69",
        justifyContent: "center",
        paddingHorizontal: 20,
      },
})

export default Singlenews;