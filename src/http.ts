import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import './database';
import { routes } from './routes';
import cors from 'cors';

const app = express();
const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
io.on("connection", (socket: Socket) => {
  console.log("Connected as: ", socket.id);
});


app.use(express.json());

app.use(routes);

export { http, io };