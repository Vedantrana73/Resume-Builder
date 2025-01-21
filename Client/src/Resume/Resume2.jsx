import React from 'react';
import profile from '../assets/profile.jpg';
import Navbar from '../components/Navbar';
import Padding from '../components/Padding';

function Resume2() {
  const resumeForm = {
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
      "Hello, I am a graphic designer with 5 years of experience in the field. I have worked with various clients and have a strong portfolio to showcase my skills. I am looking for a challenging role in a reputed organization where I can utilize my skills and grow professionally.",
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
    <div className='bg-gray-100 font-sans min-h-screen flex flex-col'>
      <div className='no-print'>
        <Navbar />
        <Padding />
        <div className='p-3'>
          <button className='px-3 py-2 bg-green-500 rounded-lg' onClick={handlePrint}>Print</button>
        </div>
      </div>

      <div className='max-w-3xl mx-auto bg-white p-4 flex-1'>
        <div className='flex flex-col sm:flex-row items-center border-b pb-3'>
          <div className='h-20 w-20 sm:h-24 sm:w-24 border-4 border-gray-300 rounded-full overflow-hidden'>
            <img src={profile} alt="Profile" />
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
            <h1 className='text-2xl font-semibold text-gray-800'>{resumeForm.name}</h1>
            <h2 className='text-sm text-gray-600'>{resumeForm.jobTitle}</h2>
          </div>
        </div>
        <div className='mt-4'>
          <section>
            <h3 className='text-lg font-semibold text-gray-700'>Career Objective</h3>
            <p className='mt-1 text-gray-600'>{resumeForm.careerObjective}</p>
          </section>

          <section className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-700'>Contact</h3>
            <div className='mt-1 text-gray-600'>
              <p><strong>Phone:</strong> {resumeForm.contact.phone}</p>
              <p><strong>Email:</strong> {resumeForm.contact.email}</p>
              <p><strong>Address:</strong> {resumeForm.contact.address}</p>
            </div>
          </section>

          <section className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-700'>Technical Skills</h3>
            <div className='flex flex-col flex-wrap text-gray-600 border h-32'>
              {resumeForm.technicalSkills.map(skill => (
                <div key={skill} className='w-full sm:w-1/2'>{skill}</div>
              ))}
            </div>
          </section>

          <section className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-700'>Languages</h3>
            <div className='mt-1 text-gray-600 flex flex-col flex-wrap h-24'>
              {resumeForm.languages.map(language => (
                <div key={language.name} className='mb-1'>
                  <span>{language.name}</span>
                  <progress value={language.familiarity} max={100} className='ml-2'></progress>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-700'>Education</h3>
            <ul className='mt-1 list-disc list-inside text-gray-600'>
              {resumeForm.education.map(edu => (
                <li key={edu.degree}>
                  <strong>{edu.degree}</strong> at {edu.institution} ({edu.startYear} - {edu.endYear})
                </li>
              ))}
            </ul>
          </section>

          <section className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-700'>Personal Skills</h3>
            <div className='flex flex-col flex-wrap h-28 text-gray-600'>
              {resumeForm.personalSkills.map(skill => (
                <div key={skill} className='w-full sm:w-1/2'>{skill}</div>
              ))}
            </div>
          </section>

          <section className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-700'>Certifications</h3>
            <ul className='mt-1 list-disc list-inside text-gray-600'>
              {resumeForm.certificates.map(cert => (
                <li key={cert.title}>
                  <strong>{cert.title}</strong> from {cert.institution}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume2;
