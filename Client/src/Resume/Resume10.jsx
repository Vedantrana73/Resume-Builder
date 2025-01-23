import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";
import Navbar from "../components/Navbar";
import Padding from "../components/Padding";

function Resume() {
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
    // Hide all elements with class 'no-print'
    const noPrintElements = document.querySelectorAll(".no-print");
    noPrintElements.forEach((el) => {
      el.style.display = "none";
    });

    // Trigger the print dialog
    window.print();

    // Restore the 'no-print' elements after printing
    setTimeout(() => {
      noPrintElements.forEach((el) => {
        el.style.display = "";
      });
    }, 500); // Delay to allow printing to finish
  };

  return (
    <>
      <div className="no-print">
        <Navbar />
        <Padding />
        <div className="p-3">
          <button
            className="px-3 py-2 bg-green-500 rounded-lg"
            onClick={handlePrint}
            >
            Print
          </button>
        </div>
      </div>


    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex font-sans">
      {/* Sidebar */}
      <div className="w-1/3 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-32 h-32 border-4 border-gray-300 object-cover"
          />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">{resumeData.name}</h1>
        <h2 className="text-lg text-gray-600">{resumeData.jobTitle}</h2>
        <div className="mt-4 space-y-2 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>{resumeData.contact.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>{resumeData.contact.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>{resumeData.contact.address}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin />
            <a href={`https://${resumeData.contact.linkedin}`} className="text-blue-600" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaTwitter />
            <a href={`https://twitter.com/${resumeData.contact.twitter}`} className="text-blue-600" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <div className="flex flex-wrap mt-4">
            {resumeData.skills.map((skill, index) => (
              <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm py-1 px-3 mr-2 mb-2 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8">
        <section>
          <h3 className="text-2xl font-semibold text-gray-800">Summary</h3>
          <p className="text-gray-700 mt-4">{resumeData.summary}</p>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
          {resumeData.workExperience.map((job, index) => (
            <div
            key={index}
            className="mt-6 bg-white shadow-lg p-4 rounded-lg"
            >
              <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
              <p className="text-gray-600 italic">
                {job.company} - {job.location}
              </p>
              <p className="text-sm text-gray-600">{job.period}</p>
              <ul className="mt-4 list-disc pl-6 text-gray-600">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Certifications</h3>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mt-4 bg-white shadow-lg p-4 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.years}</p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Languages</h3>
          <ul className="mt-4 text-gray-700">
            {resumeData.languages.map((lang, index) => (
              <li key={index}>
                {lang.name}: {lang.proficiency}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
            </>
  );
}

export default Resume;
