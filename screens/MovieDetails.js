import React,{Component} from 'react'
import { StyleSheet,View,ActivityIndicator} from 'react-native'

export class MovieDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             film: undefined,
             isLoading:true
        }
    }
    _displayLoading(){
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
    }
    
    render() {
        return (
            <View styles={styles.main_container}>
                {(this.state.isLoading)?(this._displayLoading):(null)}
            </View>
        )
    }
}

export default MovieDetails

const styles = StyleSheet.create({
    main_container:{
        flex:1
    },
    loading_container:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent:'center',
    }
    
});