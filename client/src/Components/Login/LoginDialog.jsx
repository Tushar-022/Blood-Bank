import { Dialog, Box, TextField, Button, Typography, styled } from "@mui/material";
import { useState,useContext } from "react";
import { authenticateSignup,authenticateLogin} from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Box)`
    height: 63vh;
    width: 45vw;
    display: flex;
    overflow: hidden;
     align-items: stretch;
    justify-content: center;
  `;

  const Image = styled(Box)`
    background-image: url("https://www.blood.co.uk/remote.axd/nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/16909/blood-donor_wedc.jpg?anchor=center&mode=crop&width=600&height=255&rnd=132121518250000000&quality=70");
    background-size: cover;
    background-position: center;
    width: 45%; /* Adjusted width for the image */
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Wrapper=styled(Box)`
  display:flex;
  flex-direction:column;
  padding:25px 35px;
  flex:1;
  & > div,& > button,& >p{
    margin-top:20px; 
  }
  `

  const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`


const accountInitialValues={
  login:{
      view:'login',
  },
  signup:{
    view:'signup',
  }
}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
};

const loginInitialValues={

  username:'',
  password:''
}; 



export default function LoginDialog({ open, setOpen }) {
  
  const [account,toggleAccount]=useState(accountInitialValues.login);
  const [signup,setSignup]=useState(signupInitialValues);
  const [login,setLogin]=useState(loginInitialValues);
  const [error,setError]=useState(false);
  const {setAccount}=useContext(DataContext)
  

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login)
    setError(false);
  };


  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  }

  const onInputChange=(e)=>{
    // setSignup({...signup,[e.target.name]:e.target.value})
    setSignup((prev)=>{ return {...prev,[e.target.name]:e.target.value}});
    // console.log(signup);
  }

  const signupUser=async()=>{
      let response=await authenticateSignup(signup);
      if(!response)
      return;
      handleClose();
      setAccount(signup.firstname)
  }

  const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }

  const loginUser=async()=>{
    let response=await(authenticateLogin(login));
    console.log(response);
    if(response.status===200)
    {
        handleClose();
        setAccount(login.username);
    } 
    else{
      setError(true);
    }

  }
  return (
    
    <div>
      <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Component>
          <Image>
            
            {/* <Typography variant="h4"style={{ marginTop: 10}}>
              Give the gift of life
              </Typography> */}
              {/* <Typography variant="h4"style={{ marginTop: 10,color:'grey',textAlign:'center'}}>
               Donate blood today.
            </Typography> */}
          </Image>
          {
            account.view==='login' ?
          <Wrapper>
            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='username' label="Enter your username" />
            
            {error && <Error>Please enter valid username or password</Error>}

            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='password' label="Enter your Password" />

            <Text>By continuing you agree to, Terms & Conditions of registering as blood donor</Text>             
              <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
            
            {/* <Typography style={{textAlign:'center'}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP> */}
            <CreateAccount onClick={()=>toggleSignup()}>New to BloodBank? Create an account</CreateAccount>
          </Wrapper>
          :
          <Wrapper>
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='firstname'label="Enter FirstName" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='lastname'  label="Enter LastName" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username'label="Enter UserName" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='email' label="Enter your Email" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter your Password" />
            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='phone' label="Enter your Mobile-Number" />
            <LoginButton style={{marginBottom:10}} variant="contained" onClick={()=>signupUser()} >SignUp</LoginButton>
          </Wrapper>
            }   
        </Component>
      </Dialog>
    </div>
  );
}
