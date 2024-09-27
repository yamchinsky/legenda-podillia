
import React from 'react';

export const FilePreview = ({ file, previewUrl }) => {
  const openFile = () => {

    if (file.type.startsWith('image/')) {
   
      window.open(previewUrl, '_blank');
    } else if (file.type === 'text/plain') {
   
      window.open(previewUrl, '_blank');
    } else if (file.type.includes('spreadsheet') || file.type.includes('excel') || file.type.includes('sheet')) {
  
      const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(previewUrl)}&embedded=true`;
      window.open(googleDocsUrl, '_blank');
    } else if (file.type.includes('msword') || file.type.includes('wordprocessingml')) {
    
      const googleDocsUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(previewUrl)}&embedded=true`;
      window.open(googleDocsUrl, '_blank');
    } else if (file.type === 'application/pdf') {

      window.open(previewUrl, '_blank');
    } else {
      const downloadLink = document.createElement('a');
      downloadLink.href = previewUrl;
      downloadLink.download = file.name;
      downloadLink.click();
    }
  };

  return (
    <button onClick={openFile} className="text-blue-500 hover:underline">
      {file.name}
    </button>
  );
};
