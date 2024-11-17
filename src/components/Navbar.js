import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
      <button className="bg-gray-700 p-2 rounded hover:bg-gray-600">Mode Sombre</button>
    </nav>
  );
}

export default Navbar;