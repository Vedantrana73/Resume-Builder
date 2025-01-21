import React from "react";
import profile from "../assets/profile.jpg";
import Navbar from "../components/Navbar";
import Padding from "../components/Padding";

function Resume3() {
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
    <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
      <div className="no-print">
        <Navbar />
        <Padding />
        <div className="p-3 text-center">
          <button
            className="px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={handlePrint}
          >
            Print
          </button>
        </div>
      </div>
      <div className="bg-white text-gray-900 font-sans p-6 max-w-4xl mx-auto rounded-lg shadow-lg print:max-w-full print:shadow-none print:p-4 print:overflow-hidden">
        {/* Header */}
        <header className="text-center border-b pb-6 mb-6 print:pb-4 print:mb-4">
          <h1 className="text-3xl font-bold print:text-2xl">
            {resumeForm.name}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600 print:text-lg">
            {resumeForm.jobTitle}
          </h2>
          <p className="mt-3 text-gray-700 text-base print:text-sm">
            {resumeForm.careerObjective}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-500 print:text-xs">
            <span>{resumeForm.contact.email}</span>
            <span>{resumeForm.contact.phone}</span>
            <span>{resumeForm.contact.address}</span>
          </div>
        </header>

        {/* Education Section */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4 print:text-lg print:pb-1 print:mb-2">
            Education
          </h3>
          <ul className="list-disc list-inside text-base text-gray-600 print:text-sm">
            {resumeForm.education.map((edu) => (
              <li key={edu.degree}>
                <strong>{edu.degree}</strong> at {edu.institution} (
                {edu.startYear} - {edu.endYear})
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4 print:text-lg print:pb-1 print:mb-2">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {resumeForm.technicalSkills.map((skill) => (
              <div
                key={skill}
                className="bg-yellow-200 rounded-lg text-sm px-3 py-1 shadow print:text-xs"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6 print:mb-4">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4 print:text-lg print:pb-1 print:mb-2">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {resumeForm.personalSkills.map((skill) => (
              <span
                key={skill}
                className="bg-yellow-200 text-gray-700 text-sm px-3 py-1 rounded-lg shadow print:text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4 print:text-lg print:pb-1 print:mb-2">
            Certificates
          </h3>
          <ul className="list-disc list-inside text-base text-gray-600 print:text-sm">
            {resumeForm.certificates.map((cert) => (
              <li key={cert.title}>
                <strong>{cert.title}</strong> from {cert.institution}
              </li>
            ))}
          </ul>
        </section>

        {/* Hobbies Section */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4 print:text-lg print:pb-1 print:mb-2">
            Hobbies
          </h3>
          <ul className="flex flex-wrap gap-2">
            {resumeForm.hobbies.map((hobby) => (
              <li
                className="bg-yellow-200 text-gray-700 text-sm px-3 py-1 rounded-lg shadow print:text-xs"
                key={hobby}
              >
                {hobby}
              </li>
            ))}
          </ul>
        </section>

        {/* Languages Section */}
        <section className="mb-6 print:mb-4">
          <h3 className="text-2xl font-semibold border-b pb-2 mb-4 print:text-lg print:pb-1 print:mb-2">
            Languages
          </h3>
          <div className="space-y-3">
            {resumeForm.languages.map((language) => (
              <div key={language.name} className="flex items-center gap-3">
                <span className="w-24 text-base print:text-sm">
                  {language.name}
                </span>
                <progress
                  value={language.familiarity}
                  max={100}
                  className="appearance-none w-full h-3 bg-gray-200 rounded-full print:h-2"
                ></progress>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Resume3;
