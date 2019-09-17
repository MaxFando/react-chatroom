const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

const connections = [];
const messages = {};

app.use(express.static(path.join(__dirname, "app/build")));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/build/index.html`));
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

io.on("connection", function(socket) {
  connections.push(socket);

  socket.on("creat_chatroom", roomId => {
    socket.join(roomId);
  });

  socket.on("chat_message", obj => {
    messages[obj.chatroomId].push(ogj.message);
    io.emit("chat_message", obj);
    socket.broadcast.to(obj.chatroomId).emit(obj);
  });

  socket.on("disconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
  });
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
