import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade out after 3 seconds
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 3000);

    // Remove component after animation completes (4 seconds total)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${
        isAnimating ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <button 
        title="Close"
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="text-7xl font-bold">
            <span className="text-blue-600 text-8xl">X</span>
            <span className="text-gray-900">Ta</span>
            <span className="text-blue-600 text-8xl">X</span>
            <span className="text-gray-900">Advisor</span>
            <span className="text-blue-600 text-8xl">S</span>
          </h1>
          <p className="mt-4 text-2xl text-gray-600">
            Your Financial Success Partner
          </p>
        </div>
      </div>
    </div>
  );
}