import { createServer } from "http";
import { Server } from "socket.io";
const log = console.log;

const httpServer = createServer();
const io = new Server(httpServer, {
    // options
});

// standard events/channels
io.on("connection", (socket) => {
    log('connecting', socket.id);
    socket.join("some room");

    socket.on("disconnect", () => {
        log('disconnect', socket.id);
    });
    socket.on("error", (err) => {
        log('error', err);
    });
    socket.on("reconnect", () => {
        log('reconnect');
    });
    socket.on("reconnecting", () => {
        log('reconnecting');
    });
    socket.on("reconnect_failed", () => {
        log('reconnect_failed');
    });
    socket.on("reconnect_error", () => {
        log('reconnect_error');
    });

    // custom events/channels
    socket.on("message", (data) => {
        log('message', data, socket.id);
        // socket.emit("echo", data + socket.id);
        // socket.broadcast.emit("echo", data + socket.id);
        io.to("some room").emit("echo", '1111'); // to all
        // socket.to("some room").emit("echo", '1111'); // to others

    });

    // let counter = 0;
    // setInterval(() => {
    //     counter++;
    //     socket.emit("ping", counter);
    // }, 3000);

});

httpServer.listen(3000);