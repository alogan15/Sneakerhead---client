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

export default function AirMax() {
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
              Nike Air Max
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Virgil Abloh is at the top of his game with multiple collaborations with Nike through Off-White. This time, the Off-White x Air Max 90 'Black' features a black and white colorway base accented by millennial white Swoosh and black tag on the inner side panel.
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/Airmax.jpg")}
        alt="airmax"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Off-White x Air Max 90 'The Ten'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $1320
          </b>
        </Typography>
      </CardContent>
      
      <CardActions alignContent="center">
      <Link to="/maximage">
        <Button size="small" style={btn}>View</Button>
        </Link>
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/crazycolors.webp")}
        alt="airmax"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Kasina x Air Max 1 SP 'Won-Ang
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $750
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Link to="/Kasina">
        <Button size="small" style={btn}>View</Button>
        </Link>
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/denim.webp")}
        alt="dunk"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Max 97 SE 'Rainbow Snake'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $500
          </b>
        </Typography>
      </CardContent>
      
      <CardActions alignContent="center">
        <Link to="/Rainbow">
        <Button size="small" style={btn}>View</Button>
        </Link>
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/neon.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Air Max 95 OG PS 'Neon'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $700
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Link to="/Neon">
        <Button size="small" style={btn}>View</Button>
        </Link>
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/offwhitewhite.webp")}
        alt="Yeezy"
      />
      <CardContent>
       
        <Typography variant="body2" style={text}>
        Off-White x Air Max 90 'The Ten'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $1200
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">
        <Link to="/OffWhitewhte">
        <Button size="small" style={btn}>View</Button>
        </Link>
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/zoo.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Concepts x Air Max 1 SP 'Heavy'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $950
          </b>
        </Typography>
      </CardContent>
      <CardActions alignContent="center">

        <Link to="/Concepts">
        <Button size="small" style={btn}>View</Button>
        </Link>

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