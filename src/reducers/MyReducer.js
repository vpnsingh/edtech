import { ADD_TO_CART, SET_USER } from '../actions/action.types'

const initialState = {
    user : localStorage.getItem('edtech-user') != undefined ? JSON.parse(localStorage.getItem('edtech-user')) : [],
    cart : localStorage.getItem('edtech-cart') != undefined ? JSON.parse(localStorage.getItem('edtech-cart')) : []
}

export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, cart:action.payload}
        case SET_USER:    
            return {...state, user:action.payload}
        default:
            return state
    }
}