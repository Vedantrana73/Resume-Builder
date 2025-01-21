import React, { useEffect, useState } from 'react';
function ResumeForm() {
  
  const [resumeData, setResumeData] = useState({
    userEmail,
    templateName: '',
    name: '',
    jobTitle: '',
    contact: {
      phone: '',
      email: '',
      address: ''
    },
    technicalSkills: [],
    hobbies: [],
    careerObjective: '',
    education: [],
    personalSkills: [],
    certifications: [],
    languages: []  // New languages field
  });

  const [newHobby, setNewHobby] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [newEducation, setNewEducation] = useState({
    degree: '',
    university: '',
    startYear: '',
    endYear: ''
  });
  const [newPersonalSkill, setNewPersonalSkill] = useState('');
  const [newCertificate, setNewCertificate] = useState({
    title: '',
    description: ''
  });
  const [newLanguage, setNewLanguage] = useState({
    language: '',
    familiarity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const keys = name.split('.');
      setResumeData((prevData) => ({
        ...prevData,
        [keys[0]]: {
          ...prevData[keys[0]],
          [keys[1]]: value,
        },
      }));
    } else {
      setResumeData({
        ...resumeData,
        [name]: value,
      });
    }
  };

  const handleAddHobby = () => {
    if (newHobby.trim()) {
      setResumeData({
        ...resumeData,
        hobbies: [...resumeData.hobbies, newHobby]
      });
      setNewHobby('');
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setResumeData({
        ...resumeData,
        technicalSkills: [...resumeData.technicalSkills, newSkill]
      });
      setNewSkill('');
    }
  };

  const handleAddEducation = () => {
    if (newEducation.degree.trim() && newEducation.university.trim()) {
      setResumeData({
        ...resumeData,
        education: [...resumeData.education, newEducation]
      });
      setNewEducation({
        degree: '',
        university: '',
        startYear: '',
        endYear: ''
      });
    }
  };

  const handleAddPersonalSkill = () => {
    if (newPersonalSkill.trim()) {
      setResumeData({
        ...resumeData,
        personalSkills: [...resumeData.personalSkills, newPersonalSkill]
      });
      setNewPersonalSkill('');
    }
  };

  const handleAddCertificate = () => {
    if (newCertificate.title.trim() && newCertificate.description.trim()) {
      setResumeData({
        ...resumeData,
        certifications: [...resumeData.certifications, newCertificate]
      });
      setNewCertificate({
        title: '',
        description: ''
      });
    }
  };

  const handleAddLanguage = () => {
    if (newLanguage.language.trim() && newLanguage.familiarity.trim()) {
      setResumeData({
        ...resumeData,
        languages: [...resumeData.languages, newLanguage]
      });
      setNewLanguage({
        language: '',
        familiarity: ''
      });
    }
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value
    });
  };

  const handleCertificateChange = (e) => {
    const { name, value } = e.target;
    setNewCertificate({
      ...newCertificate,
      [name]: value
    });
  };

  const handleLanguageChange = (e) => {
    const { name, value } = e.target;
    setNewLanguage({
      ...newLanguage,
      [name]: value
    });
  };

  const storeTemplateInLocalStorage = () => {
    const existingTemplates = JSON.parse(localStorage.getItem('resumeTemplates')) || [];
    existingTemplates.push(resumeData);
    localStorage.setItem('resumeTemplates', JSON.stringify(existingTemplates));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    storeTemplateInLocalStorage();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Template</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Template Input Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
          <input type="text" name="name" value={resumeData.name} onChange={handleChange} className="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Title:</label>
          <input type="text" name="jobTitle" value={resumeData.jobTitle} onChange={handleChange} className="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
          <input type="text" name="contact.phone" value={resumeData.contact.phone} onChange={(e) => handleChange({ ...e, name: 'contact.phone' })} className="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
          <input type="email" name="contact.email" value={resumeData.contact.email} onChange={(e) => handleChange({ ...e, name: 'contact.email' })} className="w-full border p-2 rounded-lg" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Address:</label>
          <textarea name="contact.address" value={resumeData.contact.address} onChange={(e) => handleChange({ ...e, name: 'contact.address' })} className="w-full border p-2 rounded-lg"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Career Objective:</label>
          <textarea name="careerObjective" value={resumeData.careerObjective} onChange={handleChange} className="w-full border p-2 rounded-lg"></textarea>
        </div>
        {/* Other Fields (Skills, Hobbies, Education, etc.) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Technical Skills:</label>
          <div className="flex gap-2">
            <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} className="w-full border p-2 rounded-lg" />
            <button type="button" onClick={handleAddSkill} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
          </div>
          <ul className="list-disc pl-5 mt-2">
            {resumeData.technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hobbies:</label>
          <div className="flex gap-2">
            <input type="text" value={newHobby} onChange={(e) => setNewHobby(e.target.value)} className="w-full border p-2 rounded-lg" />
            <button type="button" onClick={handleAddHobby} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
          </div>
          <ul className="list-disc pl-5 mt-2">
            {resumeData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Education:</label>
          <div>
            <input type="text" name="degree" value={newEducation.degree} onChange={handleEducationChange} className="w-full border p-2 rounded-lg" placeholder="Degree" />
            <input type="text" name="university" value={newEducation.university} onChange={handleEducationChange} className="w-full border p-2 rounded-lg" placeholder="University" />
            <input type="text" name="startYear" value={newEducation.startYear} onChange={handleEducationChange} className="w-full border p-2 rounded-lg" placeholder="Start Year" />
            <input type="text" name="endYear" value={newEducation.endYear} onChange={handleEducationChange} className="w-full border p-2 rounded-lg" placeholder="End Year" />
            <button type="button" onClick={handleAddEducation} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Education</button>
          </div>
          <ul className="list-disc pl-5 mt-2">
            {resumeData.education.map((education, index) => (
              <li key={index}>{education.degree}, {education.university} ({education.startYear} - {education.endYear})</li>
            ))}
          </ul>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Personal Skills:</label>
          <div className="flex gap-2">
            <input type="text" value={newPersonalSkill} onChange={(e) => setNewPersonalSkill(e.target.value)} className="w-full border p-2 rounded-lg" />
            <button type="button" onClick={handleAddPersonalSkill} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
          </div>
          <ul className="list-disc pl-5 mt-2">
            {resumeData.personalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Certifications:</label>
          <div className="flex gap-2">
            <input type="text" name="title" value={newCertificate.title} onChange={handleCertificateChange} className="w-full border p-2 rounded-lg" placeholder="Certification Title" />
            <input type="text" name="description" value={newCertificate.description} onChange={handleCertificateChange} className="w-full border p-2 rounded-lg" placeholder="Certification Description" />
            <button type="button" onClick={handleAddCertificate} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
          </div>
          <ul className="list-disc pl-5 mt-2">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>{cert.title}: {cert.description}</li>
            ))}
          </ul>
        </div>
        {/* Languages Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Languages:</label>
          <div className="flex gap-2">
            <input type="text" name="language" value={newLanguage.language} onChange={handleLanguageChange} className="w-full border p-2 rounded-lg" placeholder="Language" />
            <input type="number" name="familiarity" value={newLanguage.familiarity} onChange={handleLanguageChange} className="w-full border p-2 rounded-lg" placeholder="Familiarity (out of 100)" />
            <button type="button" onClick={handleAddLanguage} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
          </div>
          <ul className="list-disc pl-5 mt-2">
            {resumeData.languages.map((lang, index) => (
              <li key={index}>{lang.language}: {lang.familiarity}%</li>
            ))}
          </ul>
        </div>
        {/* Template Saving */}
        <div className='py-4'>
          <label className="block text-sm font-medium text-gray-700 mb-2">Save Template as: </label>
          <input type="text" name="templateName" value={resumeData.templateName} onChange={handleChange} className="w-full border p-2 rounded-lg" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save Template</button>
      </form>
    </div>
  );
}

export default ResumeForm;
