
import React from 'react';
import { UserProfile } from '../types';
import TemplateRenderer from '../components/TemplateRenderer';
import { Share2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC<{ profile: UserProfile }> = ({ profile }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="relative">
      {/* Floating Control Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/50 no-print">
        <Link to="/editor" className="p-2 text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="w-[1px] h-6 bg-slate-200"></div>
        <span className="text-sm font-bold text-slate-700 whitespace-nowrap">Live Preview</span>
        <button 
          onClick={handleShare}
          className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Share2 className="w-4 h-4" /> Share
        </button>
      </div>

      <TemplateRenderer profile={profile} />
    </div>
  );
};

export default PortfolioPage;
