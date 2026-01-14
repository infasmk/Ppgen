
import React from 'react';
import { UserProfile } from '../types';
import { Download, Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage: React.FC<{ profile: UserProfile }> = ({ profile }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen py-12 px-4 flex flex-col items-center">
      {/* Controls */}
      <div className="max-w-[210mm] w-full flex justify-between items-center mb-8 no-print">
        <Link to="/editor" className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Editor
        </Link>
        <div className="flex gap-4">
          <button 
            onClick={handlePrint}
            className="bg-white text-slate-700 px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-sm border border-slate-200 hover:bg-slate-50"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-md hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" /> Download DOCX
          </button>
        </div>
      </div>

      {/* Resume Canvas (A4 Aspect) */}
      <div className="bg-white shadow-2xl w-full max-w-[210mm] min-h-[297mm] p-[20mm] text-slate-900 font-sans print:shadow-none print:max-w-none print:p-0">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-8 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">{profile.name}</h1>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
            <span>{profile.social.email}</span>
            {profile.social.phone && <span>{profile.social.phone}</span>}
            <span>{profile.location}</span>
            {profile.social.linkedin && <span>linkedin.com/in/{profile.social.linkedin.split('/').pop()}</span>}
            {profile.social.github && <span>github.com/{profile.social.github.split('/').pop()}</span>}
          </div>
        </header>

        {/* Bio */}
        <section className="mb-8">
          <h2 className="text-sm font-black uppercase border-b border-slate-200 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed">{profile.bio}</p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-sm font-black uppercase border-b border-slate-200 pb-1 mb-3">Work Experience</h2>
          {profile.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline font-bold text-sm">
                <span>{exp.role}</span>
                <span className="text-xs uppercase font-medium">{exp.duration}</span>
              </div>
              <div className="text-sm italic font-medium mb-2">{exp.company}</div>
              <p className="text-xs leading-relaxed opacity-90">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-sm font-black uppercase border-b border-slate-200 pb-1 mb-3">Key Projects</h2>
          <div className="grid grid-cols-1 gap-4">
            {profile.projects.map((proj) => (
              <div key={proj.id} className="text-sm">
                <span className="font-bold">{proj.title}</span> | <span className="text-xs opacity-70 italic">{proj.techStack.join(', ')}</span>
                <p className="text-xs leading-relaxed mt-1">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-sm font-black uppercase border-b border-slate-200 pb-1 mb-3">Technical Skills</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
            {profile.skills.map((skill, i) => (
              <span key={i}><span className="font-bold">{skill.name}</span> ({skill.level})</span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-sm font-black uppercase border-b border-slate-200 pb-1 mb-3">Education</h2>
          {profile.education.map((edu) => (
            <div key={edu.id} className="flex justify-between text-sm mb-2">
              <div>
                <span className="font-bold">{edu.institution}</span>
                <p className="text-xs italic">{edu.degree}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold">{edu.year}</span>
                {edu.cgpa && <p className="text-xs">GPA: {edu.cgpa}</p>}
              </div>
            </div>
          ))}
        </section>
      </div>
      
      <div className="mt-8 text-slate-400 text-sm no-print">
        FolioStack Resume Builder v1.0
      </div>
    </div>
  );
};

export default ResumePage;
