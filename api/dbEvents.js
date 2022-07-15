import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    date: String,
    startTime: String,
    endTime: String,    
})

export default mongoose.model("events", eventSchema)