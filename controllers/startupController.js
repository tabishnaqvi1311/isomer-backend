const Startup = require("../models/Startup");
const User = require("../models/User");

const startupController = {
    create: async (req, res) => {
        const {
            name,
            description,
            industry_sector,
            // funding_recieved,
            funding_required,
            // business_plan,
            // pitch_deck,
            // verified,
            country_based,
        } = req.body;

        try {
            const newStartup = await Startup.create({
                name,
                description,
                industry_sector,
                funding_recieved: "",
                business_plan: "",
                pitch_deck: "",
                verified: false,
                country_based
            });

            await User.updateOne({ business: newStartup._id });

            return res.status(201).json({ id: newStartup._id });

        } catch (error) {
            console.log(error);
        }
    },
    get: async (req, res) => {
        const { id } = req.params;

        const startup = await Startup.findOne({ _id: id });
        if (!startup) return res.status(404).json("not found");

        return res.status(200).json({ startup });
    },
    getMany: async (req, res) => {
        const startups = await Startup.find({});

        for (const startup of startups) {
            const user = await User.findOne({ business: startup._id });
            if (user) {
                startup.user = user;
            }
        }

        return res.status(200).json({ startups });
    }
}

module.exports = startupController