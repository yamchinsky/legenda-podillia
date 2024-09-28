export async function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (event) {
        const content = event.target.result.split(',')[1];

        const owner = 'yamchinsky';
        const repo = 'legenda-podillia-storage';
        const path = `uploads/${file.name}`;
        const token = '';

        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

        const data = {
            message: `Upload ${file.name}`,
            content: content,
            branch: 'main'
        };

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

    reader.readAsDataURL(file);
}
