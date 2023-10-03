import React from 'react';
import Header from './Components/Home/Header'; 
import { Box } from '@mui/material';
import Homepage from './Components/Home/Homepage'; 
import DataProvider from './context/DataProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/contact/Contact';



//// We wrapped this with data provider so that  DATA PROVIDER mai jo koisi bhi states hai vo mai in components 
// mai use kar paaun 
function App() {
  return (
    <BrowserRouter>
    <DataProvider>
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/' element={
          <>
           <Header />
           <Box style={{ marginTop: 70 }}>
             <Homepage />
           </Box>
          </>}></Route>
      </Routes>
    </DataProvider>
    </BrowserRouter>
  );
}

export default App;
