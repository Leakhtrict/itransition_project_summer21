const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

require("dotenv").config();

const db = require('./models');

const userRouter = require('./routes/Users');
app.use('/users', userRouter);
const collectionRouter = require('./routes/Collections');
app.use('/collections', collectionRouter);
const itemRouter = require('./routes/Items');
app.use('/items', itemRouter);
const commentRouter = require('./routes/Comments');
app.use('/comments', commentRouter);
const likeRouter = require('./routes/Likes');
app.use('/likes', likeRouter);
const tagRouter = require('./routes/Tags');
app.use('/tags', tagRouter);
const cloudinaryRouter = require('./routes/CloudinaryUpload');
app.use('/cloudinaryUpload', cloudinaryRouter);


db.sequelize.sync().then(() => {
    server.listen(process.env.PORT || 3001, () => {
        console.log("Server is OK!");
    });

    io.on("connection", socket => {
        socket.on("sendComment", (data) => {
            socket.broadcast.emit("emitSendComment", data);
        });

        socket.on("disconnect", () => {
            console.log("User " + socket.id + " disconnected");
        });
    });
});