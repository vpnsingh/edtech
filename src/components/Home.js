import React from 'react'
import Banner from '../assets/images/banner.png'
import AngularImg from '../assets/images/angular_logo.png'
import ReactImg from '../assets/images/react_logo.png'
import PythonImg from '../assets/images/python_logo.png'

const Home = () => {
    return (
        <div className='home-section'>
            <div className='home-banner border-bottom border-success'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <img className='img-fluid' src={Banner} />
                        </div>
                        <div className='col-md-5 d-flex justify-content-start align-items-center'>
                            <div className='content'>
                                <h1 className='text-success'>Discover a limitless world of learning</h1>
                                <p>Review important concepts and explore new topics—the options are endless with EdTech !!!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-content'>
                <div className='container mt-3'>
                    <h3 className='text-center fw-bold edtech-text-primary my-4 fst-italic'>Trending Courses</h3>
                    <div className='row justify-content-center'>
                        {/* Angular */}
                        <div className='col-md-4'>
                            <div className="card h-100">
                                <img className="card-img-top home-card-img" src={AngularImg} alt="Angular" />
                                <div className="card-body">
                                    <h4 className="card-title">Angular - The Complete Guide</h4>
                                    <p className='text-start text-muted'>
                                        Master Angular 13 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js
                                    </p>
                                    <hr/>
                                    <p className="card-text d-flex justify-content-around fw-bold">
                                        <span className='text-dark'>Price : ₹ 525</span> 
                                        <span className='text-warning'>Rating : 4.5</span>
                                    </p>
                                    <div className='btn-group d-flex justify-content-center'>
                                        <button className='btn btn-outline-primary'>Add to cart</button>
                                        <button className='btn btn-outline-success'>Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* React */}
                        <div className='col-md-4'>
                            <div className="card h-100">
                                <img className="card-img-top home-card-img" src={ReactImg} alt="React" />
                                <div className="card-body">
                                    <h4 className="card-title">React JS - The Complete Guide</h4>
                                    <p className='text-start text-muted'>
                                        Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!
                                    </p>
                                    <hr/>
                                    <p className="card-text d-flex justify-content-around fw-bold">
                                        <span className='text-dark'>Price : ₹ 525</span> 
                                        <span className='text-warning'>Rating : 4.6</span>
                                    </p>
                                    <div className='btn-group d-flex justify-content-center'>
                                        <button className='btn btn-outline-primary'>Add to cart</button>
                                        <button className='btn btn-outline-success'>Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Python */}
                        <div className='col-md-4'>
                            <div className="card h-100">
                                <img className="card-img-top home-card-img" src={PythonImg} alt="React" />
                                <div className="card-body">
                                    <h4 className="card-title">Learn Python Programming Masterclass</h4>
                                    <p className='text-start text-muted'>
                                        This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3
                                    </p>
                                    <hr/>
                                    <p className="card-text d-flex justify-content-around fw-bold">
                                        <span className='text-dark'>Price : ₹ 650</span> 
                                        <span className='text-warning'>Rating : 4.6</span>
                                    </p>
                                    <div className='btn-group d-flex justify-content-center'>
                                        <button className='btn btn-outline-primary'>Add to cart</button>
                                        <button className='btn btn-outline-success'>Enroll Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='footer bg-dark mt-5 text-light p-3'>
                <footer>
                    <h3>Top companies choose <span className='text-success'>EdTech Business</span> to build in-demand career skills.</h3>
                    <p>&copy; {new Date().getFullYear()} EdTech, Inc.</p>
                </footer>
            </div>
        </div>
        
    )
}

export default Home;