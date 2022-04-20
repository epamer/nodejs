// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("messageLogged", (user, age, value) => {
//   console.log("event messageLogged has been fired", user, age, value);
// });

// emitter.emit("messageLogged", { name: "boo" }, 33, true);

const Logger = require("./logger");
const logger = new Logger();

logger.on("url:updated", ({ url }) => {
  console.log(url);
});

// here we call the method that fire an event
logger.log("I sent event to the logger and got it back from event");
