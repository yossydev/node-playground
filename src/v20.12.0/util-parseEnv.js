const { parseEnv } = require("node:util");
const fs = require("fs");

const envFile = "./src/v20.12.0/development.env";
process.loadEnvFile(envFile);

console.log(
  "parseEnv",
  parseEnv(fs.readFileSync(envFile, { encoding: "utf8" })),
); // { HELLO: 'hello', WORLD: 'world' }
