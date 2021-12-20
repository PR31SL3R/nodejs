import express from 'express';
const app = express();

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

import path from "path";

import escapeHTML from "escape-html";

io.on("connection", (socket) => {
    // console.log("Welcome ", socket.id);

    socket.on("a client choose a color", (color) => {

        // emits to all sockets but itself
        // socket.broadcast.emit("the server is sending the new color", color);

        // only changes the socket itself
        // socket.emit("the server is sending the new color", color);

        // emits to all sockets in the namespace
        io.emit("the server is sending the new color", escapeHTML(color));
    });  

    // socket.on("disconnect", () => console.log("Goodbye", socket.id));
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve() + "/colors.html");
});

server.listen(8080, (error) => {
    console.log("Server is running on port", 8080);
});