import mongoose from "mongoose";


export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "todoserver", })
        .then((c) => console.log(`database connected on ${c.connection.host}`))
        .catch((e) => console.log(e));
}