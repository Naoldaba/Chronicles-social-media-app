import { styled } from '@mui/material/styles';
import {AppBar, Typography, Grid} from '@mui/material';

export const Heading= styled(Typography)(({theme})=>({
  color:'rgb(0, 183, 255, 1)',
}))


export const MainContainer = styled(Grid) (({theme})=>({
  [theme.breakpoints.down('sm')]:{
    display:'flex',
    flexDirection:'column-reverse'
  }
}))
