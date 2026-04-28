import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [shrinking, setShrinking] = useState(false);

  useEffect(() => {
    // Start shrinking/fading out just before the 3 second mark
    const outTimer = setTimeout(() => {
      setShrinking(true);
    }, 2500);

    // Call onComplete after 3 seconds
    const timer = setTimeout(() => {
      if(onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(outTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 min-h-screen bg-white flex flex-col items-center justify-center z-50">
      <div 
        className={`transition-all duration-500 ease-in-out ${shrinking ? 'opacity-0 scale-110' : 'animate-fade-in-scale'}`}
      >
        <div className="flex flex-col items-center gap-4">
          <img src="/logo.jpg" alt="Pratap Vidhya Mandir Logo" className="w-40 h-40 object-contain drop-shadow-2xl" />
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-wider mt-4">
            Pratap Vidhya Mandir
          </h1>
          <p className="text-[#7be17b] font-medium uppercase tracking-[0.3em] text-sm mt-2 font-bold">
            College Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
