import Navbar from "../components/Navbar";
import Padding from "../components/Padding";
import profile from "../assets/profile.jpg";

function Resume7() {
  const resumeForm = {
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
    skills: {
      technical: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Sketch",
        "UI/UX Design",
        "HTML/CSS",
      ],
      softSkills: [
        "Leadership",
        "Creative Problem-Solving",
        "Project Management",
      ],
    },
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
    <>
      {/* Print Button - Will be hidden when printing */}
      <div className="min-h-screen">
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

      {/* Main Resume Container */}
      <div className="flex flex-row border shadow-lg max-w-5xl mx-auto bg-white print:shadow-none print:border-none">
        {/* Sidebar Section */}
        <div className="w-1/3 bg-gray-800 text-white p-8 print:bg-gray-800">
          <div className="text-center mb-5">
            <img
              src={profile}
              alt="Profile"
              className="h-32 w-32 mx-auto rounded-full border-4 border-white"
            />
          </div>

          <h2 className="text-2xl font-bold mb-3">Technical Skills</h2>
          <ul className="mb-5">
            {resumeForm.skills.technical.map((skill, index) => (
              <li key={index} className="bg-gray-700 px-3 py-1 rounded mb-2">
                {skill}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-3">Soft Skills</h2>
          <ul>
            {resumeForm.skills.softSkills.map((skill, index) => (
              <li key={index} className="bg-gray-700 px-3 py-1 rounded mb-2">
                {skill}
              </li>
            ))}
          </ul>
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

        {/* Main Content Section */}
        <div className="w-2/3 p-8">
          <h1 className="text-4xl font-bold">{resumeForm.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-4 pb-2` border-b">
            {resumeForm.jobTitle}
          </h2>
          <div className="mb-2">
            {" "}
            <h3>{resumeForm.contact.phone}</h3>
            <h3>{resumeForm.contact.email}</h3>
            <h3>{resumeForm.contact.address}</h3>
          </div>
          <h3 className="text-2xl font-semibold border-b pb-2">
            Professional Summary
          </h3>
          <p className="mt-3 text-gray-700">{resumeForm.professionalSummary}</p>

          <h3 className="text-2xl font-semibold border-b pb-2 mt-6">
            Work Experience
          </h3>
          {resumeForm.workExperience.map((work, index) => (
            <div key={index} className="mt-4">
              <h4 className="text-xl font-bold">{work.title}</h4>
              <p className="text-gray-600">
                {work.company} | {work.startDate} - {work.endDate}
              </p>
              <ul className="list-disc ml-5 text-gray-700">
                {work.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3 className="text-2xl font-semibold border-b pb-2 mt-6">
            Education
          </h3>
          <div className="mt-4">
            <h4 className="text-xl font-bold">
              {resumeForm.education[0].degree}
            </h4>
            <p className="text-gray-600">
              {resumeForm.education[0].institution} (
              {resumeForm.education[0].startYear} -{" "}
              {resumeForm.education[0].endYear})
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Resume7;
