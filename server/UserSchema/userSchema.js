const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // profilePic:{
    //     type:String,
    //     required:true
    // }


    //createdAt updatedAt
},{timestamps:true})

module.exports=mongoose.model('user',userSchema)