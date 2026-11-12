import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
    },
    name:{
        type: String,
        required: [true, "Please provide a name"],
    },
    lastlogin:{
        type: Date,
        default: Date.now
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    verificationToken:String,
    verificationTokenExpire:Date,
},{timestamps: true})


export const User = mongoose.model("User", userSchema);
