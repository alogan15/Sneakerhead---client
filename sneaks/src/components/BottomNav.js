import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const navbtn={
    backgroundColor:'black',
    color:'white',
    
  }

export default function BottomNav() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh',
      }}
    >
      <CssBaseline />
     
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        {/* <Container maxWidth="sm"> */}
        <Link to="/">
          <Button fullWidth variant="contained" style={navbtn}>Home</Button>
        </Link>
        <Link to="/SignIn">
          <Button fullWidth variant="contained" style={navbtn}>Back</Button>
        </Link>
        <Link to="/Checkout">
          <Button fullWidth variant="contained" style={navbtn}>Checkout</Button>
        </Link>
         
      </Box>
    </Box>
  );
}