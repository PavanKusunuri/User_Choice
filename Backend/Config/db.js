import mongoose from "mongoose"
// const config = require("config")
// const db = process.env.MONGOURI

console.log("************")
console.log(process.env.MONGOURI)

const connectDB = async() => {
    try {
     await mongoose.connect("mongodb://localhost:27017/userChoice")
    }catch(err) {
        console.log(err.message)
        // Exit process with a failure
        process.exit(1)
    }
}

export default connectDB