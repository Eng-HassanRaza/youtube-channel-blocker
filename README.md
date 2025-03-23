# 🎯 YouTube Channel Blocker (Chrome Extension)

A lightweight Chrome extension that allows you to block videos from specific YouTube channels. Perfect for cleaning up your YouTube feed, avoiding distractions, or preventing unwanted channels from appearing.

---

## 🚀 Features

- ✅ Automatically hides videos from selected YouTube channels.
- ✅ Works seamlessly across YouTube's homepage, search results, subscriptions, and recommendations.
- ✅ Includes a simple, user-friendly popup for managing blocked channels.
- ✅ Persistent storage using Chrome Sync — retains your settings across browser sessions and devices.
- ✅ Minimal, fast, and privacy-friendly.

---

## 📁 Project Folder Structure

This project includes all of the following files:

- **manifest.json**  
  Contains Chrome extension metadata, permissions, script injection details, and popup configuration.

- **content.js**  
  The primary JavaScript file injected into YouTube pages, responsible for hiding videos from blocked channels.

- **popup.html**  
  The HTML markup for the settings popup (displayed when clicking the extension icon), allowing users to manage their block list.

- **popup.js**  
  JavaScript handling user interactions within the popup—adding, removing, and saving channels to Chrome's persistent storage.

- **icon.png** (optional)  
  The icon displayed in Chrome's toolbar and extensions manager.

- **README.md**  
  Comprehensive documentation file (the file you're currently reading) detailing usage, installation, and project structure.

- **.gitignore**  
  Specifies files and directories Git should ignore when tracking changes.

---

## 🧩 Installation Guide

Follow these simple steps to install this Chrome extension:

1. **Clone or Download the repository**

   ```bash
   git clone https://github.com/your-username/youtube-channel-blocker.git
   ```

   or manually download and unzip the files.

2. **Open Chrome extensions page**

   Go to:  
   ```
   chrome://extensions
   ```

3. **Enable "Developer Mode"**

   Toggle the "Developer mode" switch at the top right corner.

4. **Load the unpacked extension**

   Click on **"Load unpacked"**, and select the downloaded or cloned folder.

5. **Done!**

   The extension is now active. Go to YouTube and click the extension's icon to start managing your blocked channels.

---

## ⚙️ How to Use

- Click the extension's icon in the Chrome toolbar.
- To **add a channel**, enter the exact channel name (case-sensitive) into the input box and click **"Add"**.
- To **remove a channel**, click the **"X"** next to the channel name.
- Changes apply immediately and automatically persist across browser sessions.

---

## 🛠 Technical Details

**Technologies & APIs Used**:

- **JavaScript** (Content and Popup scripts)
- **HTML/CSS** (Popup interface)
- **Chrome Extension API (Manifest V3)**
- **Chrome Storage API (`chrome.storage.sync`)**
- **MutationObserver** (for dynamic DOM changes)

---

## 🔒 Permissions Used

The extension requires minimal permissions:

```json
"permissions": ["storage", "scripting"]
```

These permissions are used to:

- Store and retrieve blocked channel names.
- Inject JavaScript into YouTube pages to hide unwanted videos.

---

## 🙌 Example Usage Scenarios

Use this extension to:

- Avoid clickbait or misleading content channels.
- Block distractions when studying or working.
- Remove unwanted recommended videos from your feed.

---

## 🤝 Contribution Guidelines

Feel free to improve this extension:

1. Fork the repository.
2. Create your feature or bug-fix branch:  
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes clearly:
   ```bash
   git commit -m "Add new-feature or fix bug"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Create a pull request on GitHub.

---

## 📜 License

Licensed under the **MIT License**.  
You're free to use, modify, and distribute this project.

---

## ⭐ Support

If you found this extension helpful, please give it a ⭐ star on GitHub!

