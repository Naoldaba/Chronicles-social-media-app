import {StyledCard, StyledCardMedia, Overlay, Overlay2, StyledGrid, Title, Details, CardActionsStyled} from './styles';
import { CardContent, Button, Typography} from "@mui/material";
import {useDispatch} from 'react-redux';
import moment from 'moment';
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import Delete from "@mui/icons-material/Delete";
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import {deletePost, likePost} from '../../../actions/posts'


const Post = ({post, setCurrId})=>{
    const dispatch = useDispatch();

    return ( 
        <StyledCard>
            <StyledCardMedia image={post.selectedFile} title='post.title'/>
            <Overlay>
                <Typography variant='h6' >{post.creator}</Typography>
                <Typography variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
            </Overlay>
            <Overlay2>
                <Button style={{color: 'white'}} size='small' onClick={()=>setCurrId(post._id)} >
                    <MoreHoriz fontSize='default' />
                </Button>
            </Overlay2>
            <Details>
                <Typography variant='body2' color='textSecondary' >{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </Details>
            <Title variant='h5' gutterBottom >{post.title}</Title>
            <CardContent>
                <Typography variant='body2' color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>
            <CardActionsStyled>
                <Button size='small' color='primary' onClick={()=>{dispatch(likePost(post._id))}} >
                    <ThumbUpAlt fontSize='small' />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>{dispatch(deletePost(post._id))}} >
                    <Delete fontSize='small' />
                    Delete
                </Button>
            </CardActionsStyled>
        </StyledCard>
    )
}

export default Post;