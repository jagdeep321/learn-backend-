import mongoose from "mongoose";

export const ConnectDatabse = async () => {
    
    

    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("database connected..");

    } catch (error) {
        console.log(error);
    }
}