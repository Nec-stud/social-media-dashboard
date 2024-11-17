import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
      <button
        className="bg-gray-700 dark:bg-gray-600 p-2 rounded hover:bg-gray-600"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
      </button>
    </nav>
  );
}

export default Navbar;
