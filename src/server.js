const express = require("express");
const { User } = require("./models/UserModel");
// const { generateJWT, validateUserAuth } = require("./functions/jwtFunctions");

// Creates an instance of the Express server system
const app = express();

app.use(express.json());
// Enable this if you want front-ends to have more freedom about how they make requests
// eg. this is for HTML URL-encoded forms
// app.use(express.urlencoded({exrended: true}));

// localhost:3000
// domainname:port/
// serverInstance.verb(path, callback)
app.get("/", (request, response) => {
    response.json({
        message:"Hello world!"
    });
});



// Takes the username and password from a front end form
app.post("/signup", async (request, response) => {
    // check that a username and password are provided in request.body
    let username = request.body.username;
    let password = request.body.password;

    // If no username or password is provided throws an error 400
    if(!username || !password){
        response.status(400).json({
            message:"Incorrect or missing sign-up credentials provided."
        });
    }
    // make a user in the DB using the username and password
    let newUser = await User.create({username: username, password: password});
    // make a JWT based on the username and userID
    let newJwt = generateJWT(newUser.id, newUser.username);
    // return the JWT
    response.json({
        jwt:newJwt,
        user: {
            id: newUser.id,
            username: newUser.username
        }
    })
})

// Runs a piece of middleware that checks if the user is signed in
// Can run middleware to salt and hash data
app.get("/signinCheck", validateUserAuth, (request, response) => {
    response.json({
        message:"Content available because you are signed in"
    });
})


// app.post("/signup", async (request, response) => {

// })

module.exports = {
    app
}