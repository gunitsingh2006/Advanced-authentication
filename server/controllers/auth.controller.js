import { User } from '../models/user.model.js'
import bycrypt from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';

export const signup = async (req, res) => {
    const { email, password, name} = req.body;
    try {
        if(!email || !password || !name){
            throw new Error("Please provide all required fields")
        }
        const alreadyExists = await User.findOne({email});
        if(alreadyExists) return res.status(400).json({success: false ,message: "User already exists"})

        const hashedPassword = await bycrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpires: Date.now() + 24*60*60*1000 // 24 hr
        })

        await user.save();

        // jwt
        generateTokenAndSetCookie(res, user._id);  
        
        res.status(201).json({success: true, message: "User created successfully", user:{...user._doc, password: undefined,}});
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }    
}
export const login = async (req, res) => {
    res.send('Login route')
}
export const logout = async (req, res) => {
    res.send('Logout route')
}

