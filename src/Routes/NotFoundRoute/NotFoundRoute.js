import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../image/download.jpg'

const NotFoundRoute = () => {
    return (
        <div className='p-5'>
            <h5>OOPS...The Page Is Not Found</h5>
            <h5>Please Provide A Correct Route OR Go to <Link to='/'>HomePage</Link> </h5>
            <Image className='w-50' src={img}></Image>
        </div>
    );
};

export default NotFoundRoute;