import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar, Button, Paper, TextField, Typography, Link, Stack, Divider } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import {useNavigate } from "react-router-dom";
import * as sneakerService from '../services/SneakerService';
import { useState } from "react";
import SignInMenu from './SignInMenu';
import { useParams } from "react-router-dom";



function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://goat.com/">
          Sneakerhead
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const SignIn = () => {
  //added
  const navigate = useNavigate();
  const {id} = useParams();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [sneakerType, setSneakerType] = useState('')
  const [sneakerSize, setSneakerSize] = useState('')

  //added
  const handleSubmit = (event) => {
    console.log("submitted")
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sneaker = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      street: data.get('street'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      sneakerType: data.get('sneakerType'),
      sneakerSize: data.get('sneakerSize')
    };

    //added
    sneakerService.createSneaker(sneaker)
    .then(response => {
      navigate("/");
    })

  };

    const paperStyle={
        padding: "20px",
        height: 'auto',
        width: 280,
        margin: "20px auto"
    }
    const avatarStyle={
        backgroundColor: "black"
    }
    const textfield={
        margin: '10px',
        color:'black'
    }
    const btnstyle={
        margin:'15px 0',
        color:'white',
        backgroundColor:'black',
        padding: '7px'
    }
    const divide={
      padding:'10px'
    }
  


    return(
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid >
            <Paper elevation={10} style={paperStyle} >

                <Grid align="center">
                <Avatar style={avatarStyle}><DirectionsRunIcon /></Avatar>
                <h4>Sneakerhead</h4>
                </Grid> 
                
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    value={firstName}
                    onChange= {(e) => setFirstName(e.target.value)}
                    id="firstName"
                    label="First Name"
                    autoFocus
                  >
                  
                </TextField>  
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="lastName"
                    value={lastName}
                    onChange= {(e) => setLastName(e.target.value)}
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  >
                </TextField>  
                </Grid>

                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="email"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                >
                </TextField>  
                </Grid>

                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="street"
                    value={street}
                    onChange= {(e) => setStreet(e.target.value)}
                    label="Street"
                    name="street"
                    autoComplete="street"
                >
                </TextField>
                </Grid>

                <Grid item xs={12}>
                <TextField
                    style={textfield} 
                    required
                    fullWidth
                    id="city"
                    value={city}
                    onChange= {(e) => setCity(e.target.value)}
                    label="City"
                    name="city"
                    autoComplete="city"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                    style={textfield} 
                    required
                    fullWidth
                    id="state"
                    value={state}
                    onChange= {(e) => setState(e.target.value)}
                    label="State"
                    name="state"
                    autoComplete="state"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <TextField
                    style={textfield} 
                    required
                    fullWidth
                    id="zip"
                    value={zip}
                    onChange= {(e) => setZip(e.target.value)}
                    label="Zip"
                    name="zip"
                    autoComplete="zip"
                />
                </Grid>
                </Grid>

                <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
              <TextField
                    style={textfield} 
                    required
                    fullWidth
                    id="sneakerType"
                    value={sneakerType}
                    onChange= {(e) => setSneakerType(e.target.value)}
                    label="Sneaker"
                    name="sneakerType"
                    autoComplete="sneakerType"
                />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <TextField    
                    style={textfield}            
                    required
                    fullWidth
                    id="sneakerSize"
                    value={sneakerSize}
                    onChange= {(e) => setSneakerSize(e.target.value)}
                    label="Size"
                    name="sneakerSize"
                    autoComplete="sneakerSize"
                />
                </Grid>
                </Grid>
              
              <Divider style={divide}/>

              <SignInMenu />
              

              <Divider style={divide}/>
              
                <Stack justifyContent='center'>
                <Button
                    type="submit" 
                    color="primary" 
                    variant="contained" 
                    style={btnstyle}
                    size='medium'
                   
                > 
                    Submit Request
                </Button>
                </Stack>
                
            </Paper>
            <Copyright sx={{ mt: 5 }}/>
            
        </Grid>
        </Box>


     
        
    )
}

export default SignIn;