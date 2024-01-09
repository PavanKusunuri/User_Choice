import mongoose from "mongoose"

const DataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    runTime: {
        type: Number,
        required: true
    },
    dataType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('data', DataSchema)