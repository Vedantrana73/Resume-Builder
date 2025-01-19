import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail, setUserPassword } from '../feature/user/userSlice';
import Carousel from '../components/Carousel';
import Timeline from '../components/Timeline';
import CTA from '../components/CTA';
import Features from '../components/Features';

function Home() {
  const { userEmail } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const { email, password } = JSON.parse(user);
      dispatch(setUserEmail(email));
      dispatch(setUserPassword(password));
    }
  }, [dispatch]);

  // Log the updated userEmail value
  useEffect(() => {
    if (userEmail !== null) {
      console.log("Updated userEmail:", userEmail);
    }
  }, [userEmail]);

  return (
    <div>
      <Carousel />
      <Timeline />
      <Features />
      <CTA />
    </div>
  );
}

export default Home;
