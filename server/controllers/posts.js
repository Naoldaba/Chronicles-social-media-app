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

export const createPosts= async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);

    } catch(e){
        res.status(409).send("failed");
    }
}

export const updatePost = async (req, res)=>{
    const {id:_id} = req.params;
    const post=req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id");

    try{
        const updatedPost=await PostMessage.findByIdAndUpdate(_id, post, {new:true})
        res.status(200).json(updatedPost);
    }catch(err){
        res.status(400).send('unable to update post')
    }
}

export const deletePost = async(req, res) => {
    const {id:_id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send("No post with this Id");

    try {
        await PostMessage.findByIdAndDelete(_id);
        return res.status(204).json({message: "Post deleted successfully"});
    } catch (error) {
        return res.status(400).json({'msg': "unable to delete post"})
    }
}