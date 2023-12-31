import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useEffect } from 'react';

const Register = () => {
    const { createUser, updateUserProfiles, googleUser, githubUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const pathname = location.state?.from?.pathname || '/'
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        
        setError('')

        if (password.length < 6) {
            setError('Password must be 6 character or Above')
            return;
        }

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                
                updateUserProfiles(name,photoUrl)
                form.reset()
                navigate(pathname)


            })
            .catch(error => {
                setError(error.message)
            })

        // console.log(name, email, password, photoUrl);

    }
    const handleGoogle = () => {
        googleUser()
            .then(result => {
                // console.log(result.user);
                navigate(pathname)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithub = () => { 
        githubUser()
            .then(result => {
                // console.log(result.user);
                navigate(pathname)

            })
            .catch(error => {
                console.log(error);
            })
    }

    // const 
    return (

        <div className='w-[80%] mx-auto'>
            <Navbar color={'black'}></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col mt-6">
                    <div className="">
                        <h1 className="text-5xl font-bold my-6">Register now!</h1>
                    </div>
                    <ToastContainer></ToastContainer>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name here" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' required placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' required type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='text-error'>{error}</p>

                            <p>Already have an account? <Link className='btn btn-link' to='/login'>Login</Link></p>
                        </form>
                        <button onClick={handleGoogle} className='btn btn-outline my-2'> <FaGoogle></FaGoogle>  <span className='ml-4'>Google</span></button>
                        <button onClick={handleGithub} className='btn btn-outline'> <FaGithub></FaGithub> <span className='ml-4'>Github</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;