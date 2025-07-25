import React, { useState } from 'react';

export default function CreatePartyForm({ onAddParty, categories, setCategories }) {
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', gstin: '', pan: '', balance: 0, type: 'Customer', category: '', billing: '', shipping: '', creditPeriod: 30, creditLimit: 0
  });

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Create Party</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Party Name" value={form.name} onChange={handle} className="border p-2 rounded" />
        <input name="mobile" placeholder="Mobile Number" value={form.mobile} onChange={handle} className="border p-2 rounded" />
        <input name="email" placeholder="Email" value={form.email} onChange={handle} className="border p-2 rounded" />
        <input name="balance" placeholder="Opening Balance" type="number" value={form.balance} onChange={handle} className="border p-2 rounded" />
        <input name="gstin" placeholder="GSTIN" value={form.gstin} onChange={handle} className="border p-2 rounded" />
        <input name="pan" placeholder="PAN Number" value={form.pan} onChange={handle} className="border p-2 rounded" />
        <select name="type" value={form.type} onChange={handle} className="border p-2 rounded">
          <option>Customer</option>
          <option>Supplier</option>
        </select>
        <select name="category" value={form.category} onChange={handle} className="border p-2 rounded">
          <option>Select Category</option>
          {categories.map((c, i) => <option key={i}>{c}</option>)}
        </select>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <textarea name="billing" placeholder="Billing Address" value={form.billing} onChange={handle} className="border p-2 rounded" />
        <textarea name="shipping" placeholder="Shipping Address" value={form.shipping} onChange={handle} className="border p-2 rounded" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <input name="creditPeriod" type="number" placeholder="Credit Period" value={form.creditPeriod} onChange={handle} className="border p-2 rounded" />
        <input name="creditLimit" type="number" placeholder="Credit Limit" value={form.creditLimit} onChange={handle} className="border p-2 rounded" />
      </div>
      <button onClick={() => onAddParty(form)} className="bg-purple-600 text-white px-4 py-2 rounded mt-4">Save</button>
    </div>
  );
}
