import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

export const UploadReports = ({ token }) => {
  const [fileList, setFileList] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const customRequest = ({ onSuccess }) => {
    onSuccess('ok');
  };

  const handleFileUpload = async ({ fileList: newFileList }) => {
    if (isUploading) return;
    setIsUploading(true);

    const uniqueFiles = new Map();

    newFileList.forEach((file) => {
      const fileKey = `${file.name}-${file.size}`;
      if (!uniqueFiles.has(fileKey)) {
        uniqueFiles.set(fileKey, file.originFileObj);
      }
    });

    setFileList(newFileList);

    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const path = import.meta.env.VITE_GITHUB_REPO_PATH;

    for (const file of uniqueFiles.values()) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const content = btoa(reader.result);
        const filePath = `${path}/${file.name}`;
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

        try {
          await axios.put(
            url,
            {
              message: `Add ${file.name}`,
              content,
              committer: {
                name: owner,
                email: 'y.p.p@i.ua',
              },
            },
            {
              headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
              },
            }
          );

          alert(`File ${file.name} uploaded successfully.`);
        } catch (uploadError) {
          console.error('Error uploading file:', uploadError);
          alert(`Failed to upload ${file.name} to GitHub.`);
        } finally {
          setIsUploading(false);
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Upload Reports</h1>
      <Upload
        multiple
        accept=".xls,.xlsx,.txt,.doc,.docx,.jpg,.jpeg,.png,.svg,.img"
        fileList={fileList}
        onChange={handleFileUpload}
        customRequest={customRequest}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />} disabled={isUploading}>
          Upload Files
        </Button>
      </Upload>
    </div>
  );
};
