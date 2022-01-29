import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminSidebar from '../../common/AdminSidebar'
import AddCourse from '../courses/AddCourse'

const AdminDashboard = () => {
    return (
        <div className='admin-dashboard container-fluid'>
            <div className='row'>
                <div className='col-md-3 col-sm-4'> 
                    <AdminSidebar />
                </div>
                <div className='col-md-9 col-sm-8'>
                    <h3 className='text-center my-3'>Admin Dashboard</h3> 
                    <section className='h-100'>
                        <Routes>
                            <Route path="/addcourse" element={<AddCourse />} />    
                        </Routes>
                    </section>  
                </div>
            </div>           
        </div>
    )
}

export default AdminDashboard