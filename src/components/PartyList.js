import React from 'react';
export default function PartyList({ parties }) {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
          <tr>
            <th className="px-4 py-2">Party Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Mobile Number</th>
            <th className="px-4 py-2">Party type</th>
            <th className="px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {parties.map((party) => (
            <tr key={party.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{party.name}</td>
              <td className="px-4 py-2">{party.category || '-'}</td>
              <td className="px-4 py-2">{party.mobile}</td>
              <td className="px-4 py-2">{party.type}</td>
              <td className="px-4 py-2">₹ {party.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
