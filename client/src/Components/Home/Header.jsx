import React from "react";
import { AppBar, Button, styled, Toolbar, Box, Typography } from "@mui/material";
import { Menu as MenuIcon, AccountCircle, HelpOutline } from "@mui/icons-material";
import { Bloodtype as Logo } from "@mui/icons-material";
import LoginDialog from "../Login/LoginDialog";
import { useState,useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import {  useNavigate } from 'react-router-dom';
import Contact from "../contact/Contact";



const StyledAppBar = styled(AppBar)`
  background: #bc0000;
  box-shadow: none;
  display: flex;
`;

const DesignLogo = styled(Logo)`
  font-size: 34px;
`;

const Options = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  
  & > svg,
  & > p {
    margin-left: 25px;
    color: white;
    font-size: 18px;
    
  & > button {
    margin-left: 15px | important;
    border-color: white;
    color: white;
  }
  
`;

const StyledButton=styled(Typography)`
cursor: 'pointer',
    color: 'white', 
    transition: 'color 0.3s', 
    '&:hover': {
      color: 'black',
  }`


export default function Header() {
  const navigate = useNavigate();

  const [open,setOpen]=useState(false);
  const [contact,setContact]=useState(false);

  const {account,setAccount }=useContext(DataContext)

  const openDialog=()=>{
    setOpen(true);
  }

 
  
  return (
    <>
      <StyledAppBar>
        <Toolbar>
          <DesignLogo/>
          <Typography style={{ display: "flex", whiteSpace: 'nowrap', alignItems: 'center', marginLeft: '10px',fontSize:'18px'}}>Blood Bank</Typography>
          
          <Options>
          <Typography>Who Can Give Blood</Typography>
            <Typography>Looking for Blood</Typography>
            {
               account ? <Profile account={account}  setAccount={setAccount}/> :
              <Typography variant="outlined" style={{margin:'12px'}} onClick={()=>openDialog()} >
             <Typography>Become a Donor</Typography> 
            </Typography>
            }
            <StyledButton onClick={() => navigate('/contact')} >Contact Us</StyledButton>
            
            <Typography>News and Events</Typography>
            <HelpOutline style={{ fontSize: '34px' }} />
            <MenuIcon style={{ fontSize: '34px' }} /> 

            
          
          </Options>
          <LoginDialog open={open} setOpen={setOpen}/>
          
        </Toolbar>
      </StyledAppBar>
          
    </>
  );
}
