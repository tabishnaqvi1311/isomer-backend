require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
const app = express();
const port = 8181 || process.env.PORT;
const authRouter = require("./routes/authRoutes.js")
const userRouter = require("./routes/userRoutes.js");
const startupRouter = require("./routes/startupRoutes.js")

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

// routes
app.use("/api", authRouter)
app.use("/api/user", userRouter);
app.use("/api/startup", startupRouter);

//start express apppp!!!!!
app.listen(port, async() => {
    await connectToMongo(process.env.MONGO_URI);
    console.log(`Server Alive On http:localhost:${port}`);
})


