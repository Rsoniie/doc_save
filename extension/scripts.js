const handleSave = async () => {
    try {
        const response = await fetch('http://localhost:3000/content/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        alert("Saved Successfully");
    } catch (err) {
        console.log("Error in saving", err);
        alert("Failed to save. Check the console.");
    }
};

document.getElementById('floatButton').addEventListener('click', handleSave);
