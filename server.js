const express = require("express");
const path = require("path");

(async () => {
    const app = express();

    app.get("/", res.sendFile(path.join(__dirname, "index.html")));
    const port = 4000;
    app.listen(port, () => {
        console.log(`Server started on port: ${port}`);
    })
})();