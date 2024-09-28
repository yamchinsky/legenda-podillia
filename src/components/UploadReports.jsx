import { useEffect, useState } from "react";
import {
  Upload,
  Button,
  Card,
  Row,
  Col,
  Input,
  Modal,
  Typography,
  Space,
  message,
} from "antd";
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import axios from "axios";

const { Text } = Typography;

export const UploadReports = ({ token }) => {
  const [fileList, setFileList] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [editingFile, setEditingFile] = useState(null);
  const [newFileName, setNewFileName] = useState("");

  const fetchFiles = async () => {
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const path = import.meta.env.VITE_GITHUB_REPO_PATH;
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      const filesWithDates = await Promise.all(
        response.data.map(async (file) => {
          const commitsUrl = `https://api.github.com/repos/${owner}/${repo}/commits?path=${file.path}&per_page=1`;
          try {
            const commitsResponse = await axios.get(commitsUrl, {
              headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json",
              },
            });
            const lastModified =
              commitsResponse.data[0]?.commit.author.date || "Unknown";
            return { ...file, lastModified };
          } catch {
            return { ...file, lastModified: "Unknown" };
          }
        })
      );

      setFileList(filesWithDates);
    } catch (error) {
      console.error("Error fetching files:", error);
      message.error("Failed to fetch files from GitHub.");
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [token]);

  const customRequest = ({ onSuccess }) => {
    onSuccess("ok");
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

    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const path = import.meta.env.VITE_GITHUB_REPO_PATH;

    for (const file of uniqueFiles.values()) {
      if (!(file instanceof Blob)) {
        console.error("Invalid file type passed to FileReader:", file);
        continue;
      }

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
                email: "y.p.p@i.ua",
              },
            },
            {
              headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          message.success(`File ${file.name} uploaded successfully.`);
          await fetchFiles();
        } catch (uploadError) {
          console.error("Error uploading file:", uploadError);
          message.error(`Failed to upload ${file.name} to GitHub.`);
        } finally {
          setIsUploading(false);
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  const handleRename = async (file) => {
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const path = import.meta.env.VITE_GITHUB_REPO_PATH;
    const newPath = `${path}/${newFileName}`;
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${file.path}`;

    try {
      const getFileResponse = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      const sha = getFileResponse.data.sha;
      const content = getFileResponse.data.content;

      await axios.put(
        `https://api.github.com/repos/${owner}/${repo}/contents/${newPath}`,
        {
          message: `Renamed ${file.name} to ${newFileName}`,
          content,
          sha,
        },
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      message.success(`File renamed successfully.`);
      setEditingFile(null);
      setNewFileName("");
      await fetchFiles();
    } catch (error) {
      console.error("Error renaming file:", error);
      message.error("Failed to rename the file.");
    }
  };

  const handleDelete = async (file) => {
    const fileMetadata = await fetchFileMetadata(file);
    if (!fileMetadata || !fileMetadata.sha) {
      message.error("Unable to retrieve the file information for deletion.");
      return;
    }

    const { sha } = fileMetadata;
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${file.path}`;

    try {
      await axios.delete(url, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
        data: {
          message: `Deleted ${file.name}`,
          sha,
        },
      });

      message.success(`File ${file.name} deleted successfully.`);
      await fetchFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
      if (error.response?.status === 422) {
        message.error(
          "Failed to delete the file. The file might have been modified or deleted already."
        );
      } else {
        message.error(
          "Failed to delete the file. Please check if the file exists and has the correct permissions."
        );
      }
    }
  };

  const fetchFileMetadata = async (file) => {
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${file.path}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!response.data.sha) {
        console.error("Unexpected response format:", response.data);
        message.error("Failed to retrieve the correct file metadata.");
        return null;
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching file metadata:", error);
      message.error("Failed to fetch file metadata.");
      return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-[170px] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Upload Reports</h1>
      <Upload
        multiple
        accept=".xls,.xlsx,.txt,.doc,.docx,.jpg,.jpeg,.png,.svg,.img"
        fileList={fileList.map((file) => ({
          uid: `${file.sha}-${Math.random()}`,
          name: file.name,
          status: "done",
        }))}
        onChange={handleFileUpload}
        customRequest={customRequest}
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />} disabled={isUploading}>
          Upload Files
        </Button>
      </Upload>

      <Row
        gutter={[16, 16]}
        style={{ marginTop: 20, justifyContent: "center", width: "100%" }}
        align="top"
      >
        {fileList.map((file) => (
          <Col
            key={`${file.sha}-${Math.random()}`}
            xs={16}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              title={
                <Text
                  ellipsis={{ tooltip: file.name }}
                  style={{ maxWidth: "100%" }}
                >
                  {file.name}
                </Text>
              }
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    setEditingFile(file);
                    setNewFileName(file.name);
                  }}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(file)}
                  style={{ color: "red" }}
                />,
              ]}
            >
              <Space direction="vertical">
                <Text type="secondary">
                  Last modified: {new Date(file.lastModified).toLocaleString()}
                </Text>
                <Button
                  type="primary"
                  onClick={() => window.open(file.download_url, "_blank")}
                >
                  View File
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={`Rename ${editingFile?.name}`}
        open={!!editingFile}
        onOk={() => handleRename(editingFile)}
        onCancel={() => setEditingFile(null)}
      >
        <Input
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          placeholder="Enter new file name"
        />
      </Modal>
    </div>
  );
};
