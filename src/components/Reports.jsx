import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import axios from 'axios';

const { Text } = Typography;

export const Reports = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const owner = import.meta.env.VITE_GITHUB_OWNER;
      const repo = import.meta.env.VITE_GITHUB_REPO;
      const path = import.meta.env.VITE_GITHUB_REPO_PATH;
      const token = import.meta.env.VITE_GITHUB_TOKEN_PUBLIC;

      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json'
          }
        });
        
        console.log(response);
        
        setFiles(response.data);

      } catch (error) {
        console.error('Error fetching files:', error);
        alert('Failed to fetch files from GitHub.');
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Reports Page</h1>
      <List
        dataSource={files}
        renderItem={(file) => (
          <List.Item>
            <a href={`/reports/${file.name}`} target="_blank" rel="noopener noreferrer">
              <Text ellipsis>{file.name}</Text>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
