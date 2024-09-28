import { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import axios from "axios";

export const AuthForm = ({ setToken }) => {
  const [inputToken, setInputToken] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

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
        throw new Error("Token does not have write access.");
      }

      setToken(inputToken);
      setError("");
      message.success("Token validated successfully! Access granted.");
      setIsModalOpen(false);
    } catch (error) {
      setError(
        "Invalid token or insufficient permissions. Please enter a valid private GitHub token with write access."
      );
      console.error("Invalid GitHub token:", error);
    }
  };

  return (
    <Modal
      title="Enter Private Token to Access"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form
        onSubmit={handleTokenValidation}
        className="flex flex-col items-center gap-4"
      >
        <Input
          type="password"
          placeholder="Enter GitHub private token"
          value={inputToken}
          onChange={(e) => setInputToken(e.target.value)}
          className="px-4 py-2 border border-gray-400 rounded"
        />
        <Button type="primary" htmlType="submit" className="font-semibold">
          Submit
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </Modal>
  );
};
