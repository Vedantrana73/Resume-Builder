import React, { useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  return (
    <div className='px-1 space-y-4'>
      {/* Profile Section */}
      <div className='border border-gray-500 flex flex-col lg:flex-row lg:items-center p-4 rounded-lg px-5'>
        <div className='my-4 text-8xl overflow-hidden bg-base-300 w-fit text-base-content rounded-full border'>
          <BiUser />
        </div>
        <div className='text-xl text-base-content space-y-2'>
            <div className='md:flex gap-4'>
                
          <div>
            <strong>Username:</strong>
          </div>
          <div>
            Akshat068
          </div>
            </div>

            <div className='md:flex gap-4'>

          <div>
            <strong>Email:</strong> 
          </div>
          <div>
            akshatgohil@gmail.com
          </div>
            </div>

          <div className='md:flex gap-4'>
            <div>
              <strong>Password:</strong>
            </div>
            <div>
                XXXXX
            </div>
            <div className='my-2 md:my-0'>
                <button className='btn btn-outline px-3 rounded-box'>Change Password</button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className='border border-gray-500 rounded-lg p-4 space-y-3'>
        <div className='text-2xl font-semibold'>
            Don't Have an Account?
        </div>
        <button className='btn btn-outline px-3 py-2' onClick={()=>navigate('/login')}>Login</button>
      </div>
      <div className='border border-gray-500 p-4 rounded-lg space-y-4'>
        <h2 className='text-2xl font-semibold'>About Us</h2>
        <p className='mt-2 text-base-content'>
          We are a team dedicated to providing the best resume-building experience to our users. Our goal is to make resume creation simple, fast, and effective.
        </p>
        {/* Button to navigate to About Us page */}
        <button className='btn btn-outline' onClick={()=>navigate('/about-us')}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Profile;
