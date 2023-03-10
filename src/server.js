import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/site';
import connectDB from './config/connectDB'
require('dotenv').config();


let app = express();

app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

configViewEngine(app);
initWebRoutes(app);

connectDB();
let port = process.env.PORT  || 8069;

app.listen(port, () => {
    console.log("server is working on port : ", +port)
});


