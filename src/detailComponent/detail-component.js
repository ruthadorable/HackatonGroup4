  
import React from 'react';
import { Text, Image, View } from 'react-native';

const DetailComponent = (props) => {

    const {title, comp, genre, synop, date, img, note} = props;

    return (
        <View style={style.mainLayout}>
            <View style={style.infoLayout}>
                <Text style={style.title}>Titre: {title}</Text>
                <Text style={style.info}>Compagnie(s) de production: {comp}</Text>
                <Text style={style.info}>Genre(s): {genre}</Text>
                <Text style={style.synop}>Synopsis: {synop}</Text>
                <Text style={style.info}>Date de sortie: {date}</Text>
                <Text>Affiche cinéma</Text>
                    <Image style={style.imgFilm} 
                    source={{uri: `https://image.tmdb.org/t/p/w500/${img}.jpg`}} />
                <Text style={style.info}>Note: {note}</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    mainLayout : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoLayout: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18
    },
    info: {
        fontSize:14
    },
    synop: {
        fontSize:12
    },
    imgFilm : {
        width: 75, 
        height: 100,
        borderColor: '#000',
        borderWidth: 1, 
        borderRadius: 20
    }
})


export default DetailComponent;