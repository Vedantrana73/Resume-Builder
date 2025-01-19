import React, { useEffect, useState } from 'react';
import { BiEnvelope, BiKey } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearMessages, registerUser, setErrorMessage } from '../feature/auth/authSlice';
import emailjs from 'emailjs-com';  // Make sure to import emailjs

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage, successMessage, registerationStatus } = useSelector((state) => state.auth);
  
  const handleSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    event.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      dispatch(setErrorMessage("All fields are required"));
      setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
      return;
    }

    if (password !== confirmPassword) {
      dispatch(setErrorMessage("Passwords do not match"));
      setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
      return;
    }

    // Dispatch registration action
    dispatch(registerUser({ email, password }));
  };

  useEffect(() => {
    if (registerationStatus === 'success') {
      // Send OTP email after registration success
      const templateParams = {
        name: 'New User',
        otp: '123456',  // Replace with dynamic OTP generation logic
        toEmail: 'hansagohil9@gmail.com',  // Dynamic recipient email
      };

      // Send email via EmailJS
      emailjs.send(
        'service_z2dscef',  // Your service ID
        'template_52i85wh',  // Your template ID
        templateParams,      // Dynamic parameters (e.g., name, otp, toEmail)
        'XxUA-ZSyjdLvU6QBr' // Your user ID from EmailJS
      ).then(
        (response) => {
          console.log('Email Sent!', response.status, response.text);
        },
        (error) => {
          console.log('Failed to send email', error);
        }
      );

      // After sending OTP email, navigate to login
      setTimeout(() => {
        dispatch(clearMessages());
        navigate('/login');
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(clearMessages());
      }, 3000);
    }
  }, [registerationStatus, dispatch, navigate]);

  return (
    <div>
      <form className='flex flex-col items-center space-y-6' onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold text-center pb-5'>Register</h1>

        <label className="input input-bordered flex items-center gap-4 w-full md:max-w-md">
          <span className='text-xl'>
            <BiEnvelope />
          </span>
          <input type="email" name="email" className="grow w-full" placeholder="Email" />
        </label>

        <label className="input input-bordered flex items-center gap-4 w-full md:max-w-md">
          <span className='text-xl'>
            <BiKey />
          </span>
          <input type="password" name="password" className="grow w-full" placeholder='Password' />
        </label>

        <label className="input input-bordered flex items-center gap-4 w-full md:max-w-md">
          <span className='text-xl'>
            <BiKey />
          </span>
          <input type="password" name="confirmPassword" className="grow w-full" placeholder='Confirm Password' />
        </label>

        <div className='text-lg'>
          <span>Already have an account? Login </span>
          <span className='text-accent font-semibold'>
            <Link to='/login'>
              Here
            </Link>
          </span>
        </div>

        <div>
          <button type="submit" className='btn btn-outline px-7 text-lg flex'>Register</button>
        </div>
        <div>
          {errorMessage && <p className='text-red-500 font-semibold'>{errorMessage}</p>}
        </div>
        <div>
          {successMessage && <p className='text-green-500 font-semibold'>{successMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default Register;
