import express from "express";
import path from "path";
import { createServer } from "http";
import { Server as Socket } from "socket.io";

const app = express();

const server = createServer(app);

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Socket(server);

io.on("connection", (socket) => {
    console.log("Socket", socket);
})

app.get("/", (req, resp) => {
    return resp.json({
        message: "Hello Websocket",
    })
})

export { server, io }