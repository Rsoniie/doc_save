

const view = document.getElementById("viewButton");
const categoriesModal = document.querySelector('.modal');
categoriesModal.style.display = 'none';

const handleSaveAs = () => {
  categoriesModal.style.display = 'block';
  view.style.display = 'none';
};

const handleSave = async () => {
  const categoryElement = document.querySelector('#categorySelect');
  const selectedCategory = categoryElement.value;

  console.log("Selected Category:", selectedCategory); 

  chrome.runtime.sendMessage({ action: "getTabInfo" }, async (response) => {
    if (response.error) {
      alert(response.error);
      return;
    }

    const { title, url } = response;
    
    const payload = { title, url, category: selectedCategory }; 

    console.log("Payload Sent:", payload);

    try {
      const res = await fetch("http://localhost:3000/content/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok: " + res.statusText);
      }

      alert("Saved Successfully");
      categoriesModal.style.display = 'none'; 
    } catch (err) {
      console.log("Error in saving", err);
      alert("Failed to save. Check the console.");
    }
  });
};

const handleView = async () => {
  window.open("http://localhost:5173/", "_blank");

};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("floatButton");
  if (button) {
    button.addEventListener("click", handleSaveAs);
  } else {
    console.error("Button not found!");
  }

  const confirmBtn = document.getElementById("confirmSave");
  confirmBtn.addEventListener("click", handleSave);
});

view.addEventListener("click", handleView);

