import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='text-center'>
            <h5 className='pt-5 pb-3'>Name Of The Courses</h5>
            {
                courses.map(course => <div
                    key={course.id}>
                    <Link className='text-danger mt-5 pt-5'
                        style={{ textDecoration: 'none' }}
                        to={`course/${course.id}`}>
                        <h4>
                            {course.name}
                        </h4>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default RightSideNav;