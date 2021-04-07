require("dotenv").config();
require("./database");
const express = require("express");
const path = require("path");
const appRoutes = require('./routes');

/*const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const photoRoutes = require("./routes/photoRoutes");
const likeRoutes = require("./routes/likeRoutes");
const commentRoutes = require("./routes/commentRoutes");
const followRoutes = require("./routes/followRoutes");
const feedRoutes = require("./routes/feedRoutes");*/
//const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    "/files", express.static(path.resolve(__dirname, "../", "tmp", "uploads"))
);
app.use(appRoutes);

/*app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/photos", photoRoutes);
app.use("/likes", likeRoutes);
app.use("/comments", commentRoutes);
app.use("/follows", followRoutes);
app.use("/feeds", feedRoutes);*/
//app.use(routes);

app.listen(process.env.PORT || 3333)