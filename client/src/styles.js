import { styled } from '@mui/material/styles';
import {AppBar, Typography, Grid} from '@mui/material';

export const StyledAppBar=styled('div')(({theme})=>({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Heading= styled(Typography)(({theme})=>({
  color:'rgb(0, 183, 255, 1)',
}))

export const Image=styled('img')(({theme})=>({
  marginLeft:'15px'
}))

export const MainContainer = styled(Grid) (({theme})=>({
  [theme.breakpoints.down('sm')]:{
    display:'flex',
    flexDirection:'column-reverse'
  }
}))
