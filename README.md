# express-local-library

"Local Library" website written in in Node/Express.

---

This web application creates an online catalog for a small local library, where users can browse available books and manage them.

---

## Live Preview

Live preview of the web app is [here](pradip-express-local-library.glitch.me)

## Quick Start

To get this project up and running locally on your computer:

1. Set up a Node.js development environment.
2. Once you have node setup install the project in the root of your clone of this repo:

   ```bash
   npm install
   ```

3. Run the tutorial server, using the appropriate command line shell for your environment:

   ```bash
   # Linux terminal
   DEBUG=express-locallibrary-tutorial:* npm run devstart

   # Windows Powershell
   $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
   ```

4. Open a browser to <http://localhost:3000/> to open the library site.

> **Note:** The library uses a default MongoDB database hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
