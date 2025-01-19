import React, { useState } from 'react';
import { BiEnvelope, BiKey } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) =>{

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    event.preventDefault();
    if(email === '' || password === '' || confirmPassword === ''){
      setErrorMessage("Please fill all the fields first");
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    if(password !== confirmPassword){
      setErrorMessage("Passwords do not match");
      setTimeout(() => {  
        setErrorMessage('');
      }, 3000);
      return;
    }
    const details = JSON.parse(localStorage.getItem("AuthDetails"))||[];

    const emailExists = details.some((detail) => detail.email === email);
    if(emailExists){
      setErrorMessage("Email already exists");
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
      return;
    }

    details.push({email: email, password: password});
    
    localStorage.setItem("AuthDetails", JSON.stringify(details));

    setSuccessMessage("Registration Successful");
    event.target.email.value = '';  
    event.target.password.value = '';
    event.target.confirmPassword.value = '';
    
    setTimeout(() => {
      navigate('/login');
      setSuccessMessage("");
    }, 3000);
  }
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
          <input type="password" name = "password" className="grow w-full" placeholder='Password' />
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
          { errorMessage && <p className='text-red-500 font-semibold'>{errorMessage}</p> }
        </div>
      </form>
    </div>
  );
}

export default Register;
