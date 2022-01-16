import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { doLogout } from '../config/authenticationHelper';

const Header = () => {

    const [userData, setUserData] = useState({
        username : '',
        userid : '',
        isLoggedIn : false
    })
    const navigate = useNavigate()

    const { username, userid, isLoggedIn } = userData

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('edtech-user'))
        if(userData !=  undefined){
            setUserData({
                ...userData, 
                username: userData.firstName+" "+userData.lastName,
                userid : userData.id, 
                isLoggedIn : userData.isLoggedIn
            })
        }
    }, [])

    const logout = () => {
        let req = {
            "id" : userid
        }
        doLogout(req)
        .then((res) => {
            console.log('success response for logout : ', res.data)
            localStorage.clear()
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
                <a className="navbar-brand fw-bold" href="#">EdTech</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto my-2 my-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About us</a>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        {   
                            isLoggedIn ? 
                                <div className='d-flex align-items-center fw-bold text-light'>
                                    <p className='mb-0'>Hello, {username}</p>
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
