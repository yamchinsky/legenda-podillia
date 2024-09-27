import React, { useState } from 'react';
import axios from 'axios';

export const ProtectedRoute = ({ element: Component }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [inputToken, setInputToken] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTokenSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_OWNER}/${import.meta.env.VITE_GITHUB_REPO}`,
        {
          headers: {
            Authorization: `token ${inputToken}`,
          },
        }
      );

      if (response.status === 200) {
        setIsAuthorized(true);
      } else {
        setValidationMessage('Invalid token or insufficient permissions.');
      }
    } catch (error) {
      setValidationMessage('Error validating token. Please try again.');
      console.error('Validation error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthorized) {
    return <Component />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <form
        onSubmit={handleTokenSubmit}
        className="flex flex-col items-center gap-4 p-6 bg-white border border-gray-300 rounded-lg shadow-lg"
        style={{ marginTop: '-50vh' }}
      >
        <h2 className="text-xl font-semibold text-center">Enter Token to Access This Page</h2>
        <input
          type="password"
          placeholder="Enter your GitHub access token"
          value={inputToken}
          onChange={(e) => setInputToken(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded w-full"
        />
        {validationMessage && <p className="text-red-500">{validationMessage}</p>}
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Validating...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};