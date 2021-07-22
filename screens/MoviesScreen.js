import React from 'react'
import { View,StyleSheet,TouchableOpacity,ActivityIndicator } from 'react-native';
import {getFilmByPopularity} from '../API/TMDBApi';
const MoviesScreen = () => {

    return(
        <View>
            {getFilmByPopularity}
        </View>
    );
}

export default MoviesScreen
