import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { doLogout } from '../config/authenticationHelper';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../actions/action';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

    const [userData, setUserData] = useState({
        username : '',
        userid : '',
        isLoggedIn : false
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // redux useSelector call for getting updated data
    const user = useSelector(state => state.MyReducer.user)
    const cartCount = useSelector(state => state.MyReducer.cart.length)

    useEffect(() => {
        if(user){
            setUserData({...userData, 
                username: user.firstName+" "+user.lastName,
                userid : user.id, 
                isLoggedIn : user.isLoggedIn
            })
        }
    }, [user])

    const logout = () => {
        let req = {
            "id" : userData.userid
        }
        doLogout(req)
        .then((res) => {
            console.log('success response for logout : ', res.data)
            localStorage.clear()
            dispatch(setUser([]))
            swal('You are successfullt logged out !!!', '', 'success')
            navigate('/signin')
        })
        .catch((err) => {
            console.log('error response for logout : ', err.response)
            swal('Error', err.response.data.message, 'error')
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fw-bold">EdTech</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/courses" className="nav-link">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link">About us</Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        {   
                            userData.isLoggedIn ? 
                                <div className='d-flex align-items-center fw-bold text-light'>
                                    <p className='mb-0'>Hello, {userData.username}</p>
                                    <Link to="/cart" className="btn btn-success position-relative py-0">
                                        <FontAwesomeIcon icon={faCartPlus} />
                                        <span className="position-absolute top-40 start-70 translate-middle badge rounded-pill bg-warning">
                                            {cartCount} <span class="visually-hidden">cart item</span>
                                        </span>
                                    </Link>
                                    <button onClick={logout} className="btn btn-danger mx-2">Logout</button>
                                </div>
                            : 
                            <div className='btn-group'>
                                <Link to="/signin" className="btn btn-success">Login</Link>
                                <Link to="/signup" className="btn btn-success">Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
