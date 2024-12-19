const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 20,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true
    }
    // Foreign key?
});


const User = mongoose.model("User", UserSchema)
// Belongs in user collection and is based on the UserSchema

module.exports = {
    User
}



// User
//     Username: {
//         type: string,
//         unique: true,


//     }
//     Password: {
//         type: string,
        
//     }
//     List: Foreign key to a List

// Pokemon likes can potentially be handled in the front-end

// List
//     {
//         Pokemon:
//     }