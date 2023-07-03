import {StyledPaper, StyledForm, StyledFileInput, StyledButtonSubmit} from './styles';
import {Typography, TextField} from '@mui/material';
import FileBase from 'react-file-base64';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import {useSelector} from 'react-redux';


const Form = ({currId, setCurrId})=>{

    const dispatch = useDispatch();
    const post = useSelector((state)=>currId ? state.posts.find((post)=>post._id==currId): null);

    const [postData, setPostData] = useState({
        creator:"", title:"", message:"", tags:"", selectedFile:""
    }) 

    useEffect(()=>{
        if(post) setPostData(post);
    }, [post])
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if (currId){
            dispatch(updatePost(currId, postData))
        }else{
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = ()=>{
        setCurrId(null);
        setPostData({creator:"", title:"", message:"", tags:"", selectedFile:""})
    }

    return (
        <StyledPaper>
            <StyledForm noValidate autoComplete='off' onSubmit={handleSubmit} >
                <Typography variant='h6'>{currId ? 'Editing' : 'Creating'} a moment</Typography>
                <TextField name='creator'  variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})}/>
                <TextField name='title'  variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})}/>
                <TextField name='message'  variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})}/>
                <TextField name='tags'  variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})}/>
                <StyledFileInput>
                    <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})}/>
                </StyledFileInput>
                <StyledButtonSubmit variant='contained' color='primary' type='submit' size='large' fullWidth onSubmit={handleSubmit} >Submit</StyledButtonSubmit>
                <StyledButtonSubmit variant='contained' color='secondary' onClick={clear} size='small' fullWidth >Clear</StyledButtonSubmit>
            </StyledForm>
        </StyledPaper>
    )
}

export default Form;