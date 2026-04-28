import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import './index.css';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [userRole, setUserRole] = useState(null); // 'faculty', 'student', 'parent', 'admin', null

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  if (!userRole) {
    return <Login onLogin={handleLogin} />;
  }

  if (userRole === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  if (userRole === 'faculty') {
    return <TeacherDashboard onLogout={handleLogout} />;
  }

  if (userRole === 'student') {
    return <StudentDashboard onLogout={handleLogout} />;
  }
  
  if (userRole === 'parent') {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow max-w-md text-center">
                <h2 className="text-2xl font-bold mb-4">Parent Inspection View</h2>
                <p className="text-gray-600 mb-6">Welcome! This read-only portal lets you monitor attendance and AI-generated performance reports.</p>
                <button onClick={handleLogout} className="px-4 py-2 bg-[#98FB98] text-gray-800 rounded font-medium">Go Back</button>
            </div>
        </div>
    )
  }

  return <Login onLogin={handleLogin} />;
};

export default App;
