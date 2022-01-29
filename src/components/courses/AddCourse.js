import React,  { useState } from 'react'
import swal from 'sweetalert'
import { createTutorials } from '../../config/coursesHelper'

const AddCourse = () => {

    const [course, setCourse] = useState({
        title : '',
        description : '',
        skills : '',
        chapters : '',
        published : true,
        category : '',
        priceInRupees : '',
        priceAfterDiscount : ''
    })

    const { title, description, skills, chapters, published, category, priceInRupees, priceAfterDiscount } = course

    const handleInputs = keyname => event => {
        setCourse({...course, [keyname] : event.target.value})
    }

    const postCourse = (e) => {
        e.preventDefault()
        console.log(course)
        createTutorials(course)
        .then((res) => {
            console.log(res.data)
            swal('Tutorials Successfully Added !!', '', 'success')
            setCourse({
                title:'', description:'', skills: '', category: '', published:'', chapters:'', 
                priceAfterDiscount: '', priceInRupees: ''
            })
        })
        .catch(err => {
            console.log(err.response)
            swal('Error', err.response.data.message, 'error')
        })
    }

    return (
        <div className='container add-course my-3'>
            <h4 className='text-start'>Add Course</h4>
            <form onSubmit={postCourse}>
                <div className='row justify-content-end'>
                    <div className='col-md-12'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                                onChange={handleInputs('title')} value={title} />
                            <label htmlFor="floatingInput">Course Title</label>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Add Description" id="floatingTextarea"
                                onChange={handleInputs('description')} value={description}></textarea>
                            <label for="floatingTextarea">Description</label>
                        </div>                    
                    </div>
                    <div className='col-md-12'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Enter Skills"
                                onChange={handleInputs('skills')} value={skills} />
                            <label htmlFor="floatingInput">Skills</label>
                        </div>    
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Chapters of Course"
                                onChange={handleInputs('chapters')} value={chapters} />
                            <label htmlFor="floatingInput">Chapters</label>
                        </div>                    
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Category"
                                onChange={handleInputs('category')} value={category} />
                            <label htmlFor="floatingInput">Category</label>
                        </div>                    
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Price In Rupees"
                                onChange={handleInputs('priceInRupees')} value={priceInRupees} />
                            <label htmlFor="floatingInput">Price In Rupees</label>
                        </div>                
                    </div>
                    <div className='col-md-6'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Price After Discount"
                                onChange={handleInputs('priceAfterDiscount')} value={priceAfterDiscount} />
                            <label htmlFor="floatingInput">Price After Discount</label>
                        </div>
                    </div>
                    <div className='col-md-6 my-3'>
                        <button type='submit' className='btn btn-success w-100'>ADD +</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCourse;