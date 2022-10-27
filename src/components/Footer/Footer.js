import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark text-warning text-center py-5 mt-5' style={{ height: '200px' }}>
            <p><small>Learn Easily Programming Language Course</small></p>
            <p>Follow Us : </p>
            <div className='d-flex justify-content-center'>
                <FaGoogle></FaGoogle>
                <FaFacebook className='mx-5'></FaFacebook>
                <FaTwitter></FaTwitter>
            </div>
        </div>
    );
};

export default Footer;