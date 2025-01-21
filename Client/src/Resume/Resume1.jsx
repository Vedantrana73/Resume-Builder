import React from "react";
import profile from "../assets/profile.jpg";
import Navbar from "../components/Navbar";
import Padding from "../components/Padding";

function Resume1() {
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
        endYear: 2019,
      },
      {
        degree: "Master of Science in Data Science",
        institution: "University of ABC",
        startYear: 2020,
        endYear: 2022,
      },
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
        institution: "Code Academy",
      },
      {
        title: "Data Science Professional",
        institution: "Coursera",
      },
    ],
  };

  const handlePrint = () => {
    const noPrintElements = document.querySelectorAll(".no-print");
    noPrintElements.forEach((el) => {
      el.style.display = "none";
    });

    window.print();

    setTimeout(() => {
      noPrintElements.forEach((el) => {
        el.style.display = "";
      });
    }, 500);
  };

  return (
    <>
      <div className="no-print">
        <Navbar />
        <Padding />
        <div className="p-5">
          <button
            className="px-4 py-3 bg-green-500 rounded-lg"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="w-2/5 bg-yellow-800 h-screen text-white">
          <div className="flex justify-center items-center h-1/5">
            <div className="h-44 w-44 border-2 rounded-full overflow-auto object-fill">
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <div className="px-3 text-white space-y-2">
            <div>
              <div className="text-3xl font-semibold py-1">Contact</div>
              <div>
                <div>
                  <div className="text-xl font-semibold">Phone</div>
                  <div className="text-sm">{resumeForm.contact.phone}</div>
                </div>
                <div>
                  <div className="text-xl font-semibold">Email</div>
                  <div className="text-sm">{resumeForm.contact.email}</div>
                </div>
                <div>
                  <div className="text-xl font-semibold">Address</div>
                  <div className="text-sm">{resumeForm.contact.address}</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Technical Skills</h1>
              <ul className="text-sm">
                {resumeForm.technicalSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Hobbies</h1>
              <ul className="text-sm">
                {resumeForm.hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Languages</h1>
              <ul className="text-sm">
                {resumeForm.languages.map((language) => (
                  <li key={language.name}>
                    <div>{language.name}</div>
                    <div>
                      <progress
                        value={language.familiarity}
                        max={100}
                        className="h-0.5"
                      ></progress>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen bg-orange-100 px-3">
          <div className="py-5 h-1/5">
            <div className="text-5xl font-semibold pt-10">
              {resumeForm.name}
            </div>
            <div className="text-2xl">{resumeForm.jobTitle}</div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Career Objective</h1>
            <div className="text-sm py-1.5">{resumeForm.careerObjective}</div>

            <h1 className="text-2xl pt-5 font-semibold">Education</h1>
            <ul className="text-xs py-1.5">
              {resumeForm.education.map((education) => (
                <li key={education.degree}>
                  <h2 className="font-semibold text-lg">{education.degree}</h2>
                  <div className="text-base">{education.institution}</div>
                  <div className="text-base">
                    {education.startYear} - {education.endYear}
                  </div>
                </li>
              ))}
            </ul>

            <h1 className="text-2xl pt-5 font-semibold">Personal Skills</h1>
            <ul className="text-sm space-x-0.5">
              {resumeForm.personalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            <h1 className="text-2xl pt-5 font-semibold">Certifications</h1>
            <ul>
              {resumeForm.certificates.map((certificate) => (
                <li key={certificate.title}>
                  <div>{certificate.title}</div>
                  <div>{certificate.institution}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume1;
