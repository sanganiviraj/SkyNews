import React,{useContext,useState} from 'react';
import {View,StyleSheet,TextInput,TouchableOpacity,Text,Modal,Dimensions} from 'react-native';
import { Newscontext } from '../Apis/Context';
import Icon, { Icons } from '../Constatnt/Icons';
import Singlenews from './singlenews';

const windowWidth = Dimensions. get('window').width;

const Search = () => {
    const {news:{articles} } = useContext(Newscontext);
    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handlesearch = (text) =>{
        if(!text){
            setSearchResults([])
            return;
        }

        setSearchResults(articles.filter((query) => query.title.includes(text)));
    }

    const handleModal = (item) => {
        setModalVisible(true);
        setCurrentNews(item);
    };

    return(
        <View style={{ width: "100%", position: "relative" }}>

            <View style={[styles.search,{backgroundColor:'black',color:'white'}]}>
            
            <Icon type={Icons.FontAwesome} name='search' color='grey' size={20}/>
            <TextInput 
            style={{marginLeft:5,width:'90%',color:'white'}}
            onChangeText={(text) => handlesearch(text)}
            placeholder="Search for news"
            placeholderTextColor='grey'

            />
            </View>

            <View style={styles.searchResults}>
                {
                    searchResults.slice(0,10).map((item) =>{
                        return(
                            <TouchableOpacity
                            key={item.title}
                            activeOpacity={0.7}
                            onPress={() => handleModal(item)}
                            >
                                <Text style={[styles.singleResult,{backgroundColor:'black',color:'white'}]}>
                                    {item.title}

                                </Text>

                            </TouchableOpacity>
                        )
                    })
                }

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >        
            
            <TouchableOpacity
                onPress={() =>
                     {setModalVisible(!modalVisible)}
                     }
                style={{
                    position: "absolute",
                    zIndex: 1,
                    right: 0,
                    margin: 20,
                    
                }}
            >
                <Icon type={Icons.Entypo} name="circle-with-cross" size={30} color="black" />

            </TouchableOpacity>
            
            <View style={{height:'100%'}}>
                <Singlenews item={currentNews} />
            </View>


             </Modal>
        </View>
    )
}

const styles= StyleSheet.create({
    search: {
        // paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15,
        marginTop:20,
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
      },
      searchResults: {
        position: "absolute",
        zIndex: 1,
        top: 70,
        alignSelf:'center'
        
      },
      singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        shadowColor: "black",
        elevation: 5,
        alignSelf:'center',
        width:(windowWidth*95)/100,
        // marginHorizontal:10
        
      },
})

export default Search;