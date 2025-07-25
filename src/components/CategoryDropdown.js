import React, { useState } from 'react';

const CategoryDropdown = ({ categories, setCategories, selected, onChange }) => {
  const [newCat, setNewCat] = useState('');

  const handleAddCategory = () => {
    if (newCat.trim()) {
      setCategories([...categories, newCat]);
      onChange(newCat);
      setNewCat('');
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="flex gap-1">
        <input
          type="text"
          placeholder="New Category"
          value={newCat}
          onChange={(e) => setNewCat(e.target.value)}
          className="border p-1 rounded w-full"
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-2 rounded"
          onClick={handleAddCategory}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CategoryDropdown;
