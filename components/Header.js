import React from 'react';
import {View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MENU from '../assets/icons8-menu-arrondi-48.png';
import DrawerMenu from '../screens/DrawerMenu';


const directTo=()=>{
    const Drawer=createDrawerNavigator();
    return(
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props}/>}></Drawer.Navigator>}
    </NavigationContainer>)
}
const Header =(props)=>{
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={directTo}>
                <View>
                    <Image source={MENU} style={styles.logo}/>
                </View>
            </TouchableOpacity>
            <Text style={styles.title} >Hackaton Movie</Text>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container:{flex:1,
        flexDirection:"row",
        margin: 10,
        height: 40,
    },
    title:{
        fontSize:26,
        fontWeight: 'bold',
        height:50,
        width:250,
        alignItems:'center',
    },
    logo:{
        alignItems:'flex-start',
        height:50,
        width:50,
        marginLeft: 15,
        marginRight:10,
    }

});
