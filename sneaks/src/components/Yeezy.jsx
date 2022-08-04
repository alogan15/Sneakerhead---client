import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SneakerSize from './SneakerSize';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://goat.com/">
//         Sneakerhead
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const cards = [1,2,3];

const theme = createTheme();

const nav={
    backgroundColor:'black'
}

const btn={
    color:'black'
}

const navbtn={
  backgroundColor:'black',
  color:'white',
  alignItems:'right',
  justifyContent:'right'
}

export default function Yeezy() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={nav}>
        <Toolbar>
        <DirectionsRunIcon />
          <Typography variant="h6" noWrap marginLeft="20px">
            Sneakerhead
          </Typography>
        </Toolbar>
      </AppBar>
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
              Adidas Yeezy
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            The Yeezy Boost 350 is not only the most conspicuous Yeezy silhouette, but it's also the most comfortable. The combination of the full-length Boost sole that provides cloud-like cushioning and the primeknit upper that gives the sneaker a sock-fit, makes this shoe just as comfortable as a performance sneaker.
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',                    
                    }}
                    image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/Yeezy.jpg")}
                   
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Adidas Yeezy
                    </Typography>
                    <Typography>
                    Yeezy Boost 350 V2 'Red'
                    </Typography>
                    <Typography align="center" paddingTop="7px">
                      <b>
                        $700
                      </b>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" style={btn}>View</Button>
                    <SneakerSize />
                    <Button size="small" style={btn}>Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
       
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
       
        {/* <Copyright /> */}
      </Box>
      {/* End footer */}
      <Link to="/">
          <Button fullWidth variant="contained" style={navbtn}>Back</Button>
        </Link>
    </ThemeProvider>
  );
}