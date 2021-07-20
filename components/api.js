import React from 'react';
import {axios} from 'axios';
import { ScrollView,FlatList } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const API_KEY='api_key=0ab12e81dd7f662e1fc6962ae9e1aa92';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL+ '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const SEARCH_URL=BASE_URL+'/search/movie?'+API_KEY+'&language=en-USpage=1&include_adult=false&query=';


function getMoviesByPopularity(){
    axios.get(API_URL)
        .then(res=>res.json())
            .then(data=> {
                console.log(data.results);
                showPopularMovies(data.results);
            }
        )
        .catch(error=>{setError(true)})
        .finally(()=>{
            setLoading(false);
        })
}
const showMovies = (items)=>{
    return(
    <ScrollView>
    {items.map(movie => {
        
            <FlatList data={movie}/>
        );
    })}
    </ScrollView>
    );
}
const getSearchedMovies=(title)=>{
    axios.get(SEARCH_URL+title)
        .then(res=>res.json())
            .then(data=> {
                console.log(data.results);
                showMovies(data.results);
            }
        )
        .catch(error=>{setError(true)})
        .finally(()=>{
            setLoading(false);
        })

}
export {getSearchedMovies,getMoviesByPopularity};