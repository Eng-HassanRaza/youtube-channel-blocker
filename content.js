let blockedChannels = [];

function updateBlockedChannels() {
  chrome.storage.sync.get(["blockedChannels"], (data) => {
    blockedChannels = data.blockedChannels || [];
    hideBlockedVideos();
  });
}

function hideBlockedVideos() {
  const items = document.querySelectorAll("ytd-video-renderer, ytd-rich-item-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer");

  items.forEach(item => {
    const channelNameElement =
      item.querySelector("#channel-name a") ||
      item.querySelector("ytd-channel-name a") ||
      item.querySelector("#text-container a");

    if (channelNameElement) {
      const channelName = channelNameElement.textContent.trim();
      if (blockedChannels.includes(channelName)) {
        item.style.display = "none";
      }
    }
  });
}

const observer = new MutationObserver(() => {
  hideBlockedVideos();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial fetch
updateBlockedChannels();

// Listen for changes to storage (if settings updated)
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && changes.blockedChannels) {
    blockedChannels = changes.blockedChannels.newValue || [];
    hideBlockedVideos();
  }
});
