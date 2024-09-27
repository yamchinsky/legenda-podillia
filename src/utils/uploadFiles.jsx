export async function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    // Read the file content
    const reader = new FileReader();
    reader.onload = async function (event) {
        const content = event.target.result.split(',')[1]; // Get the base64 string

        // GitHub API details
        const owner = 'yamchinsky'; // Replace with your GitHub username
        const repo = 'legenda-podillia-storage';  // Replace with your repository name
        const path = `uploads/${file.name}`;  // Path inside the repo
        const token = '';  // Replace with your GitHub token

        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

        // Create the request payload
        const data = {
            message: `Upload ${file.name}`,
            content: content,
            branch: 'main' // Replace with the branch you want to upload to
        };

        // Make the request to GitHub API
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('File uploaded successfully!');
            } else {
                const error = await response.json();
                console.error(error);
                alert('Error uploading file: ' + error.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to upload file.');
        }
    };

    // Read the file as a Data URL (base64)
    reader.readAsDataURL(file);
}
