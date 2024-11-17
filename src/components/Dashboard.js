import React from 'react';

function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-6 dark:text-white">Résumé des Statistiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold dark:text-white">Followers</h3>
          <p className="text-4xl mt-4 dark:text-white">10,234</p>
        </div>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold dark:text-white">Vues</h3>
          <p className="text-4xl mt-4 dark:text-white">28,745</p>
        </div>
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold dark:text-white">Likes</h3>
          <p className="text-4xl mt-4 dark:text-white">7,542</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
