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


export default function Yeezy() {
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
              Adidas Yeezy
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            The Yeezy Boost 350 is not only the most conspicuous Yeezy silhouette, but it's also the most comfortable. The combination of the full-length Boost sole that provides cloud-like cushioning and the primeknit upper that gives the sneaker a sock-fit, makes this shoe just as comfortable as a performance sneaker.
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/yeezys/Yeezy.jpg")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Yeezy Boost 350 V2 'Red'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $350
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/yeezys/yeezyblk.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Yeezy Boost 350 V2 'Onyx'
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/yeezys/Yeezyutil.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Yeezy Foam Runner 'MX Carbon'
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/yeezys/yeezyclassic.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Yeezy Boost 700 'Wave Runner'
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/yeezys/yeezyorg.webp")}
        alt="Yeezy"
      />
      <CardContent>
       
        <Typography variant="body2" style={text}>
        Yeezy Boost 350 V2 'Beluga'
        </Typography>
        <Typography paddingTop="7px">
          <b>
            $390
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
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/yeezys/Yeezydrk.webp")}
        alt="Yeezy"
      />
      <CardContent>
        
        <Typography variant="body2" style={text}>
        Yeezy 700 V3 'Dark Glow'
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
      </Box> */}
  
    <BottomNav />
        
    </ThemeProvider>
  );
}