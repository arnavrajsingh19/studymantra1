import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch=useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken())
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            {loading ? (
                <div className="text-2xl font-semibold">Loading...</div>
            ) : (
                <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        {!emailSent ? "Reset Your Password" : "Check Your Email"}
                    </h1>
                    <p className="text-gray-400 text-sm text-center mb-6">
                        {!emailSent
                            ? "Have no fear. We’ll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                            : `We have sent the reset email to ${email}`}
                    </p>
                    <form className="space-y-4" onSubmit={handleOnSubmit}>
                        {!emailSent && (
                            <div>
                                <label className="text-gray-300 block mb-1 text-sm">Email Address*</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-yellow-50 hover:bg-yellow-200 text-black font-semibold py-2 rounded-lg transition duration-200"
                        >
                            {!emailSent ? "Reset Password" : "Resend Email"}
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <Link to="/login" className="text-gray-400 hover:text-gray-200 text-sm">
                            ← Back to login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
