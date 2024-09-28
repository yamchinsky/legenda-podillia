import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Typography, Spin } from 'antd';
import axios from 'axios';
import { FileTextOutlined } from '@ant-design/icons';

const { Text } = Typography;

export const Reports = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      const owner = import.meta.env.VITE_GITHUB_OWNER;
      const repo = import.meta.env.VITE_GITHUB_REPO;
      const path = import.meta.env.VITE_GITHUB_REPO_PATH;
      const token = import.meta.env.VITE_GITHUB_TOKEN_PUBLIC;

      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
      setLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github.v3+json',
          },
        });

        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
        alert('Failed to fetch files from GitHub.');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Reports Page</h1>
      <Spin spinning={loading}>
        <Row gutter={[16, 16]} justify="center" style={{ justifyContent: 'center' }}>
          {files.map((file) => (
            <Col key={file.sha} xs={16} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ textAlign: 'center' }}
                cover={<FileTextOutlined style={{ fontSize: 48, color: '#5296d8', padding: '20px 0' }} />}
                onClick={() => window.open(`/reports/${file.name}`, '_blank')}
              >
                <Text ellipsis={{ tooltip: file.name }} style={{ display: 'block', maxWidth: '100%' }}>
                  {file.name}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Spin>
    </div>
  );
};
