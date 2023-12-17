import mongoose from "mongoose";

const connectDB = async(req, res)=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connect to ${conn.connection.host} in ${process.env.NODE_ENV} mode`)
    } catch (error) {
        
    }
}

export default connectDB;