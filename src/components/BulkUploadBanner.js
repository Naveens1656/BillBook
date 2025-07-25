export default function BulkUploadBanner() {
  return (
    <div className="bg-blue-50 p-4 rounded flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold">Add Multiple Parties at once</h2>
        <p className="text-gray-600">Bulk upload all your parties to your software using Excel</p>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Upload Excel</button>
    </div>
  );
}
