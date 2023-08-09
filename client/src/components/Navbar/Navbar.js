import { StyledAppBar, Image, StyledToolbar, BrandContainer, UserName, StyledAvatar, Login, Logout, Profile } from "./styles";
import { Typography } from '@mui/material';
import aau from '../../images/aau.png';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import {LOGOUT} from '../../reducers/auth';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState(null);
    
    const logout = ()=>{
        dispatch(LOGOUT());
        navigate('/');
        setUser(null);
    }

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem('profile'));
        if (stored){
            setUser(stored);
        }else{
            setUser(null);
        }
        const token = stored?.token
        if (token){
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout()
        }

    }, [location])
    
    return (
        <StyledAppBar position='static' color="secondary">
            <BrandContainer>
                <Typography variant='h4' align='center' color={{color: 'white'}}>Chronicles of AAU</Typography>
                <Image src={aau} alt="chronicles of aau" height='60' />
            </BrandContainer>
            <StyledToolbar>
                {
                    user ? (
                        <Profile>
                            <StyledAvatar >{user.profileInfo.name.charAt(0)}</StyledAvatar>
                            <UserName variant='h6'>{user.profileInfo.name}</UserName>
                            <Logout variant='contained' color='secondary' onClick={logout} >Logout</Logout>
                        </Profile>
                    ) : (
                        <Login component={Link} to='/auth' variant='contained' color='primary'>Sign in</Login>
                    )
                }
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Navbar;