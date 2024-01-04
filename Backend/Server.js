import express from "express";
import connectDB from "./Config/db.js";
import dotenv from "dotenv";
import movieRoutes from "./Routes/Movies.js"

dotenv.config()
connectDB()
const app = express();


console.log("HI"+ process.env.MONGOURI)



app.use(express.json())

app.use("/api/movies", movieRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))