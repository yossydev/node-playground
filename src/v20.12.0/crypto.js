const crypto = require("node:crypto");

const string = "Node.js";
console.log("crypto.hash", crypto.hash("sha1", string));
