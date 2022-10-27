import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, providerLogin, updateUserprofile } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleUpdateProfile(name, photoURL)
                navigate('/login')
            })
            .catch(error => console.error(error))
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserprofile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Name</Form.Label>
                <Form.Control className='w-50' name='name' type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Email address</Form.Label>
                <Form.Control className='w-50' name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter PhotoURL</Form.Label>
                <Form.Control className='w-50' name='photoURL' type="text" placeholder="Enter photoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Your Password</Form.Label>
                <Form.Control className='w-50' name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button><br />
            <Button className='my-4 me-4 rounded-circle' onClick={handleGoogleSignIn} variant="success"><FaGoogle></FaGoogle> </Button>
            <Button className='my-4 rounded-circle' onClick={handleGithubSignIn} variant="success"><FaGithub></FaGithub> </Button>
            <p>you have an account? Please <Link to='/login'>Login</Link> </p>
        </Form >
    );
};

export default Register;