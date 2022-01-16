import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { doSignup } from '../config/authenticationHelper'

const Signup = () => {

    const navigate = useNavigate()
    const [signupDetails, setSignupDetails] = useState({
        firstName: '',
        lastName: '',
        email : '',
        password : '',
        role : 'user'
    })

    const { firstName, lastName, email, password, role } = signupDetails

    const handleChange = name => event => {
        setSignupDetails({...signupDetails, [name] : event.target.value})
    }

    const submitSignup = (e) => {
        e.preventDefault()
        if(firstName == '' || lastName == '' || email == '' || password == '' || role == ''){
            swal("Please fill all the fields !!!", '', 'warning')
            return
        }
        console.log(signupDetails)
        let req = {
            "firstName" : firstName,
            "lastName" : lastName,
            "email" : email,
            "password" : password,
            "role" : role
        }
        doSignup(req)
        .then((res) => {
            console.log('signup success response : ', res)
            swal({
                title:'Congratulations !!!',
                text: 'Your account is created with EdTech',
                icon: 'success',
                dangerMode: true,
              })
              .then(isCreated => {
                if (isCreated) {
                    navigate('/signin')
                }
              })
        })
        .catch((err) => {
            console.log('signup error response : ', err.response)
            swal('Error', err.response.data.message, 'error')
            setSignupDetails({
                firstName: '',
                lastName : '',
                email : '',
                password : '',
                role : ''
            })
        })
    }
    
    return (
        <div className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><b>Sign Up For Your EdTech Account!</b></h5><br/>
                            <form onSubmit={submitSignup}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="firstname" placeholder="First Name"
                                        onChange={handleChange("firstName")} value={firstName} />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="lastname" placeholder="Last Name"
                                        onChange={handleChange("lastName")} value={lastName} />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Employee Email" 
                                        onChange={handleChange("email")} value={email} />
                                    <label htmlFor="email">Email ID</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter your password"
                                        onChange={handleChange("password")} value={password} />
                                    <label htmlFor="pwd">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <select className="form-select" id="usertype" onChange={handleChange("role")} value={role}>
                                        <option value='user'>USER</option>
                                        <option value='admin'>ADMIN</option>
                                    </select>
                                    <label htmlFor="usertype" className="form-label">Select User Type</label>
                                </div>
                                <div className='mt-4'>
                                    <button type='submit' className='btn btn-success w-100'>Register</button>
                                </div>
                                <div className="text-center mt-2">
                                    <p className="text-muted mb-0">Already registered&nbsp;
                                        <Link to="/signin"><a>Please do login</a></Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;