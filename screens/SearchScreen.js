import React from 'react';
import {useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Button,StyleSheet,Image,TextInput} from 'react-native';
import Header from '../components/Header'
import LOUPE from '../assets/icons8-chercher-50.png';


const SearchScreen = (props) => {
    const [film,setFilm]=useState("");
    useEffect(()=>{
        console.log({film});
    });
    return (


        <View style={styles.container}>
            <TouchableOpacity style={styles.button} >
                <Image source={LOUPE} style={styles.icon}/>
            <TextInput placeholder='Rechercher Film' value={film} style={styles.text} onChangeText={(value)=>setFilm(value)}/>
            </TouchableOpacity>
        </View>

    )
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

    }

});
