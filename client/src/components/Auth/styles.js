import { Paper, Button, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

export const StyledContainer = styled('div')(({theme})=>({
    display:'flex',
    justifyContent:'center',
    
}))

export const Submit = styled(Button)(({theme})=>({
    margin:"15px 0",
    // paddingLeft: '100px'
}))

export const StyledPaper = styled(Paper)(({theme})=>({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    width: '30%'
}))

export const StyledAvatar = styled(Button)(({theme})=>({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
}))

export const SingupForm = styled('form')(({theme})=>({
    marginTop:'20px',
    display:'flex',
    flexDirection:'column'
}))

export const GoogleButton = styled(Button)(({theme})=>({
    // width: '100%',
}))

export const StyledGrid = styled(Grid)(({theme})=>({
    // display:'flex',
    // flexDirection:'column',
    // flexWrap:'wrap'
}))