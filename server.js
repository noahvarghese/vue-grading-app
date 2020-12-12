const express = require("express");
const path = require("path");

(async () => {
    const app = express();

    app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

    // static files (css/js/etc)
    app.get(/^(.+)$/, (req, res) => {
        console.log("static file request: " + req.params[0]);
        res.sendFile(__dirname + req.params[0]);
    });

    const port = 4000;
    app.listen(port, () => {
        console.log(`Server started on port: ${port}`);
    })
})();