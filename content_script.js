// content_script.js

// Example: Send a message from the content script to the background script
chrome.runtime.sendMessage(
  { action: "autoReply", message: "This is an automated reply." },
  (response) => {
    // Handle the response from the background script if needed
    if (response && response.success) {
      console.log("Auto-reply successful");
    }
  }
);
