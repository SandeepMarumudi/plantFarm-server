const mongoose=require("mongoose")

const plantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,

    },
    categories:{
        type:[String],
        required:true
    },
    available:{
        type:Boolean,
        default:true,
    },
    image:{
        type:String,
        required:true
    },
    about:{
        type:String
    }
})
const Plants=mongoose.model("Plants",plantSchema)
module.exports=Plants