import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name, photoURLRef.current.value)
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='w-50' readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control className='w-50' onChange={handleNameChange} defaultValue={name} type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control className='w-50' ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="PhotoURL" />
            </Form.Group>
            <Button variant="success" type="submit">
                Change
            </Button>
        </Form>
    );
};

export default Profile;