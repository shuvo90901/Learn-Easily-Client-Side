import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='course-container mx-4'>

            {
                courses.map(course => <Course
                    key={course._id}
                    course={course}></Course>)
            }
        </div>
    );
};

export default Courses;