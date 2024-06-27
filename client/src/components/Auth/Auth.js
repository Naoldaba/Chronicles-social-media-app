import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {
  Submit,
  StyledGrid,
  StyledPaper,
  StyledContainer,
  StyledAvatar,
  SingupForm,
  GoogleButton,
} from './styles';
import CustomInput from './customInput';
import Icon from './google_icon';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../reducers/auth';
import { useNavigate } from 'react-router-dom';
import { signup, signin } from '../../actions/auth';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [changeAuthMode, setChangeAuthMode] = useState(false);
  const isSignUp = changeAuthMode;

  const changeMode = () => setChangeAuthMode((prevVal) => !prevVal);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleSuccess = async (response) => {
    const profileInfo = response.profileObj;
    const token = response.credential;
    try {
      dispatch(AUTH({ profileInfo, token }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleFailure = () => {
    console.log('Google sign in unsuccessful, try again later');
  };

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <GoogleOAuthProvider clientId="745121366812-2mthhe0lppgksip38fqu9ikm7meecf7g.apps.googleusercontent.com">
      <StyledContainer maxWidth="sm">
        <StyledPaper elevation={3}>
          <StyledAvatar>
            <LockOutlined />
          </StyledAvatar>
          <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
          <SingupForm onSubmit={handleSubmit}>
            <StyledGrid container spacing={2}>
              {isSignUp && (
                <>
                  <CustomInput name="firstName" label="First Name" handleChange={handleChange} half />
                  <CustomInput name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <CustomInput name="email" label="Email Address" handleChange={handleChange} type="email" />
              <CustomInput
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
              {isSignUp && (
                <CustomInput
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
                />
              )}
            </StyledGrid>
            <Submit type="submit" fullWidth variant="contained" color="primary">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Submit>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              render={(renderProps) => (
                <GoogleButton
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Google Login
                </GoogleButton>
              )}
            />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={changeMode} disableRipple>
                  {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </SingupForm>
        </StyledPaper>
      </StyledContainer>
    </GoogleOAuthProvider>
  );
};

export default Auth;
