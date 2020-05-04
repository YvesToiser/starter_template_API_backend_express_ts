import express from "express";
import bodyParser from "body-parser";
import {Routes} from "./config/routes";
import cookieParser from "cookie-parser";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        // Access to static files
        this.app.use('/static',express.static('public'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
    }
}

export default new App().app;
