import express from "express";
import bodyParser from "body-parser";
import {Routes} from "./config/routes";
import cookieParser from "cookie-parser";
import cors from "cors";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        // Allows use to use html file in public folder
        this.app.use(express.static(__dirname + "/public"));
        // Allows us to receive requests with data in json format
        this.app.use(bodyParser.json({limit: "50mb"}));
        // Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cookieParser());
        // Enables cors
        this.app.use(cors());
    }
}

export default new App().app;
