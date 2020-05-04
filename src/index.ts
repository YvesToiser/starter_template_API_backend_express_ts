import app from "./app";
const PORT = process.env.PORT || 3000;

// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
