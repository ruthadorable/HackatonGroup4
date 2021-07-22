import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SEARCH from '../assets/icons8-chercher-50.png';
import Header from '../components/Header';

const MainScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
   
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <TouchableOpacity onPress={() => navigation.navigate("SearchFilm")}>
        <View style={styles.button}>
            <Text>Chercher film</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Films")}>
        <View style={styles.button}>
            <Text style={styles.text}>Films populaires</Text>
        </View>
        </TouchableOpacity>
      </View>
      
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    align:{
        alignItems:'center',
    },
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
   
  },
  button:{
    
    alignItems: 'center', 
    justifyContent: 'center',
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
      flexDirection: 'row',
  }
});