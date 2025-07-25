export default function PartyList({ parties }) {
  return (
    <table className="w-full border text-left mb-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Party Name</th>
          <th className="p-2">Category</th>
          <th className="p-2">Mobile Number</th>
          <th className="p-2">Party Type</th>
          <th className="p-2">Balance</th>
        </tr>
      </thead>
      <tbody>
        {parties.map((p, idx) => (
          <tr key={idx} className="border-b">
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.category}</td>
            <td className="p-2">{p.mobile}</td>
            <td className="p-2">{p.type}</td>
            <td className="p-2">₹ {p.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
