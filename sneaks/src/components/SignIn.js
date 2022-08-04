import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField, Typography, Link, Stack, Divider } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
// import {useNavigate } from "react-router-dom";
import CustomizedMenus from './SneakerMenu';
import SneakerSize from './SneakerSize';
import Box from '@mui/material/Box';


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

const SignIn=()=> {
    // const navigate = useNavigate();

    // function SneakerheadTable(){
    //     navigate("/SneakerheadTable")
    // }

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
    // const types={
    //     color:'black'
    // }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><DirectionsRunIcon /></Avatar>
                <h4>Sneakerhead</h4>
                </Grid> 
                <Grid container spacing={2}>
                <TextField 
                    label='First Name' 
                    placeholder='Enter First Name'
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>  
                <TextField 
                    label='Last Name' 
                    placeholder='Enter Last Name'
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>   
                <TextField 
                    label='Email' 
                    placeholder='Enter Email'
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>    
                <TextField 
                    label='Street' 
                    placeholder='Enter Street' 
                    style={textfield} 
                    fullWidth 
                    required>
                </TextField>
                </Grid>  
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="City"
                  required
                  id="City"
                  label="City"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="State"
                  label="State"
                  name="State"
                  autoComplete="State"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  required
                  id="Zip"
                  label="Zip"
                  name="Zip"
                  autoComplete="Zip"
                />
                </Grid>
              </Grid>
              <Divider style={divide}/>
              <CustomizedMenus />
              {/* <SneakerSize /> */}
              {/* <Box sx={{ '& button': { m: 1 } }}>
      
              <div>
                <Button variant="outlined" size="medium" style={btnstyle}>
                  Jordan
                </Button>
                <Button variant="outlined" size="Medium" style={btnstyle}>
                Yeezy
                </Button>
              </div>
              <div>
                <Button variant="contained" size="medium" style={btnstyle}>
                  Dunk
                </Button>
                <Button variant="contained" size="Medium" style={btnstyle}>
                Air Max
                </Button>
              </div>
            </Box> */}

              <Divider style={divide}/>
              {/* <Button>Jordan</Button> */}
                <Stack justifyContent='center'>
                <Button
                    type="submit" 
                    color="primary" 
                    variant="contained" 
                    style={btnstyle}
                    size='medium'
                    // onClick={e => SneakerheadTable()}
                    
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