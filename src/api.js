// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
});

export const fetchCharacters = (page = 1) => {
  return api.get(`people/?page=${page}`);
};

export const fetchCharacterDetails = (id) => {
  return api.get(`people/${id}`);
};