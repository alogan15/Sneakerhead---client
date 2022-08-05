import axios from 'axios';

const SNEAKER_BASE_API_URL = 'http://localhost:8080/api/v1/sneakers';

export function getAllSneakers(){
    return axios.get(SNEAKER_BASE_API_URL);
}

export function createSneaker(sneaker){
    return axios.post(SNEAKER_BASE_API_URL,sneaker);
}

export function getById(id){
    return axios.get(`${SNEAKER_BASE_API_URL}/${id}`);
}

export function updateSneaker(id, sneaker){
    return axios.put(`${SNEAKER_BASE_API_URL}/${id}`, sneaker);
}

export function deleteSneaker(id){
    return axios.delete(`${SNEAKER_BASE_API_URL}/${id}`);
}
