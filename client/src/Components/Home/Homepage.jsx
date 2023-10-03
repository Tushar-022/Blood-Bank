import React from 'react'
import Footer from './Footer'
import Banner from './Banner'
import Midsection from './Midsection'
import { Box,styled } from '@mui/material'


const component =styled(Box)`
padding:20px 10px;
margin:10px;
background:	#87CEEB;
`
export default function Homepage() {
  return (
    <>
      <Box>
        <Banner/>
        <Midsection/>
      </Box>
    </>
  );
}
