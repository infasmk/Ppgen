
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProfile, AppRoute } from './types';
import { DEFAULT_USER_PROFILE } from './constants';
import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';
import EditorPage from './views/EditorPage';
import PortfolioPage from './views/PortfolioPage';
import ResumePage from './views/ResumePage';

const App: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('folio_profile');
    return saved ? JSON.parse(saved) : DEFAULT_USER_PROFILE;
  });

  const updateProfile = useCallback((newProfile: UserProfile) => {
    setProfile(newProfile);
    localStorage.setItem('folio_profile', JSON.stringify(newProfile));
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoute.HOME} element={<Navigate to={AppRoute.DASHBOARD} replace />} />
            <Route path={AppRoute.DASHBOARD} element={<Dashboard profile={profile} />} />
            <Route path={AppRoute.EDITOR} element={<EditorPage profile={profile} onUpdate={updateProfile} />} />
            <Route path={AppRoute.PREVIEW} element={<PortfolioPage profile={profile} />} />
            <Route path={AppRoute.RESUME} element={<ResumePage profile={profile} />} />
            <Route path="*" element={<Navigate to={AppRoute.DASHBOARD} replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
