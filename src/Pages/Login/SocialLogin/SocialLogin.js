import React from 'react';
import GoogleLogo from '../../../Images/google.svg'
import gittto from '../../../Images/github.svg'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorElement;
    if (error1 || error2) {

        errorElement = <div>
            <p>Error: {error1?.message} {error2?.message}</p>
        </div>
    }
    if (loading1 || loading2) {
        return <p>Loading...</p>;
    }
    if (user1 || user2) {
        navigate(from, { replace: true })
    }


    return (
        <div>
            <div className='container d-flex align-items-center mx-auto'>
                <div className='bg-success w-50 ' style={{ height: '1px' }}></div>
                <p className='mt-3 p-2'>OR</p>
                <div className='bg-success w-50 ' style={{ height: '1px' }}></div>

            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-40 d-block mx-auto'><img src={GoogleLogo} alt="" /> <span>Continue With Google</span></button>
            </div>
            <div className='mt-1'>
                <button

                    onClick={() => signInWithGithub()}
                    className='btn btn-primary w-40 d-block mx-auto'><img style={{ width: '31px' }} src={gittto} alt="" /> <span>Continue With GitHub</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;