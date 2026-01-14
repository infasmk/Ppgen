
import React from 'react';
import { Link } from 'react-router-dom';
import { UserProfile, AppRoute } from '../types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  Eye, Download, Share2, ArrowRight, CheckCircle, 
  Settings, User, FileText, Globe
} from 'lucide-react';

const analyticsData = [
  { name: 'Mon', views: 400, downloads: 24 },
  { name: 'Tue', views: 300, downloads: 13 },
  { name: 'Wed', views: 500, downloads: 40 },
  { name: 'Thu', views: 280, downloads: 15 },
  { name: 'Fri', views: 590, downloads: 45 },
  { name: 'Sat', views: 190, downloads: 10 },
  { name: 'Sun', views: 250, downloads: 20 },
];

const Dashboard: React.FC<{ profile: UserProfile }> = ({ profile }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, {profile.name.split(' ')[0]}!</h1>
          <p className="text-slate-500">Manage your online presence and resume.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
            <Share2 className="w-4 h-4" /> Share Link
          </button>
          <Link to={AppRoute.EDITOR} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm">
            <Settings className="w-4 h-4" /> Edit Profile
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'Profile Views', value: '1,284', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Resume Downloads', value: '156', icon: Download, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Completion Rate', value: '95%', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              </div>
              <div className={`${stat.bg} p-2 rounded-lg`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6 text-slate-800">Visibility Insights</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} />
                <Tooltip />
                <Area type="monotone" dataKey="views" stroke="#3b82f6" fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions / Recent Activity */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-slate-800">Quick Tools</h3>
            <div className="space-y-3">
              <Link to={AppRoute.PREVIEW} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-md group-hover:bg-blue-200">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">View Live Portfolio</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </Link>
              <Link to={AppRoute.RESUME} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-md group-hover:bg-emerald-200">
                    <FileText className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">Download Resume</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl text-white shadow-lg">
            <h4 className="font-bold mb-2 text-lg">Go Pro!</h4>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              Unlock custom domains, premium templates, and advanced AI content generation.
            </p>
            <button className="w-full py-2 bg-white text-blue-700 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
