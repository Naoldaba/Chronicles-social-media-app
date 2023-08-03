import {StyledCard, StyledCardMedia, Overlay, Overlay2, StyledGrid, Title, Details, CardActionsStyled} from './styles';
import { CardContent, Button, Typography} from "@mui/material";
import {useDispatch} from 'react-redux';
import moment from 'moment';
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import Delete from "@mui/icons-material/Delete";
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import {deletePost, likePost} from '../../../actions/posts'



const Post = ({post, setCurrId})=>{
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = ()=>{
        if (post.likes.length > 0){
            return post.likes.find((like)=>like ===user?.profileInfo?.googleId || user?.profileInfo?._id)
            ? (
                <> <ThumbUpAlt fontSize='small'/>&nbsp;{post.likes.length >2 ? `You and ${post.likes.length-1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
                <> <ThumbUpAltOutlined fontSize='small'/>&nbsp;{post.likes.length}{post.likes.length===1 ? 'Like' : 'Likes'} </>
            )
        } 
        return <> <ThumbUpAltOutlined fontSize='small' />&nbsp;Like </>;
    };

    return ( 
        <StyledCard>
            <StyledCardMedia image={post.selectedFile} title='post.title'/>
            <Overlay>
                <Typography variant='h6' >{post.name}</Typography>
                <Typography variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
            </Overlay>
            <Overlay2>
                {(user?.profileInfo?.googleId ===post?.creator || user?.profileInfo._id === post?.creator) && (
                    <Button style={{color: 'white'}} size='small' onClick={()=>setCurrId(post._id)} >
                        <MoreHoriz fontSize='default' />
                    </Button>
                )}
            </Overlay2>
            <Details> 
                <Typography variant='body2' color='textSecondary' >{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </Details>
            <Title variant='h5' gutterBottom >{post.title}</Title>
            <CardContent>
                <Typography variant='body2' color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>
            <CardActionsStyled>
                <Button disabled={!user?.profileInfo} size='small' color='primary' onClick={()=>{dispatch(likePost(post._id))}} >
                    <Likes/>
                </Button>
                {(user?.profileInfo?.googleId ===post?.creator || user?.profileInfo._id === post?.creator) && (
                    <Button size='small' color='primary' onClick={()=>{dispatch(deletePost(post._id))}} >
                        <Delete fontSize='small' />
                        Delete
                    </Button>
                )}
            </CardActionsStyled>
        </StyledCard>
    )
}

export default Post;