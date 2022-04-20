const fs = require("fs");

const fsPromise = require("fs/promises");

console.log(fsPromise);

fs.readdir("./", (err, files) => {
  if (err) {
    console.error(error);
    return;
  }
  console.log(files);
});
