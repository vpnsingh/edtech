import React, { useState, useEffect } from 'react'
import { getSingleTutorial } from '../../config/coursesHelper';
import { useParams } from 'react-router-dom'
import swal from 'sweetalert';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/action';

const CourseDetails = () => {

    const { courseId } = useParams()
    const dispatch = useDispatch()
    const [courseData, setCourseData] = useState([])

    useEffect(() => {
        getSingleTutorial(courseId)
        .then((res) => {
            // console.log(res)
            setCourseData(res.data)
        })
        .catch((err) => {
            console.log(err)
            swal('Error', err.response.data.message, 'error')
        })
    },[courseId])

    const generateRating = () => {
        let ratingIcon = []
        for(let star=0;star<courseData.popularity;star++) {
            ratingIcon.push(<FontAwesomeIcon icon={faStar} />)
        }
        return ratingIcon
    }

    const performAddToCart = () => {
        if(localStorage.getItem('edtech-cart') != undefined){
            let cartArray = JSON.parse(localStorage.getItem('edtech-cart'))
            for(let item in cartArray){
                if(cartArray[item]._id === courseData._id){
                    swal('Already Added To Cart', '', 'warning')
                    return
                }else{
                    let obj = {_id: courseData._id, quantity : 1}
                    cartArray.push(obj)
                    localStorage.setItem('edtech-cart', JSON.stringify(cartArray))
                    dispatch(addToCart(cartArray))
                    swal('Added to cart', '', 'success') 
                }
            }
        }else{
            let cartArray = []
            let obj = {_id: courseData._id, quantity : 1}
            cartArray.push(obj)
            localStorage.setItem('edtech-cart', JSON.stringify(cartArray))
            dispatch(addToCart(cartArray))
            swal('Added to cart', '', 'success')
        }
    } 
    
    return (
        <div className='container course-details my-3'>
            <h3 className='text-center mb-3'>Course Details</h3>
            {
                courseData.title ? 
                <div className="mt-4 p-5 bg-dark text-white rounded text-start">
                    <div className='row'>
                        <div className='col-md-7'>
                            <img src={courseData.imageURL} className='img-thumbnail img-fluid' />
                            <h3 className='mt-2'>{courseData.title}</h3>
                            <p>{courseData.description}</p>
                            <div>
                                <p className='text-warning fw-bold'>
                                    <span className='badge bg-warning text-dark me-2'>Bestseller</span>
                                    {courseData.popularity} {generateRating()}
                                </p>
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>Category : {courseData.category}</p> | 
                                <p className='ms-2'>Duration : {courseData.duration} mins</p>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <section className='skills'>
                                <p><strong>Skills : </strong></p>
                                <ul className='list-group'>
                                {
                                    courseData.skills.map((skill, i) => <li className='list-group-item' key={i}>{skill}</li>)
                                }
                                </ul>
                            </section>
                            <hr/>
                            <section className='chapters'>
                                <p><strong>Course Content : </strong></p>
                                <ul className='list-group'>
                                    <li className='list-group-item'>Chapter 1</li>
                                    <li className='list-group-item'>Chapter 2</li>
                                    <li className='list-group-item'>Chapter 3</li>
                                </ul>
                            </section>
                            <section className='price-action'>
                                <h3 className='mt-5 text-center'>
                                    <span>Pay Only - </span>
                                    <span className='fw-bold'>₹{courseData.priceAfterDiscount}</span>
                                    <s className='text-muted ps-2'>₹{courseData.priceInRupees}</s>
                                </h3>
                                <div className='btn btn-group d-block mt-5'>
                                    <button className='btn btn-warning w-50' onClick={performAddToCart}>Add to cart</button>
                                    <button className='btn btn-success w-50'>Buy Now</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                : <h3 className='text-danger'>Error : Please try again : </h3>
            }
        </div>
    )
}

export default CourseDetails