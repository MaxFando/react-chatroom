const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

const connections = [];
const messages = {};
const chats = [];

app.use(express.static(path.join(__dirname, "app/build")));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/app/build/index.html`));
});

app.get("/messages/:chatroomId", (req, res) => {
  const { chatroomId } = req.params;

  messages.hasOwnProperty(chatroomId)
    ? res.send(Object.values(messages[chatroomId]))
    : res.send([]);
});

app.get("/chats", (req, res) => {
  res.send(chats);
});

io.on("connection", function(socket) {
  connections.push(socket);

  socket.on("creat_chatroom", roomId => {
    chats.push(roomId);
    socket.join(roomId);
  });

  socket.on("chat_message", obj => {
    const { chatroomId, message } = obj;
    messages[chatroomId] = [...(messages[chatroomId] || []), obj];

    socket.broadcast.to(chatroomId).emit("chat_message", obj);
  });

  socket.on("disconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
  });
});

const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
