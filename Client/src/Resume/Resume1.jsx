    import React from 'react'
    import profile from '../assets/profile.jpg'
import Navbar from '../components/Navbar'
import Padding from '../components/Padding'

    function Resume1({selectedTemplate}) {

        const handlePrint = () => {
            // Hide all elements with class 'no-print'
            const noPrintElements = document.querySelectorAll('.no-print');
            noPrintElements.forEach((el) => {
              el.style.display = 'none';
            });
        
            // Trigger the print dialog
            window.print();
        
            // Restore the 'no-print' elements after printing
            setTimeout(() => {
              noPrintElements.forEach((el) => {
                el.style.display = '';
              });
            }, 500); // Delay to allow printing to finish
          };
    return (
        <>
        <div className='no-print'>
            <Navbar/>
            <Padding/>
            <div className='p-5'>
                <button className='px-4 py-3 bg-green-500 rounded-lg' onClick={handlePrint}>Print</button>
            </div>
        </div>
        <div className='flex border border-black'>
        <div className='w-2/5 bg-yellow-800 h-screen text-white'>
        <div className='flex justify-center items-center h-1/5'>
            <div className='h-44 w-44 border-2 rounded-full overflow-auto object-fill'>
                <img src={profile} alt=""/>
            </div>
        </div>
        <div className='px-3 text-white space-y-2'> 
            <div >
            <div className='text-3xl font-semibold py-1'>Contact</div>
                <div>
                    <div>
                        <div className='text-xl font-semibold'>Phone</div>
                        <div className='text-sm'>{selectedTemplate.contact.phone}</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold'>Email</div>
                        <div className='text-sm'>{selectedTemplate.contact.email}</div>
                    </div>
                    <div>
                        <div className='text-xl font-semibold'>Address</div>
                        <div className='text-sm'>{selectedTemplate.contact.address}</div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Technical Skills</h1>
                <div>
                    <ul className='text-sm'>
                        {
                            selectedTemplate.technicalSkills && selectedTemplate.technicalSkills.map((skill)=><li>{skill}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Hobbies</h1>
                <div>
                    <ul className='text-sm'>
                        {
                            selectedTemplate.hobbies && selectedTemplate.hobbies.map((hobby)=><li>{hobby}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Languages</h1>
                <div>
                    <ul className='text-sm'>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <div className='w-full h-screen bg-orange-100 border px-3'>
            <div className='py-5 h-1/5'>
                <div className='text-5xl font-semibold pt-10'>
                    Leo Das Makwana
                </div>
                <div className='text-2xl'>
                    Graphic Designer
                </div>
            </div>
            <div className=''>
                <h1 className='text-2xl font-semibold'>
                    Career Objective
                </h1>
                <div className='text-sm py-1.5'>
                    Hello, I am a graphic designer with 5 years of experience in the field. I have worked with various clients and have a strong portfolio to showcase my skills. I am looking for a challenging role in a reputed organization where I can utilize my skills and grow professionally.
                </div>
                {/* -------*/}

                <h1 className='text-2xl pt-5 font-semibold'>Education</h1>
                <div>
                        <div className='text-xs py-1.5'>
                            <h2 className='text-lg font-semibold'>Bachelor of Science</h2>
                            <p>University of XYZ, 2015 - 2019</p>
                            <h2 className='text-lg font-semibold'>Bachelor of Science</h2>
                            <p>University of XYZ, 2015 - 2019</p>
                            <h2 className='text-lg font-semibold'>Bachelor of Science</h2>
                            <p>University of XYZ, 2015 - 2019</p>   
                        </div>
                </div>

                <div>

                    <h1 className='text-2xl pt-5 font-semibold'>
                        Personal Skills
                    </h1>
                    <div className='py-1.5'>
                        <ul className='text-sm space-x-0.5'>
                            <li>Communication Skills</li>
                            <li>Teamwork</li>
                            <li>Creativity</li>
                            <li>Problem Solving</li>
                            <li>Time Management</li>
                            <li>Dependability</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl pt-5 font-semibold'>Certifications</h1>
                        <div className='py-1'>
                            <dl>
                                <dd className='text-lg font-semibold'>Certified Graphic Designer</dd>
                                <dl className='text-sm'>Hello world certificate</dl>
                                <dd className='text-lg font-semibold'>Certified Graphic Designer</dd>
                                <dl className='text-sm'>Hello world certificate</dl>
                                <dd className='text-lg font-semibold'>Certified Graphic Designer</dd>
                                <dl className='text-sm'>Hello world certificate</dl>
                                <dd className='text-lg font-semibold'>Certified Graphic Designer</dd>
                                <dl className='text-sm'>Hello world certificate</dl>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
                        </>
    )
    }

    export default Resume1
