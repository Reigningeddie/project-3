require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const initDb = require("./config/initDb");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const errorMiddleware = require("./routes/errorMiddleware");
const sRouter = require("./routes/sockets");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 3001;

const router = express.Router();

// array of all lines
var line_history = [];

io.on("connection", (socket) => {
  // chat -component
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
  // Draw -component
    // send draw history to new client
  for (var i in line_history) {
    socket.emit("draw_line", { line: line_history[i] } );
  }
    // add handler for message type "draw_line"
  socket.on("draw_line", function (data) {
      // add recieved line to history
      line_history.push(data.line);
      // send line to all clients
      io.emit("draw_line", { line: data.line });
  })
  // disconnect
  socket.on("disconnect", () => {
    console.log("user logged off");
  })
});

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDb();

// Serve up static assets in production (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(authRouter, usersRouter, router, sRouter, errorMiddleware);

// Send all other requests to react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
