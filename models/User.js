const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    password: String,
    role: String,
    country: String,
    state: String,
    bio: String,
    contact: String,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup"
    },
    investments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Investment"
    },
    funds_available: String,
    investment_preferences: String
})

const User = mongoose.model("User", userSchema)

module.exports = User;