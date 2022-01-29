import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import UserPic from '../assets/images/user.png'

const AdminSidebar = () => {
    return(
        <aside>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success mt-2 h-100">
                <p className="fs-4 mb-0">Courses Action</p>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/admin/dashboard" className="nav-link text-white">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/admin/dashboard/addcourse" className="nav-link text-white">Add Course</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/admin/dashboard/" className="nav-link text-white">Update Course</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/admin/dashboard/" className="nav-link text-white">Delete Course</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/admin/dashboard/" className="nav-link text-white">Categories</Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none">
                        <img src={UserPic} alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Vipin Singh</strong>
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default AdminSidebar;