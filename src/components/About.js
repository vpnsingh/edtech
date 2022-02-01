import React from 'react';

const About = () => {
    return(
        <div className='container my-3'>
            <h3 className='text-center'>About us</h3>
            <hr/>
            <section className='about px-5 mt-5'>
                <h3>Changing learning for the better</h3>
                <p>
                    Whether you want to learn or to share what you know, you've come to the right place. 
                    As a global destination for online learning, we connect people through knowledge.
                </p>
                <div className='message'>
                    <p>
                        We help organizations of all types and sizes prepare for the path ahead — wherever it leads. 
                        Our curated collection of business and technical courses help companies, governments, 
                        and nonprofits go further by placing learning at the center of their strategies.
                    </p>
                </div>
            </section>
            <section className='grow bg-success p-3 text-light mt-5'>
                <h3>We just keep growing</h3>
                <p>Our global community and our course catalog get bigger every day. Check out our latest numbers</p>
                <ul className='d-flex justify-content-center list-unstyled'>
                    <li className='mx-3'>
                        <h4 className='mb-0'>10M+</h4>
                        <p>Learners</p>
                    </li>
                    <li className='mx-3'>
                        <h4 className='mb-0'>30K+</h4>
                        <p>Instructors</p>
                    </li>
                    <li className='mx-3'>
                        <h4 className='mb-0'>100K+</h4>
                        <p>Courses</p>
                    </li>
                    <li className='mx-3'>
                        <h4 className='mb-0'>100M+</h4>
                        <p>Course enrollments</p>
                    </li>
                    <li className='mx-3'>
                        <h4 className='mb-0'>10+</h4>
                        <p>Languages</p>
                    </li>
                    <li className='mx-3'>
                        <h4 className='mb-0'>1,000+</h4>
                        <p>Enterprise customers</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default About;
