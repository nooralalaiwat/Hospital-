const mongoose=require("mongoose");
async function connectDB(uri) {
    try{
        await mongoose.connect(uri)
        console.log("mongoDB connected");
    }catch(err){
    console.error("mongoDB connection:",err);
    process.exit(1);
    }
}
module.exports = connectDB;