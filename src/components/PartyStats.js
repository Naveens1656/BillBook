export default function PartyStats({ parties }) {
  const total = parties.length;

  const totalCollect = parties
    .filter((p) => p.balanceType === "To Collect")
    .reduce((sum, p) => sum + Number(p.balance || 0), 0);

  const totalPay = parties
    .filter((p) => p.balanceType === "To Pay")
    .reduce((sum, p) => sum + Number(p.balance || 0), 0);

  return (
    <div className="flex gap-4 mb-4">
      <div className="flex-1 bg-purple-100 p-4 rounded">
        <p className="text-purple-700">All Parties</p>
        <h2 className="text-xl font-bold">{total}</h2>
      </div>
      <div className="flex-1 bg-green-100 p-4 rounded">
        <p className="text-green-700">To Collect</p>
        <h2 className="text-xl font-bold">₹{totalCollect}</h2>
      </div>
      <div className="flex-1 bg-red-100 p-4 rounded">
        <p className="text-red-700">To Pay</p>
        <h2 className="text-xl font-bold">₹{totalPay}</h2>
      </div>
    </div>
  );
}
