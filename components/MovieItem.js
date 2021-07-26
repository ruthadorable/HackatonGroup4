import React, {useState} from 'react';
import {
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions,
  Platform,Modal
} from 'react-native';
import {useTheme} from 'react-native-paper';

import Genres from './Genres';
import {MovieModal} from './MovieModal';
import Rating from './Rating';
import {ReleaseDate} from './ReleaseDate';

const {width} = Dimensions.get('window');
const ITEM_SIZE = width * 0.45;

const MovieItem = (props) => {
  const [modalMovieData, setModalMovieData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalMovieData({});
    setModalVisible(false);
  };
  const {movie} = props;
  const {colors} = useTheme();

  const handlePress = () => {
    setModalMovieData(movie);
    setModalVisible(true);
  };
  return (
    <View>
      <TouchableHighlight
        onPress={handlePress}
        style={{
          width: ITEM_SIZE,
          margin: 8,
          borderRadius: 20,
        }}>
        <View style={[styles.movieCard, {backgroundColor: colors.background}]}>
          <Image
            resizeMode="cover"
            style={styles.posterImage}
            source={{uri: singleData.poster}}
          />
          <View style={{position: 'absolute', right: 5, bottom: 10}}>
            <ReleaseDate label={movie.releaseDate?.slice(0, 4)} />
          </View>
          <View>
              <Text>{movie.title}</Text>
          </View>
          <View>
            <Rating rating={movie.rating} />
          </View>
          <View style={{position: 'absolute', left: 5, top: 5}}>
            <Genres genres={movie.genres} />
          </View>
        </View>
      </TouchableHighlight>
      <MovieModal
        showModal={modalVisible}
        movieData={modalMovieData}
        onClose={handleModalClose}
        category={category}
      />
    </View>
  );
};

export {MovieItem};

const styles = StyleSheet.create({
  movieCard: {
    // backgroundColor: 'white',
    borderRadius: 20,
    position: 'relative',
    elevation: 8,
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.3,
    resizeMode: 'cover',
    borderRadius: 20,
    margin: 0,
    marginBottom: -35,
    position: 'relative',
  },
});