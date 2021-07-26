import { StatusBar } from 'expo-status-bar';
import React ,{Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
/*import {createStackNavigator} from 'react-navigation-stack';*/
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import DrawerMenu from './screens/DrawerMenu';
import MoviesScreen from './screens/MoviesScreen';
import SearchScreen from './screens/SearchScreen';
import Header from './components/Header';
import MovieDetails from './screens/MovieDetails';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { render } from 'react-dom';
const Drawer=createDrawerNavigator();
/*const Stack = createStackNavigator();*/
const Tab=createMaterialBottomTabNavigator();
export default class App extends Component {
  render(){


  return (
    <NavigationContainer>
      <View style={styles.align}><Header/></View>
      <Drawer.Navigator drawerContent={props => <DrawerMenu {...props}/>}>
      <Drawer.Screen name="Home" component={MainScreen}/>
      <Drawer.Screen name="SearchFilm" component={SearchScreen} />
      <Drawer.Screen name="Films" component={MoviesScreen}/>
      <Drawer.Screen name="Movie" component={MovieDetails}/>
      </Drawer.Navigator> 
    </NavigationContainer>
 
  
  );}
}


const styles = StyleSheet.create({
  align:{
    alignItems:'center',
    margin:30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

