import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginImage from '../../assets/images/login.png';


const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://tour-znrn.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.token) {
        console.log('response', result);

        // ✅ Save token to localStorage
        localStorage.setItem('token', result.token);

        alert('Login successful');
        setIsLoggedIn(true); // Update login state
        navigate('/');       // Redirect to home
      } else {
        setErrorMessage(result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-3/4 max-w-4xl bg-white shadow-lg rounded-lg">
        
        {/* Left Side: Illustration */}
        <div className="w-1/2 p-6 bg-orange-100 rounded-l-lg flex items-center justify-center">
          <img
            src={loginImage}
            alt="Illustration"
            className="w-full"
          />
        </div>
        
        {/* Right Side: Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Login
            </button>

            {errorMessage && (
              <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
            )}

            <p className="mt-4 text-center text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="underline text-orange-500">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
