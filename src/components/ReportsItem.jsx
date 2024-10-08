import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin, Card, message } from "antd";
import axios from "axios";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export const ReportsItem = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState([]);

  const getMimeType = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    const mimeTypes = {
      pdf: "application/pdf",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      txt: "text/plain",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      csv: "text/csv",
      mp4: "video/mp4",
      mp3: "audio/mpeg",
    };

    return mimeTypes[extension] || "application/octet-stream";
  };

  useEffect(() => {
    const fetchFile = async () => {
      const owner = import.meta.env.VITE_GITHUB_OWNER;
      const repo = import.meta.env.VITE_GITHUB_REPO;
      const path = import.meta.env.VITE_GITHUB_REPO_PATH;
      const token = import.meta.env.VITE_GITHUB_TOKEN_PUBLIC;

      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const url = isLocal 
      ? `https://api.github.com/repos/${owner}/${repo}/contents/${path}/${id}` 
      : `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}/${id}`;

      setLoading(true);
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3.raw",
          },
          responseType: "blob",
        });

        const currentFileUrl = window.URL.createObjectURL(
          new Blob([response.data], { type: getMimeType(id) })
        );

        setDocs([{ uri: currentFileUrl }]);
      } catch (error) {
        console.error("Error fetching files:", error);
        message.error("Failed to fetch files from GitHub.");
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [id]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-[170px] flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{id}</h1>
      <Card
        style={{ width: "100%", maxWidth: 1300 }}
        bodyStyle={{ padding: 20, display: "flex", justifyContent: "center" }}
      >
        <Spin spinning={loading} tip="Loading...">
          <div id="viewer" style={{ padding: "20px" }}>
            {docs.length > 0 && (
              <DocViewer
                documents={docs}
                pluginRenderers={DocViewerRenderers}
                theme={{
                  primary: "#5296d8",
                  secondary: "#ffffff",
                  tertiary: "#5296d899",
                  textPrimary: "#ffffff",
                  textSecondary: "#5296d8",
                  textTertiary: "#00000099",
                  disableThemeScrollbar: false,
                }}
              />
            )}
          </div>
        </Spin>
      </Card>
    </div>
  );
};
