import { LOGIN, SIGNUP, LOGOUT } from './apiUrl'
import axios from 'axios'

export const doLogin = (data) => {
    return axios.post(LOGIN, data)
}

export const doSignup = (data) => {
    return axios.post(SIGNUP, data)
}

export const doLogout = (id) => {
    return axios.post(LOGOUT, id)
}