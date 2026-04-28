import React from 'react';

const StudentDashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-[#f8fcf8]">
      {/* Header */}
      <header className="bg-white shadow relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-gray-900 border-l-4 border-[#98FB98] pl-3">
              Pratap Vidhya Mandir <span className="text-gray-400 font-normal text-lg">| Student Portal</span>
            </h1>
          </div>
          <button onClick={onLogout} className="text-gray-500 hover:text-gray-700 font-medium">Log out</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Welcome Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-[#98FB98]/40 to-white rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, Student!</h2>
          <p className="text-gray-600 mt-1">Here is your academic overview for today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Grid: Left Side */}
          <div className="lg:col-span-2 space-y-8">
            
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><span className="mr-2">📚</span> Resource Vault</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceCard type="PDF" title="Chapter 4: Data Structures" subject="Computer Science" />
                <ResourceCard type="VIDEO" title="Recorded Lecture - 14 Oct" subject="Mathematics" />
                <ResourceCard type="DOC" title="Lab Assignment 2 Guidelines" subject="Physics" />
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><span className="mr-2">📊</span> Recent Results</h3>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Mid-Term: Mathematics</span>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-bold">A (85%)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Mid-Term: Physics</span>
                  <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-full text-sm font-bold">B+ (78%)</span>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar: Right Side */}
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><span className="mr-2">📌</span> Live Notice Board</h3>
              <div className="space-y-4">
                <NoticeItem date="15 Oct" title="Diwali Vacation Schedule Announced" />
                <NoticeItem date="14 Oct" title="Submission deadline extended for CS Project" />
                <NoticeItem date="10 Oct" title="Guest Lecture by Industry Expert this Friday" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

const ResourceCard = ({ type, title, subject }) => (
  <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50 flex items-start space-x-4">
    <div className={`p-3 rounded-lg flex-shrink-0 font-bold text-xs ${type === 'VIDEO' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'}`}>
      {type}
    </div>
    <div>
      <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{subject}</p>
    </div>
  </div>
);

const NoticeItem = ({ date, title }) => (
  <div className="flex items-start space-x-3 group cursor-pointer">
    <div className="text-xs font-bold text-[#5acb5a] w-12 flex-shrink-0 pt-0.5">{date}</div>
    <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{title}</div>
  </div>
);

export default StudentDashboard;
