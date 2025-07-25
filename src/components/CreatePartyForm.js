import { useState } from 'react';
export default function CreatePartyForm({ onAdd }) {
  const [party, setParty] = useState({
    name: '', category: '-', mobile: '', type: 'Customer', balance: 0
  });

  const handleChange = (e) => {
    setParty({ ...party, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(party);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded mb-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input name="name" placeholder="Party Name" onChange={handleChange} className="border p-2" />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} className="border p-2" />
      </div>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}
