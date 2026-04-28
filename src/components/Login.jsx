import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Role detection logic based on prefix
    // Assuming 'FAC' prefix starts for Faculty, 'STU' for Students
    let role = 'student';
    const prefix = userId.substring(0, 3).toUpperCase();
    
    if (prefix === 'FAC') {
      role = 'faculty';
    } else if (prefix === 'PAR') {
      role = 'parent';
    } else if (prefix === 'ADM') {
      role = 'admin';
    } else {
      role = 'student';
    }

    onLogin(role);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#f4fdf4] bg-opacity-50">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#98FB98] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#7be17b] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
        <div className="flex justify-center mb-4">
          <img src="/logo.jpg" alt="College Logo" className="w-24 h-24 object-contain rounded-full shadow-lg border-2 border-[#98FB98]" />
        </div>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 border-b-4 border-[#98FB98] inline-block pb-2 mx-auto sm:flex sm:justify-center w-fit">
          Pratap Vidhya Mandir
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Smart Login Portal
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
        <div className="glass-card py-8 px-4 sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                School ID (e.g., FAC123 or STU456)
              </label>
              <div className="mt-1">
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#98FB98] focus:border-[#98FB98] sm:text-sm transition duration-150"
                  placeholder="Enter ID to auto-detect role"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#98FB98] focus:border-[#98FB98] sm:text-sm transition duration-150"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-gray-800 bg-[#98FB98] hover:bg-[#7be17b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98FB98] transition-colors duration-200"
              >
                Sign in securely
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
