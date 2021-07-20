import React from 'react'
import {showPopularMovies,API_URL} from '../components/api';
const MoviesScreen = () => {
    getMoviesByPopularity(API_URL);
}

export default MoviesScreen
