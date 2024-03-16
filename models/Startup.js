const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    description: String,
    industry_sector: String,
    funding_recieved: String,
    funding_required: String,
    business_plan: String,
    pitch_deck: String,
    verified: Boolean,
    country_based: String,
}, {timestamps: true})

const Startup = mongoose.model("Startup", startupSchema);

module.exports = Startup;