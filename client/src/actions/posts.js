import * as api from '../services';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKEPOST } from '../reducers/posts';

export const getPosts = () => async (dispatch)=>{
    try{
        const {data} = await api.fetchPosts();
        dispatch(FETCH_ALL(data));
    }catch(err){
        console.log(err);
    }
}

export const createPost = (newPost) => async (dispatch) =>{
    try{
        const {data} = await api.makePost(newPost);
        dispatch(CREATE(data))
    } catch(err){
        console.log(err)
    }
}

export const updatePost = (id, upPost) => async (dispatch) => {
    try{
        const {data} = await api.updatePost(id, upPost);
        dispatch(UPDATE(data));

    } catch (err){
        console.log(err.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch(DELETE(id));
    } catch (error) {
        console.log(error);
    }
}