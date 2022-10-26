import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FaStar, FaStarHalf } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();


const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, img, title, rating, enrolled } = course;
    console.log(course)
    return (
        <div ref={ref} className='my-5 bg-info rounded-lg p-3 text-center'>
            <div className='d-flex justify-content-center'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Image
                        onClick={toPdf}
                        style={{ height: '35px' }}
                        roundedCircle
                        src={img}></Image>}
                </Pdf>
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
            <Link to={`/course/${id}/checkout`}> <button className="btn btn-primary">Get Premium Access</button></Link>
        </div>
    );
};

export default CourseDetails;