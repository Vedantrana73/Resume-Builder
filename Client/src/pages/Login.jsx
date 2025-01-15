import React from 'react';
import { BiKey, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='flex justify-center px-5'>
      <form className='space-y-6 w-full max-w-lg'>
        <h1 className='text-3xl font-bold text-center pb-5'>Login</h1>

        <label className="input input-bordered flex items-center gap-4 w-full">
          <span className='text-xl'>
            <BiUser />
          </span>
          <input type="text" className="grow w-full" placeholder="Username" />
        </label>

        <label className="input input-bordered flex items-center gap-4 w-full">
          <span className='text-xl'>
            <BiKey />
          </span>
          <input type="password" className="grow w-full" placeholder='Password' />
        </label>

        <div className='text-lg'>
          <span>Don't Have an Account? Register </span>
          <span className='text-accent font-semibold'>
            <Link to='/register'>
              Here
            </Link>
          </span>
        </div>

        <div className='flex justify-center'>
          <button className='btn btn-outline px-7 text-lg flex'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
