const express = require("express");
const app = express();
const { userRouter } = require("./route/userRoute");
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://admin:gHGOljyGupibATjP@mongodbtutorial.gd13xga.mongodb.net/BlogService?retryWrites=true&w=majority";

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("debug", true); //콘솔에 query 찍음
    console.log("MongoDB connected");
    app.use(express.json());

    app.use("/user", userRouter); //미들웨어 추가

    app.listen(3000, () => console.log("server listening on port 3000"));
  } catch (err) {
    console.log({ err });
  }
};

server();
