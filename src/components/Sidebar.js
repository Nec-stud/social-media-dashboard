import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <ul>
        <li className="mb-4">
          <button className="hover:text-blue-500">Tableau de Bord</button>
        </li>
        <li className="mb-4">
          <button className="hover:text-blue-500">Statistiques</button>
        </li>
        <li className="mb-4">
          <button className="hover:text-blue-500">Paramètres</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
