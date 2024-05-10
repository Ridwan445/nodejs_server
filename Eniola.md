## EXPRESS JS
### How To Create An Express Server

#### Express.js 
Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js. It is designed for building web applications and APIs

#### Step 1: Download a Code Environment
 Download any code environment of your choice e.g Vscode, Atom, Wordpress, Sublime, Bracket e.t.c

#### Step 2: Download Node.js
Download Node.js on your browser. Click [here](https://Node.js.org) to download.
![alt text](screen.png)
Once the Node.js is installed it come s with a package called npm(Node Package Manager).

#### Step 3: Create a directory
Open your terminal: Use the terminal of your choices then run the following command line
```javascript
// To create a folder;
mkdir Tech_Zone
```
```javascript
// To switch to a folder
cd Tech_Zone
```
```javascript
// To clear
clear
```
#### Step 4: Create a file_name
Create a file in the folder that has been created.
```javascript
// To create a file
touch file.js
```
```javascript
code . // Command to move directly to your vscode
```

#### Step 5: Create a package.json and install express
create a package using **_npm init -y_**, then install express
```javascript
npm init -y // Create a Package;
// What to get :
  "name": "Tech_Zone",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "file.js", // To run the console using npm start
    "nodemon": "file.js", // To run the console using npm run dev
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "javascript",
    "node",
    "express"
  ],
  "author": "",
  "license": "ISC"

```
```javascript
npm install ("express") // Install express
```
#### Step 6: Install devDependies
DevDependencies are the packages a developer needs during development
Install the devDepdencies using  **_npm install nodemon --save-dev_**
**nodemon** is a devDependencies used to run console on the terminal.
```javascript
npm install nodemon --save-dev 
```
#### Step 7: Create a server
```javascript
// Import express to your file
const express = require("express");
// Call the express function
const server = express;

// What the users will get after running the server
server.get( "/",(req, res) => {
  res.send("Hello World");

  // Create any port of your choices from 0 - 65535
  const port = 5050;

  server.listen(port, () => {
    console.log(`Server is running on  http://localhost${port}`);
  })
})
```
#### Lastly: Run the server on the terminal
Run the server using **_npm start_** or **_npm run dev_**

##### Difference between npm start and npm run dev
When using npm start you can only use the server once, this means you have to stop the server before restarting While using npm run dev it will restart itself and it make your work easier