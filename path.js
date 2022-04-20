const path = require("path");

console.log(path);

const pathData = path.parse(__filename);
console.log(pathData);

const pathData2 = path.parse(__dirname);
console.log(pathData2);

// parent's folder name
console.log(path.dirname(__dirname));

// learn more:
// path.join()
// path.resolve()
