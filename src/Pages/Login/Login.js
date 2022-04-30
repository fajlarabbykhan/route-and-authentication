import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    let errorElement;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const navigateResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter  email');
        }
    }
    return (
        <div className='container w-50 mx-auto '>
            <h2 className='text-primary text-center mt-1'>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {errorElement}
            <p className='mt-4'>New to AITA LAW,LLC ? <Link to='/register' className='text-danger cursor-pointer text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

            <p className='mt-4'>Forget Password?<button className='text-danger cursor-pointer text-decoration-none btn btn-link' onClick={navigateResetPassword}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;