import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const { courseId } = useParams()

    return (
        <div className='cotainer course-details my-3'>
            <h3 className='text-center'>Course Details</h3>
        </div>
    )
}

export default CourseDetails