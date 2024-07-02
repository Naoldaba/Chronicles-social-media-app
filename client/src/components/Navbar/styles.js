import {styled} from '@mui/material/styles';
import {Typography, Button, Avatar, Toolbar } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';


export const StyledAppBar=styled('div')(({theme})=>({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
}))

export const Image=styled('img')(({theme})=>({
    marginRight:'15px'
}))

export const BrandContainer = styled('div')(({theme})=>({
    display:'flex',
    alignItems: 'center',
}))

export const Login = styled(Button)(({theme})=>({
    
}))

export const Logout = styled(Button)(({theme})=>({
    
}))

export const Profile = styled('div')(({theme})=>({
    display:'flex',
    gap:'20px'
}))

export const StyledAvatar = styled(Avatar)(({theme})=>({
    
}))

export const StyledToolbar = styled(Toolbar)(({theme})=>({
    
}))

export const UserName = styled(Typography)(({theme})=>({
    color:'white'
}))