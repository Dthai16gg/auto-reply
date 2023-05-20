// index.js

// Example: Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "autoReply") {
    const senderId = sender.tab.id;
    const replyMessage = message.message;

    // Perform the auto-reply logic and send a response back if needed

    // Example: Send a response back to the content script
    sendResponse({ success: true });
  }
});
