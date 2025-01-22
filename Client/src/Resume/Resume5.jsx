import Navbar from '../components/Navbar';
import Padding from '../components/Padding';
import profile from '../assets/profile.jpg'
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
            <div className='w-2/5'>
                <div className='h-72 w-full border bg-no-repeat bg-cover flex flex-col justify-end' style={{backgroundImage: `url(${profile})`}}>
                <div className='text-3xl flex justify-center p-4 opacity-80 text-white font-bold bg-blue-500'>{resumeData.name.toUpperCase()}</div>
                </div>

                <section className='pt-2 px-3 bg-blue-200'>
                  <div className='text-2xl font-semibold'>
                    {resumeData.jobTitle}
                  </div>
                  <div className='text-lg font-semibold py-2'>
                    {resumeData.careerObjective}
                  </div>
                </section>

                <section className='text-xl py-3 px-3 bg-blue-200'>
                  <div>
                    {resumeData.contact.phone}
                  </div>
                  <div>
                    {resumeData.contact.email}
                  </div>
                  <div>
                    {resumeData.contact.address}
                  </div>
                </section>

                <section className='text-xl px-3 py-3 bg-blue-200'>
                  <h2 className='text-2xl font-semibold text-blue-500'>LANGUAGES</h2>
                  <ul className='space-y-1 py-1'>
                    {resumeData.languages && resumeData.languages.map((language)=>(
                      <li key={language.name}>
                        <div className='font-semibold'>
                          {language.name}
                        </div>
                        <progress className="progress progress-info w-56" value={language.familiarity} max="100"></progress>
                      </li>
                    ))}
                  </ul>
                </section>
            </div>
            <div className='w-3/5 border border-black px-4'>
                <section className='py-1 border-b-2 border-blue-600 pb-3'>
                    <h2 className='text-blue-500 font-semibold text-3xl py-1'>SKILLS</h2>
                    <ul>
                        {resumeData.technicalSkills && resumeData.technicalSkills.map((skill)=>(
                            <li className='font-semibold text-xl' key={skill}>{skill}</li>
                        ))}
                    </ul>
                </section>

                <section className='mt-2 border-b-2 border-blue-600 pb-3'>   
                    <h2 className='text-blue-500 font-semibold text-3xl py-1'>EDUCATION</h2>
                    <ul className='space-y-1 '>
                        {resumeData.education && resumeData.education.map((education)=>(
                            <li key={education.institution}>
                                <div className='font-semibold text-xl'>{education.degree}</div>
                                <div className='font-semibold text-lg'>{education.startYear} - {education.endYear}</div>
                                <div className='font-semibold text-lg'>{education.institution}</div>
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
