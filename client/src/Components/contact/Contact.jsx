
import { Box, styled, Link } from '@mui/material';
import { GitHub, Instagram } from '@mui/icons-material';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <>
            <Banner />
            

            <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom margin="10px">
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField label="Your Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email Address" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Message" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" style={{ marginTop: '2rem' }}>
        You can also reach us at:
        <br />
        <Phone /> 9234567890
        <br />
        <Email /> tk@gmail.com
      </Typography>
    </Container>
        </>
    );
}

export default Contact;