import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Profile from '../components/Profile'
import Courses from '../components/courses/Courses'
import AddCourse from '../components/courses/AddCourse'
import CourseDetails from '../components/courses/CourseDetails'
import PageNotFound from '../components/PageNotFound';
import AdminRoutes from '../config/AdminRoutes';
import AdminDashboard from '../components/admin/AdminDashboard';
import PrivateRoutes from '../config/PrivateRoutes';

const Base = () => {
    return (
        <main>
            <BrowserRouter>
                <header>
                    <Header />
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/courses" element={<Courses/>}></Route>
                        <Route path="/course-details/:courseId" element={<CourseDetails/>}></Route>

                        {/* Private route example */}
                        <Route path="/profile" element={
                            <PrivateRoutes>
                                <Profile></Profile>
                            </PrivateRoutes>
                        }>    
                        </Route>

                        {/* <Route path="/profile" element={<Profile/>}></Route> */}
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/signin" element={<Signin/>}></Route>

                        {/* admin route example with children routing */}
                        <Route path="/admin/dashboard" element={
                                <AdminRoutes>
                                    <AdminDashboard />
                                </AdminRoutes>
                            }>
                            <Route path="/admin/dashboard/addcourse" element={<AddCourse/>}></Route>
                        </Route>
                        
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </section>
            </BrowserRouter>
        </main>
   )
}

export default Base;