import React, { useEffect, useState } from 'react';
import SelectCategory from '../components/SelectCategory.jsx';
import FresherResume1 from '../assets/FresherResume1.png';
function Templates() {

    return (
        <>
       <SelectCategory/>
       <div className='h-96 w-96 rounded-lg border border-black overflow-hidden'>
            <img src = {FresherResume1} className='object-fill w-full h-full'/>
       </div>
        </>
    );
}

export default Templates;
