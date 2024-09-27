import React, { useState } from 'react';
import axios from 'axios';

export const AuthForm = ({ setToken }) => {
  const [inputToken, setInputToken] = useState('');
  const [error, setError] = useState('');

  const handleTokenValidation = async (e) => {
    e.preventDefault();

    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const url = `https://api.github.com/repos/${owner}/${repo}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${inputToken}`,
        },
      });

      if (!response.data.permissions.push) {
        throw new Error('Token does not have write access.');
      }

      setToken(inputToken);
      setError('');
      alert('Token validated successfully! Access granted.');
    } catch (error) {
      setError('Invalid token or insufficient permissions. Please enter a valid private GitHub token with write access.');
      console.error('Invalid GitHub token:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleTokenValidation} className="flex flex-col items-center gap-4 p-6 bg-gray-200 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Enter Private Token to Access</h2>
        <input
          type="password"
          placeholder="Enter GitHub private token"
          value={inputToken}
          onChange={(e) => setInputToken(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};
