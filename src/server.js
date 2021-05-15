require("dotenv").config();
require("./database");
const express = require("express");
const path = require("path");
const appRoutes = require('./routes/index');
const cors = require('cors');
//const timeout = require('connect-timeout');


const app = express();

app.use(cors({
    //origin:true,credentials: true
    origin: 'https://photogramops.herokuapp.com',
    optionsSuccessStatus: 200
    //exposedHeaders: "X-Total-Count"
})); //aqui se podria poner direccion origin: 'ip' o con un array
//app.use(timeout('15s'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
    "/files", express.static(path.resolve(__dirname, "../", "tmp", "uploads"))
);
app.use(appRoutes);

console.log("Database_URL", process.env.DATABASE_URL);
const port = process.env.PORT || 3000

app.listen(port, () => console.log('server started on port', port))
