import app from "./app";
import {Request, Response} from "express";
import {PORT} from "./constants/constants";

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
    res.sendfile("./public/index.html");
});

// start the Express server
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
