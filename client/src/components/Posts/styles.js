import {styled} from '@mui/material/styles';

export const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled('div')({
  textAlign: 'center',
});