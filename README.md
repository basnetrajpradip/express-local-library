# express-local-library

"Local Library" website written in in Node/Express.

This web application creates an online catalog for a small local library, where users can browse available books and manage them.

---

## Live Preview

Live preview of the web app is [Here](https://pradip-express-local-library.glitch.me/catalog).

---

## Quick Start

To get this project up and running locally on your computer:

1. Set up a Node.js development environment.
2. Once you have node setup install the project in the root of your clone of this repo:

   ```bash
   npm install
   ```

> **Note:** The library uses a MongoDB database hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).So inorder to make the app function, One must create an atlas cluster and add the connection string by creating .env file at root of the project as:

```bash
# .env file
MONGODB_URI="<your mongo db connection string>"
```

> **Note:** Inorder to populate db with sample data, One can use populatedb.js file located at the root of the project as:

```bash
node populatedb "<your mongo db connection string>"
```

3. Run the devlopment server, using the appropriate command line shell for your environment:

   ```bash
   # Linux terminal
   DEBUG=express-locallibrary-tutorial:* npm run devstart

   # Windows Powershell
   $ENV:DEBUG = "express-locallibrary-tutorial:*"; npm start
   ```

4. Open a browser to <http://localhost:3000/> to open the library site.
