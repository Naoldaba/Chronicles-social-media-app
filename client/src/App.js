import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';
import aau from './images/aau.png';
import Posts from './components/Posts/posts'; 
import Form from './components/Form/form';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';

import { StyledAppBar, Image, MainContainer } from './styles';
import { useEffect, useState } from 'react';

function App() {
  const [currId, setCurrId] = useState(null);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
    console.log(currId);
  }, [currId])
  
  return (
    <Container maxWidth='lg'>

      <StyledAppBar position='static' color="secondary">
        <Typography variant='h2' align='center' color={{color: 'white'}}>Chronicles of AAU</Typography>
        <Image src={aau} alt="chronicles of aau" height='60' />
      </StyledAppBar>

      <Grow in>
        <Container>
          <MainContainer container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts setCurrId={setCurrId} />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form currId={currId} setCurrId={setCurrId} />
            </Grid>
          </MainContainer>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;