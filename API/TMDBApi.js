import React from 'react';
import {axios} from 'axios';
import { ScrollView,FlatList } from 'react-native';
const API_KEY='api_key=0ab12e81dd7f662e1fc6962ae9e1aa92';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL=BASE_URL+ '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const SEARCH_URL=BASE_URL+'/search/movie?'+API_KEY+'&language=en-USpage=1&include_adult=false&query=';


export function getFilmsByTitle(film){
    return fetch('https://api.themoviedb.org/3/search/movie?'+API_KEY+'&language=fr&query='+film)
    .then((response)=>response.json())
    .then((responseJson)=>responseJson.Object)
    .catch((error)=>console.log(error));
}
 
export function getFilmDetailsById(id){
    return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getFilmByPopularity(page){
    
        const url = "https://api.themoviedb.org/3/movie/popular?page="+page+"&language=fr&api_key="+ API_KEY
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => responseJson.results)
        .catch((error) => console.error(error))  
}


export function filmRecentsApi(page) {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page="+page+"&language=fr&api_key="+API_KEY

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .catch((error) => console.error(error))
}