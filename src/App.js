import React, { useState } from 'react';
import PartyList from './components/PartyList';
import CreatePartyForm from './components/CreatePartyForm';
import Header from './components/Header';
import PartyStats from './components/PartyStats';
import BulkUploadBanner from './components/BulkUploadBanner';

function App() {
  const [parties, setParties] = useState([
    { name: 'Cash Sale', category: '-', mobile: '6380590369', type: 'Customer', balance: 0 },
  ]);

  const [showForm, setShowForm] = useState(false);

  const addParty = (party) => {
    setParties([...parties, party]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <div className="bg-white p-6 rounded-lg shadow">
        <PartyStats parties={parties} />
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            onClick={() => setShowForm(!showForm)}
          >
            + Create Party
          </button>
        </div>
        <PartyList parties={parties} />
        {showForm && <CreatePartyForm onAdd={addParty} />}
        <BulkUploadBanner />
      </div>
    </div>
  );
}

export default App;
