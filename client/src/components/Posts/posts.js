import Post from './Post/post'
import { MainContainer  } from './styles';
import {Grid, CircularProgress} from "@mui/material";
import {useSelector} from 'react-redux';

const Posts = ({setCurrId}) => {
    const posts = useSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress/> : (
            <MainContainer>
                <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrId={setCurrId}/>
                    </Grid>
                ))}
                </Grid>
            </MainContainer>
        )
    );
};

export default Posts;