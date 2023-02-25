import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
require('dotenv').config();


let app = express();

app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

configViewEngine(app);
initWebRoutes(app);

let port = process.env.PORT  || 8069;

app.listen(port, () => {
    console.log("server is working on port : ", +port)
});


