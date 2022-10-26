import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../image/programming.jpg'

const Home = () => {
    return (
        <div className='pt-5 mt-5 d-lg-flex'>
            <h5>Programming helps in speeding up the input and output processes in a machine. It is important to automate, collect, manage, calculate, and analyze the processing of data and information accurately. Programming helps create software and applications that help computer and mobile users in daily life</h5>
            <Image className='w-lg-50 ps-5' src={img}></Image>
        </div>
    );
};

export default Home;