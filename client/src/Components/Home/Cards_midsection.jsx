import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Box,
} from "@mui/material";

export default function Cards_midsection() {
  return (
    <>
      <div style={{ display: 'flex',margin:'20px'}}>
        <Box width="300px" margin="20px" display="flex">
          <Card>
            <CardMedia
              component="img"
              height="180"
              image="https://images.unsplash.com/photo-1615461065624-21b562ee5566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Why Give Blood
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock the power of empathy with every drop you give – your
                inaugural blood donation
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Why Give Blood</Button>
              <Button size="small">Your Eligibility for donation</Button>
               <Button size="small">Your Steps to donation</Button> 
            </CardActions>
          </Card>
        </Box>

        <Box width="300px" margin="20px">
          <Card>
            <CardMedia
              component="img"
              height="180"
              image="https://plus.unsplash.com/premium_photo-1661779739047-c5c27cf8ebac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb29kJTIwYmFua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Donating blood/plasma for the first time
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unlock the power of empathy with every drop you give – your
                inaugural plasma donation
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Your Eligibility for donation</Button>
              <Button size="small">Your Steps to donation</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </>
  );
}
