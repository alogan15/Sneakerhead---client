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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SneakerSize from './SneakerSize';
import Navbar from '../Toolbar';
import BottomNav from './BottomNav';




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



export default function Dunk() {
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
              Nike Dunk
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            The Nike Dunk debuted in 1985. Several college-themed Nike Dunk highs released. Apparently, some lows also released although they are not as celebrated as the original set of highs.
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/dunks/blue42.webp")}
        alt="dunk"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Dunk Low GS 'Jackie Robinson'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $250
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/dunks/blues.webp")}
        alt="dunk"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Dunk Low 'Valerian Blue'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $250
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/dunks/burgundy.webp")}
        alt="dunk"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Dunk Low 'Team Red'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $250
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/dunks/cowdunk.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Ben & Jerry's x Dunk Low SB
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $590
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/dunks/dunkblk.webp")}
        alt="Yeezy"
      />
      <CardContent>
       
        <Typography variant="body2" style={text}>
        Dunk Low GS 'Black White'
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/dunks/rainbow.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Dunk Low SE 'Safari Mix'
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
      </Grid>
    </Box>
       
      </main>
      
     
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Link to="/">
          <Button fullWidth variant="contained" style={navbtn}>Home</Button>
        </Link>
        <Link to="/SignIn">
          <Button fullWidth variant="contained" style={navbtn}>Back</Button>
        </Link>
        <Link to="/SignIn">
          <Button fullWidth variant="contained" style={navbtn}>Checkout</Button>
        </Link>
      </Box> */}

      <BottomNav />
     

    </ThemeProvider>
  );
}