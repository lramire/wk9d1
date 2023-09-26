import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';


//internal imports
import { Home, Auth, Inventory, Auction } from './components';
import './index.css'
import {theme} from './Theme/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <Router>
        <Routes>
          <Route path='/' element = {<Home title = {'Car Gang'}/>} />
          <Route path='/auth' element = {<Auth/>} />
          <Route path='/cart' element = {<Inventory/>} />
          <Route path='/shop' element = {<Auction/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
