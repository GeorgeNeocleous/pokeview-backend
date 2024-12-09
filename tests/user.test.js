// Import of the code we want to test
const {app} = require("../src/server.js");

// Import of a testing helper function from supertest
const request = require("supertest");

describe("Users controller", () => {

    test("Get all users route returns array of users", async () => {

        const response = await request(app).get("/users");
    });

    test("Get all user by ID route returns single user as object", async () => {
        // localhost:3000/users/12345
        let targetUserId = "12345";
        const response = await request(app).get(`/users/${targetUserId}`);
    });

    test("User sign-up route returns single user as object", async () => {
        // POST localhost:3000/user/signup - create user - username password then db creates id
        // sends in data
        const response = await request(app)
            .post("/users/signup")
            .send({
                username:"jason", 
                password:"SuperCoolPassword1"
            });

        expect(response.body.username).toBe("jason");
        expect(response.body.password).toBe("EncryptedPassword");
    });

    test("User login route returns single user as object", async () => {
        const response = await request(app)
            .post("/user/login")
            .send({
                username:"testuser1", 
                password:"testpassword1"
            });
    });

    test("User update/edit route returns single user as object", async () => {
        // PATCH localhost:3000/user/12345 
        const response = await request(app)
        .patch("/user/12345")
        .send({
            username:"jason", 
            password:"SuperCoolPassword1"
        });
    });
    // Can verify by sending in JWT in auth header or username password

    test("User delete returns copy of data deleted - number of users deleted or single user as object", async () => {
        // DELETE localhost:3000/user/12345 
        const response = await request(app)
        .delete("/user/12345")
        .send({
            username:"testuser1", 
            password:"testpassword1"
        });
    });


    

})