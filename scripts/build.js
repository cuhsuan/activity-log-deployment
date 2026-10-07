const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(
  path.join(__dirname, "..", "src", "index.js"),
  path.join(distDir, "index.js")
);

console.log("Build completed successfully!");
