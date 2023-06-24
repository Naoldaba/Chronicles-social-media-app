import mongoose  from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts=async (req, res)=>{
    try{    

        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    }catch(error){
        res.status(404).send("unable to create a post");
    }
}

