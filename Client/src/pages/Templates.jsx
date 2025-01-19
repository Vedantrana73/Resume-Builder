import React, { useEffect, useState } from 'react';
import SelectCategory from '../components/SelectCategory.jsx';
import FresherResume1 from '../assets/FresherResume1.png';
import { useNavigate } from 'react-router-dom';

function Templates({savedTemplates, setSelectedTemplate, selectedTemplate}) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate()

    return (
        <>
       <SelectCategory/>
       <div className='flex'>
        {savedTemplates.map((template,index)=>( <div key={index} className={`w-1/4 cursor-pointer p-3 rounded-lg m-2 ${selectedTemplate === template.templateName? 'bg-blue-500':''}`} onClick={()=>{
            console.log(template)
            setSelectedTemplate(template);
            setTimeout(() => {
                navigate('/resume')
            }, 3000);
        }}>{template.templateName}</div>))}
       </div>
       <div className='h-96 w-96 rounded-lg border border-black overflow-hidden'>
            <img src = {FresherResume1} className='object-fill w-full h-full'/>
       </div>
        </>
    );
}

export default Templates;
