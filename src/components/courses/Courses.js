import React, { useState, useEffect } from 'react'
import { getAllTutorials } from '../../config/coursesHelper';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Courses = () => {

    const navigate = useNavigate()
    const [tutorials, setTutorials] = useState([])

    useEffect(() => {
        fetchAllCourses()
    }, [])

    const fetchAllCourses = () => {
        getAllTutorials()
        .then((res) => {
            console.log(res)
            setTutorials(res.data)
        })
        .catch((err) =>{
            console.log(err)
            swal('Error', err.response.data.message, 'error')
        })
    }

    const viewDetails = (id) => {
        navigate('/course-details/'+id)
    }

    return (
        <div className='container courses my-3'>
            <h3 className='text-center'>Courses</h3>
            <div className='row'>
                {
                    tutorials.map((tutorial,index) => {
                        return <div className='col-md-4' key={index}>
                                <div className='card'>
                                    <img class="card-img-top" src={tutorial.imageURL} alt="Card image" />
                                    <div class="card-body">
                                        <h4 class="card-title">{tutorial.title}</h4>
                                        <p className='text-muted'>{tutorial.category}</p>
                                        <p class="card-text">{tutorial.description}</p>
                                        <p className='text-success'>
                                            <span className='fw-bold'>₹{tutorial.priceAfterDiscount}</span>
                                            <s className='text-muted ps-2'>₹{tutorial.priceInRupees}</s>
                                        </p>
                                        <button class="btn btn-primary w-100" onClick={() => viewDetails(tutorial._id)}>
                                            View Details / Enroll
                                        </button>
                                    </div>
                                </div>
                            </div>
                    })
                }
            </div>
        </div>
    )
}

export default Courses;