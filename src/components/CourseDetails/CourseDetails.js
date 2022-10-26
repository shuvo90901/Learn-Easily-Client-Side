import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FaStar, FaStarHalf } from "react-icons/fa";

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, img, title, rating, enrolled } = course;
    console.log(course)
    return (
        <div className='bg-info rounded-lg p-3 text-center'>
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
            <p> {title}</p>
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

        </div>
    );
};

export default CourseDetails;