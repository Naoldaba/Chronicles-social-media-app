import { styled } from '@mui/material/styles';
import { Card, CardMedia, Grid, Typography, CardActions, Box } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '200px',
  backgroundColor:'rgba(0,0,0,0.5)',
  backgroundBlendMode: 'darken',
}));

export const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
}));

export const Overlay2 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
}));

export const Details = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  padding: '0 16px',
}));

export const CardActionsStyled = styled(CardActions)(({ theme }) => ({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}));