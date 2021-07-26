import React, { Component } from 'react';
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
import {ItemMovie} from '../components/ItemMovie';
import LOUPE from '../assets/icons8-chercher-50.png';
import {getFilmsByTitle} from '../API/TMDBApi';

export const SearchScreen =(props)=>{
    const [dataList, setListData] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [result,setResult]=useState();
    const [saveSearch,setSaveSearch]=useState([]);
    const [film,setFilm] = useState("");
    useEffect( ()=>{
      setIsLoading(false);
        handleSearch();
      }
      ,[film]);
    const handleSearch = async () => {
              setIsLoading(true);
              const data = await getFilmsByTitle(film);
              setListData(data);
              setSaveSearch(data);
              setResult(data);
              console.log(data);
            }; 
  const renderSearchItem = ({item}) => (
              <MovieItem movie={item} />
            );
  const renderFooter = () => {
              return isLoading ? (
                <View style={{marginTop: 10, alignItems: 'center'}}>
                  <ActivityIndicator size="large" color="tomato" />
                </View>
              ) : null;
            };
  let Content =
            /*dataList !== null ? (*/
              <FlatList
                data={dataList}
                renderItem={(item) =>{<ItemMovie film={item}/>}}
                keyExtractor={(item) => item.key.toString();}
                showsVerticalScrollIndicator={true}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.8}
                
              />
            /*) : (*/
              
              <View>
                <Text >Not found</Text>
              </View>
           /* )*/;   
    
        return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <Image source={LOUPE} style={styles.icon}/>
            <TextInput placeholder='Rechercher Film' value={film} style={styles.text} onChangeText={(value)=>setFilm(value)}/>
            </TouchableOpacity>
           
            {Content}
            
             
        </View>
        );
    
}


export default SearchScreen
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
})
