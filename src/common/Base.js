import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'

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
                        <Route path="/signup" element={<Signup/>}></Route>
                        <Route path="/signin" element={<Signin/>}></Route>
                    </Routes>
                </section>
            </Router>
        </main>
   )
}

export default Base;