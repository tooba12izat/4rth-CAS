import mongoose from "mongoose";

const uri=process.env.URL

export const connectDb = async () => {
    console.log("entered db function")
    // if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect('mongodb+srv://tooba12izat:X9TiMduHPdwzPU62@cluster0.3hdsz0x.mongodb.net/?retryWrites=true&w=majority')
        console.log("connection established")
    }
    catch(err){
        console.log(err)
    }

}
