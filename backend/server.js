const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "app/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/build/index.html`));
});

io.on("connection", function(socket) {
  console.log("user connected");
  socket.on("chat_message", obj => {
    console.log("data", obj);
    io.emit("chat_message", obj);
  });

  socket.on("disconnect", () => {
    console.log("user is diconnected");
  });
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
