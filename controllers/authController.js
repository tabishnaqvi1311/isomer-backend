const User = require("../models/User");
const bcrypt = require("bcrypt");

const authControllers = {

    signup: async (req, res) => {
        const {
            name,
            age,
            email,
            password,
            role,
            country,
            state,
            bio,
            contact,
        } = req.body;

        const userExist = await User.findOne({email: email});
        if(userExist) return res.status(400).json("Already Exist");

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            age,
            email,
            password: hash,
            role,
            country,
            state,
            bio,
            contact,
        });
        return res.status(201).json({id: newUser._id});
    },

    login: async (req, res) => {
        const {email, password} = req.body;

        const userExist = await User.findOne({email: email});
        if(!userExist) return res.status(404).json("User Not Found");

        const checkPass = await bcrypt.compare(password, userExist.password);
        if(!checkPass) return res.status(400).json("Wrong Password");

        return res.status(200).json({id: userExist._id});
    }
}

module.exports = authControllers;