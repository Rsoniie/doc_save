const handleSave = async () => {



  categories.style.display = 'block';


  chrome.runtime.sendMessage({ action: "getTabInfo" }, async (response) => {
    if (response.error) {
      alert(response.error);
      return;
    }

    const category = document.querySelector('#categorySelect');
    console.log(category.value);


    const { title, url } = response;
    const payload = { title, url };

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
    } catch (err) {
      console.log("Error in saving", err);
      alert("Failed to save. Check the console.");
    }
  });
};


const categories = document.querySelector('.modal')
categories.style.display = 'none';

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("floatButton");
  if (button) {
    button.addEventListener("click", handleSave);
  } else {
    console.error("Button not found!");
  }
});
