const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
    investor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    funded_startup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup"
    },
    funded_ent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    currency: String,
    status: String,
    expected_roi: String,
    verified: Boolean,
    amount: String,
});

const Investment = mongoose.model("Investment", investmentSchema);

module.exports = Investment;