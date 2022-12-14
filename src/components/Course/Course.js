import React from 'react';
import { Image } from 'react-bootstrap';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, img, rating, enrolled } = course;
    console.log(course)
    return (
        <div className='bg-info rounded-lg py-3 text-center'>
            <div className='d-flex justify-content-center'>
                <Image
                    style={{ height: '35px' }}
                    roundedCircle
                    src={img}></Image>
                <h4>{name}</h4>
            </div>
            <div className=''>
                <Image className='w-50 mx-auto' src={img}></Image>
            </div>
            <div className='d-flex justify-content-around text-success'>
                <p className='d-flex align-items-center '>{rating}
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalf></FaStarHalf>
                </p>
                <p>Enrolled : {enrolled}</p>
            </div>
            <Link to={`/course/${id}`}>
                <button className='btn btn-primary'>Details Course of  {name}</button>
            </Link>
        </div>
    );
};

export default Course;