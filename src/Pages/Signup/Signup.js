import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../Assets/login.png';

const Signup = () => {
    return (
        <div className='w-full h-[100vh] bg-indigo-700 flex items-center'>
            <div className="w-full max-w-md p-4 rounded-md shadow-2xl sm:p-8 mx-auto bg-white">
                <img src={loginImg} alt="" className='w-[300px] h-[200px] mx-auto' />
                <h1 className="mb-3 text-4xl text-center text-indigo-700 font-bold">Welcome To TradeX</h1>
                <h2 className="mb-3 text-xl font-semibold text-center">Let's register to see your TradeX Home..</h2>
                <h2 className="text-sm text-center">Already have an account?
                    <Link to="/signin" className="focus:underline hover:underline text-green-500"> Login here</Link>
                </h2>
                <div className="flex items-center w-full my-4">
                    <div className="w-full">
                        <form onSubmit="" className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm">Your Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name here " className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email " className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" required />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" required />
                                </div>
                            </div>
                            <p className='text-red-500'>error</p>
                            <button type="submit" className="w-full px-8 py-3 font-bold rounded-md bg-green-600 hover:bg-green-700 text-white text-xl">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;