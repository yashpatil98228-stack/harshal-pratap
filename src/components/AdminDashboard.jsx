import React, { useState } from 'react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('metrics');
  
  // Dummy data for visual representation, mimicking the standalone features
  const [users, setUsers] = useState([
    { id: 'FAC01', name: 'Prof. Patil', role: 'faculty', status: 'Active' },
    { id: 'STU01', name: 'Rahul Shinde', role: 'student', status: 'Active' }
  ]);

  const handleRegisterTeacher = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    setUsers([...users, {
      id: fd.get('teacherId').toUpperCase(),
      name: fd.get('name'),
      role: 'faculty',
      status: 'Active'
    }]);
    alert('Teacher Registered Successfully!');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-gray-900 border-l-4 border-[#98FB98] pl-3">
              Pratap Vidhya Mandir <span className="text-gray-400 font-normal text-lg">| Admin Portal</span>
            </h1>
          </div>
          <button onClick={onLogout} className="text-gray-500 hover:text-gray-700 font-medium">Log out</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'metrics' ? 'bg-[#98FB98] text-gray-800 shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              System Metrics
            </button>
            <button
              onClick={() => setActiveTab('registry')}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ml-1 ${
                activeTab === 'registry' ? 'bg-[#98FB98] text-gray-800 shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              Teacher Registry
            </button>
            <button
              onClick={() => setActiveTab('governance')}
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all ml-1 ${
                activeTab === 'governance' ? 'bg-[#98FB98] text-gray-800 shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              User Governance
            </button>
          </div>
        </div>

        {activeTab === 'metrics' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex items-center space-x-4">
              <div className="text-4xl">👨‍🎓</div>
              <div><p className="text-sm text-gray-500">Total Students</p><p className="text-2xl font-bold">1</p></div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex items-center space-x-4">
              <div className="text-4xl">👨‍🏫</div>
              <div><p className="text-sm text-gray-500">Faculty Headcount</p><p className="text-2xl font-bold">{users.filter(u=>u.role==='faculty').length}</p></div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex items-center space-x-4">
              <div className="text-4xl">⚙️</div>
              <div><p className="text-sm text-gray-500">System Status</p><p className="text-2xl font-bold text-green-500">Stable</p></div>
            </div>
          </div>
        )}

        {activeTab === 'registry' && (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center"><span className="mr-2">📝</span> Register New Teacher</h3>
            <form onSubmit={handleRegisterTeacher} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input name="name" type="text" required className="w-full px-3 py-2 border rounded-lg focus:ring-[#98FB98] focus:border-[#98FB98]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Portal ID</label>
                   <input name="teacherId" type="text" placeholder="FAC..." required className="w-full px-3 py-2 border rounded-lg focus:ring-[#98FB98] focus:border-[#98FB98]" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                   <input name="password" type="password" required className="w-full px-3 py-2 border rounded-lg focus:ring-[#98FB98] focus:border-[#98FB98]" />
                 </div>
              </div>
              <button type="submit" className="w-full bg-[#98FB98] text-gray-800 font-bold py-3 rounded-lg hover:bg-[#7be17b] transition-colors mt-4">
                Approve & Add Teacher
              </button>
            </form>
          </div>
        )}

        {activeTab === 'governance' && (
          <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center"><span className="mr-2">👥</span> <h3 className="font-bold">Active User Registry</h3></div>
            <div className="divide-y divide-gray-100">
              {users.map((u, i) => (
                <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                  <div>
                    <p className="font-bold text-gray-900">{u.name}</p>
                    <p className="text-xs text-gray-500 uppercase">{u.role} | ID: {u.id}</p>
                  </div>
                  <button className="text-sm font-medium text-red-500 hover:text-red-700">Suspend</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
