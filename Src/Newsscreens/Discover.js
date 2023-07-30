import React,{useContext} from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View,ScrollView,Dimensions } from "react-native";
import { Newscontext } from "../Apis/Context";
import { categories,sources } from "../Apis/Api";
import Search from "../Component/search";

const windowWidth = Dimensions. get('window').width;
const windowHeight = Dimensions. get('window').height;

const Discover= () => {
    const {setcategory,setSource} = useContext(Newscontext);


    return(
        <View style={styles.screen}> 
            <ScrollView>

             <Search />

            <Text style={[styles.subtitle,{color:'white'}]}> Categories </Text>
            
            <FlatList 
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity style={styles.box} onPress={()=> setcategory(item.name)}> 
                        <Image style={styles.img} source={{uri:item.pic}}/>
                        <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>    
                )
            }}
            />

            {/* <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            {
                sources.map((item) => {
                    return(
                        <View style={styles.container}>

                        </View>
                    )
                })
            }
            </View> */}

            
            {/* <FlatList 
                data={sources}
                contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
                renderItem={({item}) => {
                    return(
                        <View style={styles.container}>
                                
                        </View>
                    )
                }}
            /> */}
            <Text style={[styles.subtitle,{color:'white'}]}> Sources </Text>

            <View style={styles.sources}>
            {sources.map((s) => (
                <TouchableOpacity
                    onPress={() => setSource(s.id)}
                    key={s.id}
                    style={styles.sourceContainer}
                >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>

            
            </ScrollView>

        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        // backgroundColor:'pink'
    },
    subtitle:{
        fontSize:24,
        fontWeight:'bold',
        paddingBottom:8,
        marginHorizontal:5,
        borderBottomColor:'#007FFF',
        alignSelf:'flex-start',
        borderBottomWidth: 5,
        borderRadius:20,
        marginTop:20
    },
    box:{
        width:120,
        height:120,
        marginHorizontal:5,
        marginVertical:20,
        alignItems:'center'
    },
    img:{
        width:100,
        height:100,
        borderRadius:12,
        alignSelf:'center'
    },
    title:{
        fontSize:18,
        alignSelf:'center',
        fontWeight:'500',
        color:'white'
    },
    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15,
    },
    sourceContainer: {
        height: 150,
        width: "40%",
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#cc313d",
    },
      sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
      },
    
    
})

export default Discover;