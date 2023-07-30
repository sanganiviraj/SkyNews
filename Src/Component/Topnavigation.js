import React, { useContext } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon, { Icons } from "../Constatnt/Icons";
import { Newscontext } from "../Apis/Context";
 
const Topnavigation= ({index,setindex}) => {

    const {fetchnews} = useContext(Newscontext)
    return(
        <View style={[styles.container,{backgroundColor:'9067C6'}]}> 
        {
            index === 0 ? (
                <TouchableOpacity style={styles.left}>
                    <Icon type={Icons.MaterialCommunityIcons} name='theme-light-dark' size={24} color='white'/>
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.left} 
                onPress={() => {setindex(index===0 ? 1 : 0)}}
                >
                    <Icon type={Icons.FontAwesome5} name='backward' color='white' size={15} />
                    <Text style={[styles.text,{color:'white'}]}>
                        Discover
                    </Text>
                </TouchableOpacity>
            )

        }

            <Text style={[styles.center,{color:'white'}]}>
            {index ? "All News" : "Discover"}
            </Text>

        {
            index ? (
                <TouchableOpacity style={styles.right} onPress={()=> fetchnews('general')}>
                    
                        <Icon type={Icons.AntDesign} name='reload1' size={24} color='white'/>
        
                </TouchableOpacity>
            ):(
                <TouchableOpacity style={styles.right} onPress={() => setindex(index===1 ? 0 : 1)}>
                    <Text style={[styles.text,{color:'white'}]}>
                    All News
                    </Text>

                    <Icon type={Icons.SimpleLineIcons} name='arrow-right' size={15} color='white'/>

                    
                </TouchableOpacity>
            )
        }


        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop:StatusBar.currentHeight
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "#9067C6",
        borderBottomWidth: 1,
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between",
    },
    text:{
        fontSize:16,
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "700",
      },
    right: {
        width: 80,
        alignItems: "center",
        flexDirection:'row',
        justifyContent: "flex-end",
        
    },
})

export default Topnavigation;