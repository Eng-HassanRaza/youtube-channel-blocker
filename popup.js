const input = document.getElementById("channelInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("channelList");

function loadChannels() {
  chrome.storage.sync.get(["blockedChannels"], (data) => {
    const channels = data.blockedChannels || [];
    list.innerHTML = "";
    channels.forEach((channel, index) => {
      const li = document.createElement("li");
      li.textContent = channel;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.style.color = "red";
      removeBtn.onclick = () => removeChannel(index);

      li.appendChild(removeBtn);
      list.appendChild(li);
    });
  });
}

function addChannel() {
  const name = input.value.trim();
  if (!name) return;

  chrome.storage.sync.get(["blockedChannels"], (data) => {
    const channels = data.blockedChannels || [];
    if (!channels.includes(name)) {
      channels.push(name);
      chrome.storage.sync.set({ blockedChannels: channels }, loadChannels);
    }
  });

  input.value = "";
}

function removeChannel(index) {
  chrome.storage.sync.get(["blockedChannels"], (data) => {
    const channels = data.blockedChannels || [];
    channels.splice(index, 1);
    chrome.storage.sync.set({ blockedChannels: channels }, loadChannels);
  });
}

addBtn.addEventListener("click", addChannel);
document.addEventListener("DOMContentLoaded", loadChannels);
