import React from 'react'
import UserPic from '../assets/images/user.png'
import { useSelector } from 'react-redux'

const Profile = () => {

    const user = useSelector(state => state.MyReducer.user)
    return (
        <div className='container my-3'>
            <h3 className='text-center'>Profile Section</h3>
            <br/>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="card text-center" >
                        <div className="card-body">
                            <img className='rounded-circle' src={UserPic} />
                            <h5 className="card-title">{user.firstName + user.lastName}</h5>
                            <p className="card-text">{user.email}</p>
                            <a className="btn btn-primary">{user.role}</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 border'>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item py-3 d-flex justify-content-between">
                            <span className='fw-bold'>User ID</span>
                            <span>{user.id}</span>
                        </li>
                        <li className="list-group-item py-3 d-flex justify-content-between">
                            <span className='fw-bold'>First Name</span>
                            <span>{user.firstName}</span>
                        </li>
                        <li className="list-group-item py-3 d-flex justify-content-between">
                            <span className='fw-bold'>Last Name</span>
                            <span>{user.lastName}</span>
                        </li>
                        <li className="list-group-item py-3 d-flex justify-content-between">
                            <span className='fw-bold'>Email ID</span>
                            <span>{user.email}</span>
                        </li>
                        <li className="list-group-item py-3 d-flex justify-content-between">
                            <span className='fw-bold'>User Type</span>
                            <span>{user.role}</span>
                        </li>
                    </ul>
                    <button className='btn btn-secondary mt-4 float-end'>Update Information</button>
                </div>
            </div>
        </div>
    )
}

export default Profile