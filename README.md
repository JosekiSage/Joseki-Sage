# Joseki Sage

A browser-based Go joseki training application.

Live app: [**josekisage.com**](https://www.josekisage.com)

---

## Overview

Joseki Sage lets you build a personal joseki library, study sequences in an interactive editor, and test your recall in a fully-featured practice mode. It runs entirely in the browser as a single HTML file. Your custom library can be synced across devices using Google Drive.

---

## Features

### Library

* Organize joseki into folders (Default and Custom libraries)
* Enable or disable joseki for practice individually or by folder
* Real-time search across joseki names and folder names
* Import and export your full library as JSON
* Default library fetched automatically on first visit when served over HTTP
* **Google Drive sync** keeps your custom library automatically up to date across all devices and browsers

### Editor

* Fully model any sequence of moves on all three sizes of commonly played boards (9×9, 13×13, 19×19)
* Full board view, half-board, and quarter-board cropped views with rotation
* Annotate positions with letters (A–Z) or triangle markers
* Write position comments for any node in the tree
* Create conditional setup branches to explore how joseki change when specific stones exist elsewhere on the board (e.g. ladder breakers)
* Import and export individual joseki as SGF files
* Full tree navigator with zoom and drag
* Flag board positions in the tree for later review

### Practice Mode

* Randomly assigned player color (or choose first/second player)
* Correct continuations scored with streak multiplier (up to 3×)
* Wrong moves reveal valid alternatives
* Hint button shows all valid continuations
* Random board mirroring and color inversion for pattern recognition training
* Start practice from any node in the joseki tree
* Seamless switching between joseki when a move is valid in multiple sequences
* Show Annotations mode pauses only when a position has a comment or annotation
* Settings panel with toggles for hints, annotations, scoring, and transforms
* Session statistics: score, accuracy, streak

---

## Installation & Usage

### Online (GitHub Pages)

Visit [josekisage.github.io/Joseki-Sage](https://josekisage.github.io/Joseki-Sage/) in any modern browser. No installation required.

### Offline use

Joseki Sage works offline on all platforms after your first visit. The app uses a service worker to cache itself in your browser automatically — no configuration needed. Once cached, it loads and runs fully with no internet connection. Your library data is stored locally in your browser and is always available offline.

The only features that require an internet connection are Google Drive sync and the initial fetch of the Default Library.

### Installing as a PWA

Joseki Sage can be installed as a Progressive Web App for a native app-like experience with its own icon and window. Installing is optional — the app works fully in the browser with or without installation, including offline.

**Android (Chrome or Firefox):**

1. Open the app in your browser
2. Tap the browser menu (⋮)
3. Select "Add to Home Screen" or "Install app"
4. Confirm: the app will appear on your home screen

**iOS (Safari):**

1. Open the app in Safari
2. Tap the Share button (□↑)
3. Select "Add to Home Screen"
4. Confirm

**Desktop (Chrome/Edge):**

1. Open the app
2. Click the install icon (⊕) in the address bar, or use the browser menu
3. Click "Install": the app opens in its own window and appears in your taskbar or dock

---

## Data Management

### Manual export and import

Your joseki library is stored in your browser's local storage. To transfer your library between browsers or devices:

1. In the app, open the **Download** menu in the top bar
2. Click **Custom Library** or **Default Library** to download as a JSON file
3. On the target browser/device, use **Import** to load the file

Importing a library replaces the existing one entirely. Keep exported backups of important libraries.

### Google Drive sync

Joseki Sage supports automatic cross-device sync via Google Drive. Once connected, your custom library is saved to Drive automatically after any change and fetched silently on startup.

**To connect:** Tap the **Drive** button in the library top bar → **Connect Google Drive** → sign in and grant permission. The app can only access a single file it creates (`joseki-custom-library.json`). It cannot see any other files in your Drive.

**What is synced:** Your Custom Library only. The Default Library is shared content and is not synced. The `drive.file` OAuth scope is used, which is the narrowest permission available.

**Token expiry:** Google sessions expire after ~1 hour. The Drive button shows an error indicator when this happens, tap it and select Reconnect.

---

## Architecture

Joseki Sage is a single-file React application compiled at runtime via Babel standalone. There is no build step as the HTML file is the complete application.

* **React 18** with Babel standalone (JSX in the browser)
* **Web Audio API** for stone placement sounds (zero latency, no audio files)
* **localStorage** for library persistence
* **Google Drive API** with OAuth 2.0 (`drive.file` scope) for optional cross-device sync
* **Service worker** for PWA offline support

---

## Credits & Acknowledgements

Inspired by [Joseki.cat](https://joseki.cat), an excellent joseki trainer without which this app would not exist.

Default library data sourced from the [OGS Joseki Explorer](https://online-go.com/joseki), a community-maintained database of Go joseki sequences. Full credit for the content belongs to the OGS community contributors.

Stone sounds from [Sabaki](https://github.com/SabakiHQ/Sabaki) by Yichuan Shen, used under the MIT license.

---

## License

[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Free to use, share, and adapt for non-commercial purposes with attribution.

---

## Feedback

Bug reports and suggestions: [josekisage@gmail.com](mailto:josekisage@gmail.com)

If you find Joseki Sage useful: [ko-fi.com/josekisage](https://ko-fi.com/josekisage)
