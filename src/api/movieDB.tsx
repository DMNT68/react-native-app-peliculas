import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b4d7b2f96975b7a123279ac7a8ea1762',
    language: 'es-ES',
  },
});

export default movieDB;
