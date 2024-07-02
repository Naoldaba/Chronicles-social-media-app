
import { styled } from '@mui/material/styles';
import { Paper, TextField, Button } from '@mui/material';


export const Root = styled('div')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: 10
}));

export const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  rowGap: '20px'
});

export const StyledFileInput = styled('div')({
  width: '97%',
  margin: '10px 0',
});

export const StyledButtonSubmit = styled(Button)({
  marginBottom: 10,
});