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

