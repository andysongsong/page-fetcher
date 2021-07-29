const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");
let url = args[0];
let path = args[1];
request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error); // Print error if error
  }
  fs.writeFile(path, body, (err) => {
    console.log(`Downloaded and saved ${body.length} byte to ${path}`);
  });
});
