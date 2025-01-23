import React from 'react';
import profile from '../assets/profile.jpg';
import Navbar from '../components/Navbar';
import Padding from '../components/Padding';

function Resume4() {
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
    <div className='text-white min-h-screen flex flex-col'>
      <div className='no-print'>
        <Navbar />
        <Padding />
        <div className='p-3'>
          <button className='px-4 py-2 bg-green-500 rounded-lg' onClick={handlePrint}>Print</button>
        </div>
      </div>

      <div className='max-w-5xl mx-auto bg-white text-black p-6 rounded-lg'>
        <header className='flex flex-row items-center md:items-start border-b pb-4 space-x-10'>
          <div className='h-28 w-28 border-4 border-indigo-500 rounded-full overflow-hidden'>
            <img src={profile} alt="Profile" />
          </div>
          <div className='mt-4 md:mt-0 md:ml-6 text-left space-y-2'>
            <h1 className='text-4xl font-bold'>{resumeData.name}</h1>
            <h2 className='text-2xl font-medium text-indigo-600'>{resumeData.jobTitle}</h2>
            <section className='mb-6'>
            <h2 className='text-xl font-semibold text-indigo-600'>Contact Information</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
              <p><strong>Phone:</strong> {resumeData.contact.phone}</p>
              <p><strong>Email:</strong> {resumeData.contact.email}</p>
              <p className='sm:col-span-2'><strong>Address:</strong> {resumeData.contact.address}</p>
            </div>
          </section>
          </div>
        </header>

        <main className='mt-4'>
          <section className='mb-2'>
            <h2 className='text-xl font-semibold text-indigo-600'>Career Objective</h2>
            <p className='mt-4'>{resumeData.careerObjective}</p>
          </section>

         

          <section className='mb-4'>
            <h2 className='text-xl font-semibold text-indigo-600'>Technical Skills</h2>
            <div className='flex flex-wrap'>
              {resumeData.technicalSkills.map(skill => (
                <span key={skill} className='bg-indigo-100 text-indigo-800 text-sm font-medium m-0.5 px-4 py-2 rounded'>{skill}</span>
              ))}
            </div>
          </section>

          <section className='mb-4'>
            <h2 className='text-xl font-semibold text-indigo-600'>Education</h2>
            <ul>
              {resumeData.education.map(edu => (
                <li key={edu.degree} className='mt-2'>
                  <strong>{edu.degree}</strong> - {edu.institution} ({edu.startYear} - {edu.endYear})
                </li>
              ))}
            </ul>
          </section>

          <section className='mb-4'>
            <h2 className='text-xl font-semibold text-indigo-600'>Personal Skills</h2>
            <ul className='list-disc list-inside flex flex-wrap'>
            {resumeData.personalSkills.map(skill => (
                <span key={skill} className='bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded m-1'>{skill}</span>
              ))}
            </ul>
          </section>

          <section className='mb-4'>
            <h2 className='text-xl font-semibold text-indigo-600'>Certifications</h2>
            <ul>
              {resumeData.certificates.map(cert => (
                <li key={cert.title} className='mt-2'>
                  <strong>{cert.title}</strong> - {cert.institution}
                </li>
              ))}
            </ul>
          </section>

          <section className='mb-4'>
            <h2 className='text-xl font-semibold text-indigo-600'>Languages</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              {resumeData.languages.map(language => (
                <div key={language.name}>
                  <p>{language.name}</p>
                  <progress value={language.familiarity} max={100} className='w-full'></progress>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Resume4;
