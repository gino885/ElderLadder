import React, { useState } from 'react';

const LotteryPage = () => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entry submitted: ${entry}`);
    // Add logic to handle the lottery entry
  };

  return (
    <div>
      <h2>Lottery</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="border border-gray-300 p-2"
          placeholder="Enter your name"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LotteryPage;