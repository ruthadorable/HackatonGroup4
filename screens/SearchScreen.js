import React, { Component,state } from 'react';
import {useState,useEffect} from 'react';
import {View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator} from 'react-native';
import Header from '../components/Header';
import {MovieItem} from '../components/MovieItem';
import LOUPE from '../assets/icons8-chercher-50.png';
import {getFilmsByTitle} from '../API/TMDBApi';
import {ItemMovie} from '../components/ItemMovie';


export function imageApi (name) {
  return 'https://image.tmdb.org/t/p/w300/' + name
}
const SearchScreen =()=>{
      
      const [recherche,setRecherche]=useState("");
      const [dataSource,setDataSource]=useState("");
      const [liste,setListe]=useState([]);
      const [isLoading,setIsLoading]=useState(false);

      useEffect(()=>
      {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=0ab12e81dd7f662e1fc6962ae9e1aa92&language=fr&query='+recherche)
        .then((response)=> response.json())
        .then((responseJson)=>{
            setDataSource(responseJson.results);
            setIsLoading(true);
            console.log(responseJson.results);
            return responseJson.results;
        })
        .then((result) => {
          console.log(result.[0].title);
          setListe(result);
          setIsLoading(false);
      })
        .catch((error)=>console.log(error));
      },[recherche])
  

    
   
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <Image source={LOUPE} style={styles.icon}/>
            <TextInput placeholder='Rechercher Film' value={recherche} style={styles.text} onChangeText={(value)=>{setRecherche(value)}} />
            </TouchableOpacity>
           
          
                {liste===null || liste ===undefined ? 
                <View><Text style="styles.title_text">Not found</Text> </View>:(
                  isLoading?<ActivityIndicator/>:
      
              <FlatList
                data={liste}
                renderItem={(film,id) =>{
                  return (
                    <View style={styles.main_container}>
                        <Image style={styles.image}
                                source={{uri: imageApi(film.item.poster_path)}}/>
                        <View style={styles.content_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>Titre: {film.item.title} </Text>  
                            <Text style={styles.vote_text}>Votes: {film.item.vote_average} </Text>  
                        </View>
                        <View style={styles.description_container}>
                            <Text>Description</Text>
                            <Text style={styles.description_text} numberOfLines={7}>
                              
                                {film.item.overview}
                            </Text>
                        </View>
                        <View style={styles.date_container}>
                            <Text style={styles.date_text}>Sorti le {film.item.release_date}
                            {console.log(film.item.release_date)}</Text>
                        </View>
                        </View>
                        
                    </View>)
                  }}
                keyExtractor={(item) => item.id}
              />
                ) 
                }
         
        </View>
        );
      
}
export default SearchScreen;
const styles = StyleSheet.create({
    align:{
        alignItems:'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    button:{
      flexDirection:'row',
      margin: 70,
      backgroundColor: "lightblue",
      borderColor: "darkblue",
      borderWidth:2,
      alignItems: 'center',
      justifyContent: 'center',
      width: 250,
      height:40,
      margin: 20,

    },
    text:{
      borderColor:'lightblue',
      borderWidth:2,
    },
    icon:{
        height:20,
        width:20,
        marginRight:20,
    },
    scrollview_container: {
      flex:1,
  },
  main_container:{
    height: 300,
    width: 500,
    flexDirection:'row',
    alignItems:'stretch',
},
image:{
    width:90,
    height: 120,
    margin:5,
    backgroundColor:'gray',
},
content_container:{
    flex:1,
    margin:5,
    alignItems:'stretch',
},
header_container:{
    flex: 3,
    flexDirection:'row',
},
title_text:{
    fontWeight:'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
},
vote_text:{
    fontWeight:'bold',
    fontSize:26,
    color:'#666666',
},
desription_container:{
    flex:7,
},
description_text:{
    fontStyle:'italic',
    color:'#666666',
},
date_container:{
    flex:1,
},
date_text:{
    textAlign: 'right',
    fontSize: 14,
}
})
