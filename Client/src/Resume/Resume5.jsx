import React from 'react'
import Navbar from '../components/Navbar';
import Padding from '../components/Padding'
function Resume5() {
    const resumeData = {
        name: "Leo Das Makwana",
        jobTitle: "Graphic Designer",
        contact: {
          phone: "123-456-7890",
          email: "leo@example.com",
          address: "123 Main St, Cityville, CV 12345",
        },
        technicalSkills: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Sketch",
          "UI/UX Design",
          "HTML/CSS",
        ],
        hobbies: ["Photography", "Traveling", "Reading"],
        languages: [
          { name: "English", familiarity: 90 },
          { name: "Spanish", familiarity: 70 },
          { name: "French", familiarity: 40 },
        ],
        careerObjective:
          "Dedicated graphic designer with over 5 years of experience crafting visually compelling designs. Seeking a challenging role to leverage my skills and contribute to innovative projects.",
        education: [
          {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of XYZ",
            startYear: 2015,
            endYear: 2019
          },
          {
            degree: "Master of Science in Data Science",
            institution: "University of ABC",
            startYear: 2020,
            endYear: 2022
          }
        ],
        personalSkills: [
          "Communication Skills",
          "Teamwork",
          "Creativity",
          "Problem Solving",
          "Time Management",
          "Dependability",
        ],
        certificates: [
          {
            title: "Certified Web Developer",
            institution: "Code Academy"
          },
          {
            title: "Data Science Professional",
            institution: "Coursera"
          }
        ]
      };
    
  const handlePrint = () => {
    const noPrintElements = document.querySelectorAll('.no-print');
    noPrintElements.forEach((el) => {
      el.style.display = 'none';
    });

    window.print();

    setTimeout(() => {
      noPrintElements.forEach((el) => {
        el.style.display = '';
      });
    }, 500);
  };

  return (
    <div className='min-h-screen flex flex-col'>
        <div className='no-print'>
            <Navbar />
            <Padding />
            <div className='p-3'>
                <button className='px-4 py-2 bg-gray-800 rounded-lg text-white' onClick={handlePrint}>Hello World</button>
            </div>
        </div>

        <div className='w-screen lg:max-w-5xl h-full border px-3 mx-auto flex'>
            <div className='w-2/5 border border-black'>
                <div className='h-1/4 w-full border border-red-500'>
                    this 
                </div>
            </div>
            <div className='w-3/5 border border-black px-2'>
                <section className='py-1'>
                    <h2 className='text-blue-500 font-semibold text-2xl'>Skills</h2>
                    <ul>
                        {resumeData.technicalSkills && resumeData.technicalSkills.map((skill)=>(
                            <li className='text-base'>{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className='mt-2'>   
                    <h2 className='text-blue-500 font-semibold text-2xl'>Education</h2>
                    <ul>
                        {resumeData.education && resumeData.education.map((education)=>(
                            <li>
                                <div className='font-semibold'>{education.degree}</div>
                                <div className='font-semibold'>{education.startYear} - {education.endYear}</div>
                                <div>{education.institution}</div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='mt-2'>
                    <h2 className='text-blue-500 font-semibold text-2xl'></h2>
                    <ul>
                        
                    </ul>
                </section>
            </div>
        </div>
    </div>

  )
}

export default Resume5
