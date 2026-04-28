import React, { useState } from 'react';

const TeacherDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('admin');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-gray-900 border-l-4 border-[#98FB98] pl-3">
              Pratap Vidhya Mandir <span className="text-gray-400 font-normal text-lg">| Faculty Portal</span>
            </h1>
          </div>
          <button onClick={onLogout} className="text-gray-500 hover:text-gray-700 font-medium">Log out</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Interface Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'admin' 
                  ? 'bg-[#98FB98] text-gray-800 shadow-md' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Administrative Management
            </button>
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ml-1 ${
                activeTab === 'academic' 
                  ? 'bg-[#98FB98] text-gray-800 shadow-md' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              Academic & Live
            </button>
          </div>
        </div>

        {/* Dynamic Views */}
        {activeTab === 'admin' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard title="Student Registration" icon="📝" description="Manual entry form for new students." action={() => alert('Student Registration Module')} />
            <DashboardCard title="Attendance Tracker" icon="📅" description="Mark daily attendance. Triggers absent alerts." action={() => setActiveTab('attendance')} />
            <DashboardCard title="Result Portal" icon="📊" description="Input fields for marks and grades." action={() => alert('Results Module')} />
            <DashboardCard title="Notice Board" icon="📌" description="Post college-wide or class-specific notices." action={() => alert('Notice Board Module')} />
          </div>
        ) : activeTab === 'attendance' ? (
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
               <h3 className="text-xl font-bold flex items-center"><span className="mr-2">📅</span> Live Attendance tracker</h3>
               <button onClick={() => {
                 if(confirm('Release Results to all parents via WhatsApp?')) {
                   alert('SYSTEM: Broadcasting result links to all registered WhatsApp numbers...');
                 }
               }} className="bg-[#98FB98] text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">Release Results 📢</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
               {Array.from({length: 30}).map((_, i) => (
                 <div key={i} className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-center">
                    <p className="font-bold text-gray-700 text-sm mb-3">Student {i+1}</p>
                    <div className="flex justify-center space-x-2">
                       <button className="flex-1 py-1 bg-green-100 text-green-700 rounded text-xs font-bold hover:bg-green-200">P</button>
                       <button onClick={() => {
                          const msg = `ALERT: Your ward (Student ${i+1}) is ABSENT today at Pratap Vidhya Mandir. Please contact the class teacher.`;
                          window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, '_blank');
                       }} className="flex-1 py-1 bg-red-100 text-red-700 rounded text-xs font-bold hover:bg-red-200">A 🚨</button>
                    </div>
                 </div>
               ))}
            </div>
            <button onClick={() => setActiveTab('admin')} className="mt-6 text-sm text-gray-500 hover:text-gray-800">← Back to Dashboard</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Live Class Integration" icon="🎥" description="Schedule & start virtual lectures." action={() => alert('Virtual Class Module')} />
            <DashboardCard title="Resource Vault" icon="📚" description="Upload Class Recordings and Faculty Notes." action={() => alert('Resource Vault')} />
            <DashboardCard title="AI Performance Insights" icon="🧠" description="Predictive modeling of student performances." action={() => alert('AI Insights')} />
          </div>
        )}

      </main>
    </div>
  );
};

const DashboardCard = ({ title, icon, description, action }) => (
  <div className="glass-card bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    <div className="mt-4">
      <button onClick={action} className="text-sm font-medium text-[#7be17b] hover:text-[#5acb5a] transition-colors">
        Access Module &rarr;
      </button>
    </div>
  </div>
);

export default TeacherDashboard;
