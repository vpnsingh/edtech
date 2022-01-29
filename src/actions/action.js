import { ADD_TO_CART, SET_USER } from '../actions/action.types'

export const addToCart = (data) => ({
    type : ADD_TO_CART,
    payload : data    
})

export const setUser = (data) => ({
    type : SET_USER,
    payload : data    
})