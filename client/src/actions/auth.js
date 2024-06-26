import * as api from '../services';
import {AUTH} from '../reducers/auth';

export const signin = (formData, navigate) => async (dispatch)=>{
    try {
        const {data} = await api.signIn(formData); 
        dispatch(AUTH(data));
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}


export const signup = (formData, navigate) => async (dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        console.log(data);
        dispatch(AUTH(data));
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}