const http = require("http");
const express = require("express");
const path = require("path");
const userRouter = require("./routes/users");
const partieRouter = require("./routes/partie");
//const productRouter = require("./routes/products");
const { addchat } = require("./controller/usersController");
const {addpartiesocket}=require('./controller/partieController')
const mongo = require("mongoose");
const db = require("./config/db.json");
const employé = require("./models/employé");
mongo
  .connect(db.urlnew)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
app.use(express.json());
app.use("/users", userRouter);
app.use("/user", partieRouter);
app.use("/employé", employéRouter);
//app.use("/products", productRouter);
const server = http.createServer(app, console.log("server run!!!"));
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("user connected");

  socket.emit("msg", "user connected");

  socket.on("partie", (data) => {
    addpartiesocket(data)
    io.emit("partie", data);
  });

    socket.on("aff", async(data) => {
      const datanew= await aff(data)
      io.emit("aff", datanew);
    });


  socket.on("msgname", (data) => {
    console.log(data);
    addchat(data.msg);
    io.emit("msgname", data);
  });

  socket.on("typing", (data) => {
    console.log(data);
    socket.broadcast.emit("typing", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");

    io.emit("msg", "user disconnected");
  });
});

server.listen(3000);
