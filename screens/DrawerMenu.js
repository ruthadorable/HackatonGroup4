import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import FILM from "../assets/icons8-film-50.png";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableHighlight,
    TouchableRipple,
    Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerMenu = (props) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>

                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                            source={FILM}
                            size={50}/>
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Hackaton Movie App</Title>
                                <Caption style={styles.caption}>Fait par Ruth Ann, </Caption>
                                <Caption style={styles.caption}>         Isaac, </Caption>
                                <Caption style={styles.caption}>         Stefan </Caption>
                            </View>

                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color,size})=>(
                    <Icon name="exit-to-app" color={color} size={size}/>
                )}
                label="Sign Out"
                onPress={()=>{}}
                />


            </Drawer.Section>

        </View>
    )
}
const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight: 'bold',
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
    },
    row:{
        marginTop:20,
        flexDirection: 'row',
        alignItems:'center',
    },
    section:{
        flexDirection: 'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight:3,
    },
    bottonDrawerSection :{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1,
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
export default DrawerMenu;
