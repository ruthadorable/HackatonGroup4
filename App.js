import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
/*import {createStackNavigator} from 'react-navigation-stack';*/
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import DrawerMenu from './screens/DrawerMenu';
import MoviesScreen from './screens/MoviesScreen';
import SearchScreen from './screens/SearchScreen';
import Header from './components/Header';

const Drawer=createDrawerNavigator();
/*const Stack = createStackNavigator();*/

const App=()=> {
  return (
    <NavigationContainer>
      <View style={styles.align}><Header/></View>
      <Drawer.Navigator drawerContent={props => <DrawerMenu {...props}/>}>
      <Drawer.Screen name="Home" component={MainScreen}/>
      <Drawer.Screen name="SearchFilm" component={SearchScreen} />
      <Drawer.Screen name="Films" component={MoviesScreen}/>
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
export default App;

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

