  
import React from 'react';
import { Text, Image, View } from 'react-native';

const DetailComponent = (props) => {

    const {title, comp, genre, synop, date, img, note} = props;

    return (
        <View>
            <Text>Titre: {title}</Text>
            <Text>Compagnie de production: {comp}</Text>
            <Text>Genre(s): {genre}</Text>
            <Text>Synopsis: {synop}</Text>
            <Text>Date de sortie: {date}</Text>
            <Text>Affiche cinéma</Text>
                <Image source={{uri: `https://image.tmdb.org/t/p/w500/${img}.jpg`}} />
            <Text>Note: {note}</Text>
            
        </View>
    )
}

export default DetailComponent;