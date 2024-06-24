import axios from 'axios';

const url='https://chronicles-backend-orcin.vercel.app';

export const fetchPosts = () => axios.get(url);
export const makePost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
