import React from 'react'
import Navbar from '../components/Navbar'
import Padding from '../components/Padding'

function Resume6() {
    const resumeData = {
        name: "Leo Das Makwana",
        jobTitle: "Senior Graphic Designer",
        contact: {
          phone: "123-456-7890",
          email: "leo@example.com",
          address: "123 Main St, Cityville, CV 12345",
          portfolio: "https://www.behance.net/leo-das-makwana"
        },
        professionalSummary: "Dedicated senior graphic designer with 8+ years of experience in visual design, specializing in UI/UX, branding, and digital media. Proven track record in leading design teams and achieving business goals through creative solutions.",
        workExperience: [
          {
            title: "Senior Graphic Designer",
            company: "Creative Studios",
            startDate: "Jan 2020",
            endDate: "Present",
            responsibilities: [
              "Led design projects from concept to completion, resulting in a 20% increase in client satisfaction.",
              "Collaborated with the marketing team to create high-impact visual campaigns.",
              "Mentored junior designers, helping them develop skills in Adobe Creative Suite."
            ]
          },
          {
            title: "Graphic Designer",
            company: "DesignPro",
            startDate: "Jun 2015",
            endDate: "Dec 2019",
            responsibilities: [
              "Created digital and print design materials for various clients.",
              "Worked closely with cross-functional teams to ensure brand consistency."
            ]
          }
        ],
        education: [
          {
            degree: "Bachelor of Science in Graphic Design",
            institution: "University of XYZ",
            startYear: 2012,
            endYear: 2016
          }
        ],
        certifications: [
          {
            title: "Certified Adobe Expert",
            institution: "Adobe",
            year: "2020"
          },
          {
            title: "Advanced UX/UI Design Certification",
            institution: "Design Academy",
            year: "2021"
          }
        ],
        skills: {
          technical: ["Adobe Photoshop", "Adobe Illustrator", "Sketch", "UI/UX Design", "HTML/CSS"],
          softSkills: ["Leadership", "Creative Problem-Solving", "Project Management", "Team Collaboration"]
        },
        achievements: [
          "Led a redesign project for a key client that increased brand recognition by 40%.",
          "Received the 'Employee of the Year' award for outstanding design contributions in 2019."
        ],
        languages: [
          { name: "English", familiarity: 100 },
          { name: "Spanish", familiarity: 75 }
        ],
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
                <button className='px-4 py-2 bg-green-500 rounded-lg text-white' onClick={handlePrint}>Print</button>
            </div>
        </div>

        <div className='lg:max-w-5xl border px-3 border-black mx-auto'>
            <header className='border-b border-black flex min-h-48'>
                <div className='flex flex-col justify-center w-3/5'>
                    <h1 className='text-4xl font-bold break-words'>{resumeData.name.toUpperCase()}</h1>
                    <h3 className='text-2xl pt-3 font-semibold'>Web Developer</h3>
                </div>
                <div className='flex flex-col justify-center'>
                    <div>
                        {resumeData.contact.phone}
                    </div>
                    <div>
                        {resumeData.contact.email}
                    </div>
                    <div>
                        {resumeData.contact.address}
                    </div>
                </div>
            </header>
            
            <main className='mt-2 py-2 flex'>
                <div className='w-3/5 px-2 border-r-2 border-r-black'>
                    <section className='border-b-2 border-black pb-2'>
                        <h1 className='text-2xl font-semibold'>Work Experience</h1>
                        <ul>
                            {resumeData.workExperience && resumeData.workExperience.map((experience)=>(
                                <li className='mt-3'>
                                    <h3 className='text-xl font-bold'>{experience.title}</h3>
                                    <div className='flex justify-between'>
                                    <h3 className='text-lg font-semibold'>{experience.company}</h3>
                                    <h3 className='text-lg font-semibold'>{experience.startDate} - {experience.endDate}</h3>
                                    </div>
                                    <div>
                                        <ul className='space-y-1'>
                                        {experience.responsibilities && experience.responsibilities.map((responsibility)=>(
                                            <li className='text-lg'>{responsibility}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>  

                    <section className='border-b-2 border-black pb-2'>
                        <h2 className='text-2xl font-semibold'>
                            Achievements
                        </h2>
                        <div>
                            <ul className='space-y-1'>
                            {resumeData.achievements && resumeData.achievements.map((achievement)=>(
                                <li className='text-xl'>{achievement}</li>
                            ))}
                            </ul>
                        </div>
                    </section>

                    <section className='border-b-2 border-black pb-2'>
                        <h2 className='text-2xl font-semibold'>Certifications </h2>
                        <ul>
                            {resumeData.certifications && resumeData.certifications.map((certification)=>(
                                <li>
                                    <div className='text-lg font-semibold'>{certification.title}</div>
                                    <div className='text-lg font-semibold'>{certification.year}</div>
                                    <div className='text-base'>{certification.institution}</div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className='w-2/5 px-2'>
                    <section className='border-b-2 border-black pb-2'>
                        <h2 className='text-2xl font-semibold'>Summary</h2>
                        <div className='min-h-32 p-0.5'>
                            {resumeData.professionalSummary}
                        </div>
                    </section>

                    <section className='mt-2 border-b-2 pb-2 border-black'>
                        {
                            resumeData.skills.technical && 
                            <>
                            <h2 className='text-2xl font-semibold'>Skills</h2>
                        <div className='p-0.5'>
                            <ul className='space-y-0'>
                                {
                                    resumeData.skills.technical.map((skill)=>(
                                        <li className='font-semibold'>{skill}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        </>
                        }
                    </section>

                    <section className='mt-2 border-b-2 pb-2 border-black'>
                        {
                            resumeData.skills.softSkills && 
                            <>
                            <h2 className='text-2xl font-semibold'>Soft Skills</h2>
                        <div className='p-0.5'>
                            <ul className='space-y-0'>
                                {
                                    resumeData.skills.softSkills.map((skill)=>(
                                        <li className='font-semibold'>{skill}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        </>
                        }
                    </section>
                    
                    <section className='border-b-2 border-black mt-2 pb-2'>
                        <h2 className='text-2xl font-semibold pb-2'>Languages</h2>
                        {
                            resumeData.languages.map((language)=>(
                                    <>
                                    <div className='font-semibold'>{language.name}</div>
                                    <progress value={language.familiarity} max={100} className='h-1 border border-black'></progress>
                                    </>
                        
                            ))
                        }
                    </section>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Resume6
