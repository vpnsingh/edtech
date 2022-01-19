import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Profile from '../components/Profile'
import Courses from '../components/courses/Courses'
import AddCourse from '../components/courses/AddCourse'
import CourseDetails from '../components/courses/CourseDetails'
import PageNotFound from '../components/PageNotFound';

const Base = () => {
    return (
        <main>
            <Router>
                <header>
                    <Header />
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/courses" element={<Courses/>}></Route>
                        <Route path="/course-details/:courseId" element={<CourseDetails/>}></Route>
                        <Route path="/addcourse" element={<AddCourse/>}></Route>
                        <Route path="/profile" element={<Profile/>}></Route>
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/signin" element={<Signin/>}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </section>
            </Router>
        </main>
   )
}

export default Base;