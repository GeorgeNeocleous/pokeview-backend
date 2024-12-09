const express = require("express");

// Creates an instance of the Express server system
const app = express();

// localhost:3000
// domainname:port/
// serverInstance.verb(path, callback)
app.get("/", (request, response) => {
    response.json({
        message:"Hello world!"
    });
});

module.exports = {
    app
}