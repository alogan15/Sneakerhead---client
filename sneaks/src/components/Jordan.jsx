import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SneakerSize from './SneakerSize';

import Navbar from '../Toolbar';




const theme = createTheme();


const btn={
    color:'black'
}

const text={
  color:'black'
}

const image={
  height: '100px',
  width: 'auto'
}

const navbtn={
  backgroundColor:'black',
  color:'white',
  alignItems:'right',
  justifyContent:'right'
}



const Jordan = () => {




  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Air Jordan
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            See what's happening with the Jordan Brand. Check out the latest innovations, top styles and featured stories.
            </Typography>
            
          </Container>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/Jordan1.jpg")}
        alt="Jordan"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Jordan 1 Retro High OG 
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $570
          </b>
        </Typography>
      </CardContent>
      
      <CardActions alignContent="center">
        <Button size="small" style={btn}>View</Button>
        <SneakerSize />
        <Button size="small" style={btn}>Cart</Button>
      </CardActions>
      
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/elevens.webp")}
        alt="Jordan"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Jordan 11 Retro 'Bred'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $450
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Button size="small" style={btn}>View</Button>
        <SneakerSize />
        <Button size="small" style={btn}>Cart</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/ones.webp")}
        alt="Jordan"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Jordan 6 Retro 'Infrared'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $290
          </b>
        </Typography>
      </CardContent>
      
      <CardActions alignContent="center">
        <Button size="small" style={btn}>View</Button>
        <SneakerSize />
        <Button size="small" style={btn}>Cart</Button>
      </CardActions>
      
    </Card>
        </Grid>
        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/sixs.webp")}
        alt="Jordan"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Jordan 6 Retro 'Infrared'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $340
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Button size="small" style={btn}>View</Button>
        <SneakerSize />
        <Button size="small" style={btn}>Cart</Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/twos.webp")}
        alt="Jordan"
      />
      <CardContent>
       
        <Typography variant="body2" style={text}>
        Air Jordan 2 Retro 
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $400
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Button size="small" style={btn}>View</Button>
        <SneakerSize />
        <Button size="small" style={btn}>Cart</Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid item xs={6} md={4}>
        <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/threes.webp")}
        alt="Jordan"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Jordan 3 Retro '88'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $670
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Button size="small" style={btn}>View</Button>
        <SneakerSize />
        <Button size="small" style={btn}>Cart</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </Box>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Link to="/">
          <Button fullWidth variant="contained" style={navbtn}>Home</Button>
        </Link>
        <Link to="/SignIn">
          <Button fullWidth variant="contained" style={navbtn}>Back</Button>
        </Link>
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
      
    </ThemeProvider>
  );
}

export default Jordan;