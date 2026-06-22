const express = require('express');
const http = require('http');
const {Server} = require("socket.io")
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("message", (data) => {
        console.log(`Message from ${socket.id}: ${data}`);
        io.emit("message", data);
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});

