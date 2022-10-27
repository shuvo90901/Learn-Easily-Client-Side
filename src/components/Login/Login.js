import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle, IconName } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, providerLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Your Email Address</Form.Label>
                <Form.Control className='w-50' name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter Your Password</Form.Label>
                <Form.Control className='w-50' name='password' type="password" placeholder="Password" />
            </Form.Group>
            <p>{error}</p>
            <Button variant="primary" type="submit">
                Submit
            </Button><br />
            <Button className='rounded-circle my-4 me-4' onClick={handleGoogleSignIn} variant="success"><FaGoogle></FaGoogle> </Button>
            <Button className='rounded-circle my-4' onClick={handleGithubSignIn} variant="success"><FaGithub></FaGithub> </Button>
            <p>if you are new in this website? please <Link to='/register'>Register</Link> </p>
        </Form>
    );
};

export default Login;