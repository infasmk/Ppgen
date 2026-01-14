
import React from 'react';
import { UserProfile } from '../types';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Globe } from 'lucide-react';

interface Props {
  profile: UserProfile;
}

const TemplateRenderer: React.FC<Props> = ({ profile }) => {
  const { templateId, primaryColor, isDark } = profile.theme;

  const renderModern = () => (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto py-24 px-6 text-center">
        <img 
          src={profile.photoUrl} 
          alt={profile.name}
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-xl"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight" style={{ color: primaryColor }}>{profile.name}</h1>
        <p className="text-2xl font-light mb-6 opacity-80">{profile.jobTitle}</p>
        <div className="flex justify-center gap-4 mb-12">
          {profile.social.github && (
            <a href={`https://${profile.social.github}`} className="hover:opacity-70 transition-opacity">
              <Github className="w-6 h-6" />
            </a>
          )}
          {profile.social.linkedin && (
            <a href={`https://${profile.social.linkedin}`} className="hover:opacity-70 transition-opacity">
              <Linkedin className="w-6 h-6" />
            </a>
          )}
          <a href={`mailto:${profile.social.email}`} className="hover:opacity-70 transition-opacity">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-70 italic">
          "{profile.bio}"
        </p>
      </header>

      {/* Experience Section */}
      <section className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <div className="w-8 h-1" style={{ backgroundColor: primaryColor }}></div>
            Experience
          </h2>
          <div className="space-y-12">
            {profile.experience.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-slate-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2" style={{ borderColor: primaryColor }}></div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm opacity-60 font-medium">{exp.duration}</span>
                </div>
                <p className="font-medium text-lg mb-4" style={{ color: primaryColor }}>{exp.company}</p>
                <p className="opacity-70 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-4">
            {profile.skills.map((skill, idx) => (
              <div key={idx} className="px-4 py-2 rounded-full border transition-all hover:scale-105" 
                style={{ borderColor: primaryColor, color: primaryColor }}>
                {skill.name} • <span className="text-xs uppercase font-bold">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.projects.map((proj) => (
              <div key={proj.id} className={`p-6 rounded-2xl shadow-sm border transition-transform hover:-translate-y-1 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'}`}>
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="opacity-70 mb-4 h-12 overflow-hidden">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.techStack.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded dark:bg-slate-800 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {proj.githubUrl && <a href={proj.githubUrl} className="text-sm flex items-center gap-1 font-bold"><Github className="w-4 h-4"/> Code</a>}
                  {proj.liveUrl && <a href={proj.liveUrl} className="text-sm flex items-center gap-1 font-bold" style={{ color: primaryColor }}><Globe className="w-4 h-4"/> Demo</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderClassic = () => (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-900 text-zinc-100' : 'bg-zinc-50 text-zinc-900'} p-4 md:p-12`}>
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-zinc-800 border dark:border-zinc-700">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Sidebar */}
          <aside className="md:col-span-4 p-8 border-r border-zinc-100 dark:border-zinc-700" style={{ backgroundColor: isDark ? '' : '#fafafa' }}>
            <img src={profile.photoUrl} className="w-full aspect-square object-cover rounded-lg shadow-lg mb-8" />
            
            <section className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Contact</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 opacity-50"/> {profile.social.email}</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 opacity-50"/> {profile.location}</li>
                {profile.social.linkedin && <li className="flex items-center gap-2"><Linkedin className="w-4 h-4 opacity-50"/> LinkedIn</li>}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Expertise</h2>
              <ul className="space-y-4">
                {profile.skills.map((s, i) => (
                  <li key={i}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>{s.name}</span>
                      <span className="opacity-50">{s.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div className="h-full" style={{ backgroundColor: primaryColor, width: s.level === 'Advanced' ? '100%' : s.level === 'Intermediate' ? '65%' : '35%' }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-8 p-12">
            <header className="mb-12">
              <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">{profile.name}</h1>
              <p className="text-xl font-medium tracking-tight" style={{ color: primaryColor }}>{profile.jobTitle}</p>
            </header>

            <section className="mb-12">
              <h2 className="text-sm font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-6 uppercase tracking-widest">About Me</h2>
              <p className="leading-relaxed opacity-80">{profile.bio}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-sm font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-6 uppercase tracking-widest">Experience</h2>
              {profile.experience.map(exp => (
                <div key={exp.id} className="mb-8 last:mb-0">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <span className="text-xs opacity-50 italic">{exp.duration}</span>
                  </div>
                  <p className="text-sm font-bold mb-3 opacity-70">{exp.company}</p>
                  <p className="text-sm leading-relaxed opacity-70">{exp.description}</p>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-sm font-bold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-6 uppercase tracking-widest">Selected Works</h2>
              <div className="grid grid-cols-1 gap-6">
                {profile.projects.map(p => (
                  <div key={p.id} className="group p-4 rounded border border-zinc-100 dark:border-zinc-700 hover:border-zinc-400 transition-colors">
                    <h4 className="font-bold flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                      {p.title} <ExternalLink className="w-3 h-3"/>
                    </h4>
                    <p className="text-xs opacity-60 mt-1">{p.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );

  return templateId === 'classic' ? renderClassic() : renderModern();
};

export default TemplateRenderer;
