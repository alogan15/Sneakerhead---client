import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField, Typography, Link, Stack, Divider } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import {useNavigate } from "react-router-dom";
import * as employeeService from '../services/EmployeeService';
import { useState } from "react";
import SneakerMenu from './SneakerMenu';





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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  //added
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const employee = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email:data.get('email'),
      street:data.get('street'),
      city:data.get('city'),
      state:data.get('state'),
      zip:data.get('zip')
    };

    //added
    employeeService.createEmployee(employee)
    .then(response => {
      navigate("/");
    })

  };

    const paperStyle={
        padding: "20px",
        height: '70vh',
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
        <Grid>
            <Paper elevation={10} style={paperStyle} onSubmit={handleSubmit}>
                <Grid align="center">
                <Avatar style={avatarStyle}><DirectionsRunIcon /></Avatar>
                <h4>Sneakerhead</h4>
                </Grid> 
                <Grid container spacing={2}>
                <TextField 
                    // label='First Name' 
                    // placeholder='Enter First Name'
                    style={textfield} 
                    // fullWidth 
                    // required

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
                <TextField 
                    // label='Last Name' 
                    // placeholder='Enter Last Name'
                    style={textfield} 
                    // fullWidth 
                    // required

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
                <TextField 
                    // label='Email' 
                    // placeholder='Enter Email'
                    style={textfield} 
                    // fullWidth 
                    // required
                    
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
                <TextField 
                    // label='Street' 
                    // placeholder='Enter Street' 
                    style={textfield} 
                    // fullWidth 
                    // required
                    
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
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                  // autoComplete="given-name"
                  // name="City"
                  // required
                  // id="City"
                  // label="City"
                  // autoFocus

                 
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
              <Grid item xs={12} sm={6}>
                <TextField
                  // required
                  // id="State"
                  // label="State"
                  // name="State"
                  // autoComplete="State"

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
                  // required
                  // id="Zip"
                  // label="Zip"
                  // name="Zip"
                  // autoComplete="Zip"

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
              <Divider style={divide}/>
              <SneakerMenu />
              {/* <SneakerSize /> */}

              <Divider style={divide}/>
              
                <Stack justifyContent='center'>
                <Button
                    type="submit" 
                    color="primary" 
                    variant="contained" 
                    style={btnstyle}
                    size='medium'
                    onSubmit={handleSubmit}
                > 
                    Submit Request
                </Button>
                </Stack>
                
            </Paper>
            <Copyright sx={{ mt: 5 }} />
        </Grid>
        
    )
}

export default SignIn;