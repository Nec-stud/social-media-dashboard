import React from 'react';

function Dashboard() {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-3xl font-semibold mb-6">Résumé des Statistiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold">Followers</h3>
          <p className="text-4xl mt-4">10,234</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold">Vues</h3>
          <p className="text-4xl mt-4">28,745</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold">Likes</h3>
          <p className="text-4xl mt-4">7,542</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
