import mongoose from "mongoose";
// new keyword, mangose package, scheme property
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLen: 6
    },
})

export default mongoose.model("user", userSchema) 