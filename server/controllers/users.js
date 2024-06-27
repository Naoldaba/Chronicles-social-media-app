import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signin= async (req, res) => {
    try {
        const {email, password} = req.body;
        const registeredUser = await User.findOne({email});
        if (!registeredUser) res.status(404).json({"msg":"No such user"});

        const isCorrectPwd= bcrypt.compare(password, registeredUser.password);
        if (!isCorrectPwd) res.status(400).json({"msg":"password incorrect"})

        const token = jwt.sign({email: registeredUser.email, id: registeredUser._id}, process.env.SECRET_KEY, {expiresIn: '1h'})

        return res.status(200).json({profileInfo: registeredUser, token});
    } catch (error) {
        return res.status(500).json({"msg":"something went wrong"})
    }
}


export const signup = async (req, res)=>{
    try {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        const existingUser = await User.findOne({email})
        if (existingUser) res.status(400).json({"msg":"User already exists"});

        if (password != confirmPassword ) res.status(400).json({"msg":"password mismatch"})
        const hashedPwd = await bcrypt.hash(password, 12);
        
        const profileInfo = await User.create({email, password: hashedPwd, name: `${firstName} ${lastName}`});
        const token = jwt.sign({email: profileInfo.email, id: profileInfo._id}, process.env.SECRET_KEY, {expiresIn: '1h'})
        console.log('got here')
        return res.status(200).json({profileInfo, token});

    } catch (error) {
        return res.status(500).json({"msg":"something went wrong"})
    }
}