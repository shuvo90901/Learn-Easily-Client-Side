import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Image } from 'react-bootstrap';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, img, price } = course
    console.log(course)
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between bg-info opacity-75 rounded p-3 my-5'>
                <Image style={{ height: '100px' }} src={img}></Image>
                <div>
                    <h4 className='ms-3'>{name}</h4>
                </div>
                <p className='fw-bold'>Price : ${price}</p>
                <Button variant='success'>Buy this</Button>
            </div>
        </div>
    );
};

export default CheckOut;