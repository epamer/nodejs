const EventEmitter = require("events");

const url = "app/some/path";

// const test = new EventEmitter();

// test.on("test", (...rest) => {
//   console.log(rest);
// });

// test.emit("test", 1, 2, 3, "45", [], 33);

class Loger extends EventEmitter {
  log(message) {
    console.log("LOG:", message);
    this.emit("url:updated", { url });
  }
}

module.exports = Loger;

// module.exports.log = log;
// module.exports.url = url;
