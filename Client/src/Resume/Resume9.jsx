import Navbar from "../components/Navbar";
import Padding from "../components/Padding";
import profile from '../assets/profile.jpg';
import woman from '../assets/woman.webp';

function Resume9() {
  const resumeData = {
    name: "Leo Das Makwana",
    jobTitle: "Senior Graphic Designer",
    contact: {
      phone: "123-456-7890",
      email: "leo@example.com",
      address: "123 Main St, Cityville, CV 12345",
      portfolio: "https://www.behance.net/leo-das-makwana",
    },
    professionalSummary:
      "Dedicated senior graphic designer with 8+ years of experience in visual design, specializing in UI/UX, branding, and digital media. Proven track record in leading design teams and achieving business goals through creative solutions.",
    workExperience: [
      {
        title: "Senior Graphic Designer",
        company: "Creative Studios",
        startDate: "Jan 2020",
        endDate: "Present",
        responsibilities: [
          "Led design projects from concept to completion, resulting in a 20% increase in client satisfaction.",
          "Collaborated with the marketing team to create high-impact visual campaigns.",
          "Mentored junior designers, helping them develop skills in Adobe Creative Suite.",
        ],
      },
      {
        title: "Graphic Designer",
        company: "DesignPro",
        startDate: "Jun 2015",
        endDate: "Dec 2019",
        responsibilities: [
          "Created digital and print design materials for various clients.",
          "Worked closely with cross-functional teams to ensure brand consistency.",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Graphic Design",
        institution: "University of XYZ",
        startYear: 2012,
        endYear: 2016,
      },
    ],
    certifications: [
      {
        title: "Certified Adobe Expert",
        institution: "Adobe",
        year: "2020",
      },
      {
        title: "Advanced UX/UI Design Certification",
        institution: "Design Academy",
        year: "2021",
      },
    ],
    skills: {
      technical: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Sketch",
        "UI/UX Design",
        "HTML/CSS",
        "Mongoose",
        "Python",
        "Java",
      ],
      softSkills: [
        "Leadership",
        "Creative Problem-Solving",
        "Project Management",
        "Team Collaboration",
      ],
    },
    achievements: [
      "Led a redesign project for a key client that increased brand recognition by 40%.",
      "Received the 'Employee of the Year' award for outstanding design contributions in 2019.",
    ],
    languages: [
      { name: "English", familiarity: 100 },
      { name: "Spanish", familiarity: 75 },
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
    <div className="min-h-screen w-screen">
      <div className="no-print">
        <Navbar />
        <Padding />
        <div className="p-3">
          <button
            className="px-4 py-2 bg-gray-800 rounded-lg text-white"
            onClick={handlePrint}
          >
            Hello World
          </button>
        </div>
      </div>

      <div className="w-screen flex border border-red-500 max-w-5xl mx-auto">
        <div className=" flex flex-col items-center w-2/5 border-r border-black bg-blue-600 text-white">
          <div className="text-4xl font-semibold">
            {resumeData.name}
          </div>
          <div className="text-2xl font-semibold">
            {resumeData.jobTitle}
          </div>
          <div className="py-2 h-64  w-64 overflow-hidden relative">
            <img
              src={profile}
              alt="Profile"
              className="h-full w-full object-fill"
            />
          </div>
        </div>

        <div className="w-3/5 p-4">
          {/* Content for the right column goes here */}
        </div>
      </div>
    </div>
  );
}

export default Resume9;
