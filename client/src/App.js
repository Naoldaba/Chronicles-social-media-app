import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container} from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
        <Container maxWidth='lg'>
          <Navbar/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/auth' Component={Auth}/>
          </Routes>
        </Container>
    </BrowserRouter>
  );
}

export default App;