chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTabInfo") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                sendResponse({ error: "No active tab found." });
                return;
            }

            const activeTab = tabs[0];
            sendResponse({ title: activeTab.title, url: activeTab.url });
        });

        return true; 
    }
});
