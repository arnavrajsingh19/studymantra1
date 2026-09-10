import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Ensure state.auth is defined
    const { signupData, loading } = useSelector((state) => state.auth || {});

    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }
    }, [signupData, navigate]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!signupData) return;
        
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;
        
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            {loading ? (
                <div className="text-2xl font-semibold">Loading...</div>
            ) : (
                <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center mb-4">Verify Email</h1>
                    <p className="text-gray-400 text-sm text-center mb-6">
                        A verification code has been sent to you. Enter the code below.
                    </p>
                    <form className="flex flex-col items-center space-y-4" onSubmit={handleOnSubmit}>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className="w-12 h-12 text-center text-xl text-black font-semibold bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                />
                            )}
                            containerStyle="flex space-x-2"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-25 hover:bg-yellow-50 text-black font-semibold py-2 rounded-lg transition duration-200"
                        >
                            Verify Email
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <Link to="/login" className="text-gray-400 hover:text-gray-200 text-sm">
                            ← Back to login
                        </Link>
                        <span className="mx-2 text-gray-400">|</span>
                        <button 
                            className="text-blue-400 hover:text-blue-300 text-sm"
                            onClick={() => dispatch(sendOtp(signupData?.email))}
                        >
                            Resend it
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
