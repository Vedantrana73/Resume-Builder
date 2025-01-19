import React, { useState } from 'react';
import { BiKey, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(email === '' || password === '') {
      setErrorMessage('Please fill all the fields');
      setTimeout(() => {  
        setErrorMessage('');
      }, 3000);
      return;
    }
    const details = JSON.parse(localStorage.getItem("AuthDetails"))||[];
    const user = details.find((detail) => detail.email === email);
    if(user){
      if(user.password === password)
      {
        setSuccessMessage("Login Successful");
        setTimeout(() => {
          navigate('/');
          setSuccessMessage('');
        }, 2000);
      }
      else
      {
        setErrorMessage('Invalid Password');
        setTimeout(() => {
          setErrorMessage('');
        }, 3000); 
      }
    }
    else
    {
      setErrorMessage('User not found');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  }
  return (
    <div className='flex justify-center px-5'>
      <form className='space-y-6 w-full max-w-lg' onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold text-center pb-5'>Login</h1>

        <label className="input input-bordered flex items-center gap-4 w-full">
          <span className='text-xl'>
            <BiUser />
          </span>
          <input type="email" name='email' className="grow w-full" placeholder="Registered Email" autoFocus />
        </label>

        <label className="input input-bordered flex items-center gap-4 w-full">
          <span className='text-xl'>
            <BiKey />
          </span>
          <input type="password" name='password' className="grow w-full" placeholder='Password' />
        </label>

        <div className='text-lg flex justify-center space-x-1'>
          <span>Don't Have an Account? Register </span>
          <span className='text-accent font-semibold'>
            <Link to='/register'>
              Here
            </Link>
          </span>
        </div>

        <div className='flex justify-center'>
          <button type="submit" className='btn btn-outline px-7 text-lg flex'>Login</button>
        </div>
        <div>
          {errorMessage && <p className='text-red-500 text-center font-semibold'>{errorMessage}</p>}
        </div>
        <div>
          {successMessage && <p className='text-green-500 text-center font-semibold'>{successMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;
