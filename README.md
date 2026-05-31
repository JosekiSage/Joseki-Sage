# Joseki Sage

A browser-based Go joseki training application.

Live app: **[josekisage.github.io/Joseki-Sage](https://josekisage.github.io/Joseki-Sage/)**

---

## Overview

Joseki Sage lets you build a personal joseki library, study sequences in an interactive editor, and test your recall in a fully-featured practice mode. It runs entirely in the browser as a single HTML file — no server, no account, no installation required.

---

## Features

### Library
- Organize joseki into folders (Default and Custom libraries)
- Enable or disable joseki for practice individually or by folder
- Real-time search across joseki names and folder names
- Import and export your full library as JSON
- Default library fetched automatically on first visit when served over HTTP

### Editor
- Place moves, setup stones, and tenuki moves on any board size (9×9, 13×13, 19×19)
- Full board view, half-board, and quarter-board cropped views with rotation
- Annotate positions with letters (A–Z) or triangle markers
- Write position comments for any node in the tree
- Create conditional setup branches to explore how joseki change when specific stones exist elsewhere on the board (e.g. ladder breakers)
- Import and export individual joseki as SGF files
- Full tree navigator with zoom and drag
- Flag board positions in the tree for later review

### Practice Mode
- Randomly assigned player color (or choose first/second player)
- Correct continuations scored with streak multiplier (up to 3×)
- Wrong moves reveal valid alternatives
- Hint button shows all valid continuations
- Random board mirroring and color inversion for pattern recognition training
- Start practice from any node in the joseki tree
- Seamless switching between joseki when a move is valid in multiple sequences
- Show Annotations mode pauses only when a position has a comment or annotation
- Settings panel with toggles for hints, annotations, scoring, and transforms
- Session statistics: score, accuracy, streak

---

## Installation & Usage

### Online (GitHub Pages)
Visit [josekisage.github.io/Joseki-Sage](https://josekisage.github.io/Joseki-Sage/) in any modern browser. No installation required.

### Progressive Web App (PWA)
Joseki Sage can be installed as a PWA for a native app-like experience:

**Android (Chrome or Firefox):**
1. Open the app in your browser
2. Tap the browser menu (⋮)
3. Select "Add to Home Screen" or "Install app"
4. Confirm — the app will appear on your home screen

**iOS (Safari):**
1. Open the app in Safari
2. Tap the Share button (□↑)
3. Select "Add to Home Screen"
4. Confirm

**Desktop (Chrome/Edge):**
1. Open the app
2. Click the install icon (⊕) in the address bar, or use the browser menu
3. Click "Install"

Once installed, Joseki Sage works offline after the first visit.

### Offline (standalone file)
The app can be downloaded as a fully self-contained file directly from this repository. Download `index.html`, save it anywhere on your device, and open it in any browser — no internet connection required.

---

## Data Management

Your joseki library is stored in your browser's local storage. To transfer your library between browsers or devices:

1. In the app, open the **Download** menu in the top bar
2. Click **Default Library** or **Custom Library** to download as a JSON file
3. On the target browser/device, use **Import** to load the file

**Note:** Importing a library replaces the existing one entirely. Keep exported backups of important libraries.

---

## Architecture

Joseki Sage is a single-file React application compiled at runtime via Babel standalone. There is no build step — the HTML file is the complete application.

- **React 18** with Babel standalone (JSX in the browser)
- **Web Audio API** for stone placement sounds (zero latency, no audio files)
- **localStorage** for library persistence
- **Service worker** for PWA offline support

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
