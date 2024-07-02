import React from 'react';
import Posts from '../Posts/posts'; 
import Form from '../Form/form';

import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import { useEffect, useState } from 'react';

import { MainContainer } from '../../styles';
import {Container, Typography, Grow, Grid} from '@mui/material';


const Home = ()=>{
    const [currId, setCurrId] = useState(null);

    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getPosts());
      console.log(currId);
    }, [currId])

    return (
        <Grow in>
            <MainContainer container justify='space-around' alignItems='stretch' spacing={20}>
                <Grid item xs={12} sm={7} >
                    <Posts setCurrId={setCurrId} />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Form currId={currId} setCurrId={setCurrId} />
                </Grid>
            </MainContainer>
        </Grow>
    )
}

export default Home;