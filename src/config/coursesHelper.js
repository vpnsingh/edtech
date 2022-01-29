import { CREATE_TUTORIALS, UPDATE, DELETE_COURSE, DELETE_ALL_COURSE, FIND_ONE } from './apiUrl'
import axios from 'axios'

export const getAllTutorials = () => {
    return axios.get(CREATE_TUTORIALS)
}

export const createTutorials = (data) => {
    return axios.post(CREATE_TUTORIALS, data)
}

export const getSingleTutorial = (id) => {
    return axios.get(FIND_ONE+id)
}


