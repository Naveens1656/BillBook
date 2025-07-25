// This is the updated PartiesPage.js using the video-based layout
import React, { useState } from 'react';
import PartyList from '../components/PartyList';
import CreatePartyForm from '../components/CreatePartyForm';
import { initialParties } from '../data/mockParties';
import { v4 as uuidv4 } from 'uuid';

const PartiesPage = () => {
  const [parties, setParties] = useState(initialParties);
  const [categories, setCategories] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const addParty = (party) => {
    setParties([...parties, { ...party, id: uuidv4() }]);
    setShowCreateForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Parties</h1>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium text-sm mr-2">
              All Parties: {parties.length}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-sm mr-2">
              To Collect: ₹0
            </span>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium text-sm">
              To Pay: ₹0
            </span>
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg"
          >
            + Create Party
          </button>
        </div>
        <PartyList parties={parties} />
      </div>
      {showCreateForm && (
        <div className="bg-white shadow-lg rounded-xl p-6">
          <CreatePartyForm
            onAddParty={addParty}
            categories={categories}
            setCategories={setCategories}
          />
        </div>
      )}
    </div>
  );
};

export default PartiesPage;
