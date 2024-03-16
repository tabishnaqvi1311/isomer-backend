const User = require("../models/User");

const userController = {
    getUser: async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).json("Id Not Sent");

        const user = await User.findOne({_id: id});
        if (!user) return res.status(404).json("Not Found");

        return res.status(200).json({ user });
    }
}

module.exports = userController


