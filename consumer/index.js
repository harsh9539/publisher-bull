const express = require("express");
require("./scheduler.js");

const app = express();
app.use(express.json());

// script.js
console.log('Command-line arguments:', process.argv);

// Your logic to process the arguments
const args = process.argv.slice(2);  // Skip the first two default arguments
console.log('Arguments passed:', args);
const port = process.argv[2] || 3000;
app.listen(port, () => {
  console.log("Server is running on port ",port);
});
