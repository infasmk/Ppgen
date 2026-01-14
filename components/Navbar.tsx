
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, FileText, User, Settings, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dashboard', icon: Layout, label: 'Dashboard' },
    { path: '/editor', icon: Settings, label: 'Builder' },
    { path: '/preview', icon: User, label: 'Portfolio' },
    { path: '/resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">FolioStack</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
            <button className="text-slate-500 hover:text-red-600 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          <div className="sm:hidden flex items-center">
             <Link to="/editor" className="p-2 text-slate-600">
               <Settings className="w-6 h-6" />
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
