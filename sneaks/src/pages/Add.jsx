import { useParams } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as sneakerService from '../services/SneakerService';
import {useNavigate } from "react-router-dom";

const theme = createTheme();
const textfield={
  margin: '10px',
  color:'black'
}

export function Add() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const sneaker = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email:data.get('email'),
      street: data.get('street'),
      city: data.get('city'),
      state: data.get('state'),
      zip: data.get('zip'),
      sneakerType: data.get('sneakerType')
    };


    sneakerService.createSneaker(sneaker)
    .then(response => {
      navigate("/");
    })

  };

    return(
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={firstName}
                  onChange= {(e) => setFirstName(e.target.value)}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  value={lastName}
                  onChange= {(e) => setLastName(e.target.value)}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={email}
                  onChange= {(e) => setEmail(e.target.value)}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
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
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
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
                <Grid item xs={12} sm={6}>
              <TextField               
                    required
                    fullWidth
                    id="sneakerType"
                    value={sneakerType}
                    onChange= {(e) => setSneakerType(e.target.value)}
                    label="Sneaker Type"
                    name="sneakerType"
                    autoComplete="sneakerType"
                />
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
  };