import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/action';
import swal from 'sweetalert';

const Cart = () => {

    const dispatch = useDispatch()
    const cartData = useSelector(state => state.MyReducer.cart)

    const totalPrice = () => {
        let final = cartData.reduce((acc,val) => {
            return acc + val.price;
        }, 0)
        return <button className='btn btn-light float-end'>Total : {final}</button>
    }

    const removeFromCart = (id) => {
        let filteredCart = cartData.filter((item) => {
            return item._id !== id
        })
        localStorage.setItem('edtech-cart', JSON.stringify(filteredCart))
        dispatch(addToCart(filteredCart))
        swal('Tutorial removed from cart', '', 'warning') 
    }

    return(
        <div className='container my-3'>
            <h3>Your Cart</h3>
            <hr/>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th colSpan='2'>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        cartData.map((item,index) => {
                            return  <tr key={index} className='align-middle'>
                                <td>{index+1}</td>
                                <td><img src={item.image} className='img-thumbnail' width='100px'/></td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm' 
                                            onClick={() => removeFromCart(item._id)}>
                                            Remove
                                    </button>
                                </td>
                            </tr> 
                        })
                    }
                </tbody>
            </table>
            {totalPrice()}
        </div>
    )
}

export default Cart;
