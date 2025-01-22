import Navbar from '../components/Navbar'
import Padding from '../components/Padding'

function Resume8() {

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
          technical: ["Adobe Photoshop", "Adobe Illustrator", "Sketch", "UI/UX Design", "HTML/CSS","Mongoose","Python","Java"],
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
    <div className='min-h-screen'>
        <div className='no-print'>
            <Navbar />
            <Padding />
            <div className='p-3'>
                <button className='px-4 py-2 bg-gray-800 rounded-lg text-white' onClick={handlePrint}>Hello World</button>
            </div>
        </div>

        <div className='bg-gray-800 text-white pt-10 px-4 flex flex-col  max-w-5xl mx-auto'>
            <header className='flex flex-col mb-2 pb-2'>
                <div className='mb-2'>
                    <h1 className='text-4xl'><strong>{resumeData.name}</strong></h1>
                </div>
                <div className='mb-2'>
                    <h1 className='text-2xl'>{resumeData.jobTitle}</h1>
                </div>
                <div className='text-lg mb-4'>
                    <span className='mr-5'>{resumeData.contact.address}</span>
                    <span className='mr-5'>{resumeData.contact.email}</span>
                    <span className='mr-5'>{resumeData.contact.phone}</span>
                </div>
            </header>

            <main className=''>
                <section className='pb-2 mb-2'>
                    <h1 className='text-3xl bg-gray-300 w-fit px-3 py-1 font-semibold rounded-full'>Professional Summary</h1>
                    <div className='text-xl flex-wrap p-2'>
                        <p>{resumeData.professionalSummary}</p>
                    </div>
                </section>

                <section className='pb-2 mb-2'>
                    <h1 className='text-3xl bg-gray-300 w-fit px-3 py-1 font-semibold rounded-full'>Technical Skills</h1>
                        <ul className='w-full flex flex-wrap py-1'>
                            {resumeData.skills.technical && resumeData.skills.technical.map((skill)=>(
                                <li key = {skill} className='w-1/4 text-lg'>{skill}</li>
                            ))}
                        </ul>
                </section>

                <section className='pb-2 mb-2'>
                    <h1 className='text-3xl bg-gray-300 w-fit px-3 py-1 font-semibold rounded-full'>Experience</h1>
                    <div>
                    <ul>
                            {resumeData.workExperience && resumeData.workExperience.map((experience)=>(
                                <li className='mt-3' key = {experience.title}>
                                    <h3 className='text-xl font-bold'>{experience.title}</h3>
                                    <div className='flex justify-between'>
                                    <h3 className='text-lg font-semibold'>{experience.company}</h3>
                                    <h3 className='text-lg font-semibold'>{experience.startDate} - {experience.endDate}</h3>
                                    </div>
                                    <div>
                                        <ul className='space-y-1'>
                                        {experience.responsibilities && experience.responsibilities.map((responsibility)=>(
                                            <li className='text-lg' key={responsibility}>{responsibility}</li>
                                        ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className='pb-2 mb-2'>
                        <h1 className='text-3xl bg-gray-300 w-fit px-3 py-1 font-semibold rounded-full'>Education</h1>
                        <ul className='py-2'>

                        {
                            resumeData.education && resumeData.education.map((education)=>(
                                <li key = {education.institution} className='space-y-1'>
                                    <div className='flex justify-between font-semibold text-xl'>
                                        <div>{education.degree}</div>
                                        <div>{education.startYear} - {education.endYear}</div>
                                    </div>
                                    <div className='text-lg'>
                                        {education.institution}
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                </section>

                <section className='pb-2 mb-2 text-xl'>
                        <h1 className='text-3xl bg-gray-300 w-fit px-3 py-1 font-semibold rounded-full'>Additional Information</h1>
                        <div className='flex gap-2 mt-1 flex-wrap'>
                        <h2 className='font-semibold'>Personal Skills: </h2>
                        <div>
                            <ul className='flex gap-1 '>
                                {resumeData.skills.softSkills && resumeData.skills.softSkills.map((skill,index)=>(
                                    <li key={skill}>{skill} {index !== resumeData.skills.softSkills.length-1 && ','}</li>
                                ))}
                            </ul>
                        </div>
                        </div>
                        <div className='flex gap-2'>
                            <h2 className='font-semibold'>Languages: </h2>
                            <div>
                                <ul className='flex gap-1'>
                                {resumeData.languages&& resumeData.languages.map((langauge,index)=>(
                                    <li key = {langauge.name}>{langauge.name} {index!==resumeData.languages.length-1 && ','}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <h2 className='font-semibold'>Certificates: </h2>
                            <div>
                                <ul className='flex gap-1'>
                                    {resumeData.certifications && resumeData.certifications.map((certification,index)=>(
                                        <li key={certification.title}>
                                        <div>
                                            {certification.title}
                                            {certification.year}
                                            {index !== resumeData.certifications.length-1 && ','}
                                        </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                </section>
            </main>
        </div>
    </div>
  )
}

export default Resume8