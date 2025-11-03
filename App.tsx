
import React from 'react';
import { useAppContext } from './contexts/AppContext.tsx';
import LandingPage from './pages/LandingPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import TeacherRegistration from './pages/teacher/TeacherRegistration.tsx';
import AdminDashboard from './pages/admin/AdminDashboard.tsx';
import TeacherDashboard from './pages/teacher/TeacherDashboard.tsx';

const App: React.FC = () => {
  const { appView, user } = useAppContext();

  const renderContent = () => {
    if (!user) {
      switch (appView) {
        case 'landing':
          return <LandingPage />;
        case 'login':
          return <LoginPage />;
        case 'register':
          return <TeacherRegistration />;
        default:
          return <LandingPage />;
      }
    } else {
      if (user.role === 'admin') {
        return <AdminDashboard />;
      } else {
        return <TeacherDashboard />;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-grow">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;