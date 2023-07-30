import React,{ createContext, useEffect, useState } from "react";
import { getNewsAPI ,getSourceAPI} from "./Api";
import axios from "axios";

export const Newscontext = createContext();

const Context = (props) => {
    const [news,setnews] = useState([]);
    const [category,setcategory] = useState("general");
    const [loading,setloading] = useState(false);
    const [index , setindex] = useState(1);
    const [source,setSource] = useState();


    const fetchnews = async(reset = category) => {
        try{
            const {data} = await axios.get(getNewsAPI(reset));
            setnews(data);      
            setindex(1)
            setloading(true)
            // console.log(data);
        }catch(error){
            console.log(error);
            setloading(false)
        }
      
    }

    const fetchNewsfromSource = async () => {
        try {
          const { data } = await axios.get(getSourceAPI(source));
          setnews(data);
          setindex(1);
          setloading(true)
        } catch (error) {
          console.log(error);
          setloading(false)
        }
      };

    

    useEffect(() => {
        fetchnews();
    },[category])

    useEffect(() => {
        fetchNewsfromSource();
    },[source])


    return(
        <Newscontext.Provider value={{news,index,setindex,fetchnews,setcategory,loading,setSource}}>
            {/* {Children} */}
            {props.children}
        </Newscontext.Provider>
    )
}

export default Context;