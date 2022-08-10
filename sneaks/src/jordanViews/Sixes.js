import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Toolbar';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';

const image={
  height: '350px',
  width: 'auto',
  marginTop:'125px',
  marginLeft:'160px'
}

const title={
  padding:'15px',
  marginLeft:'205px'
}

const back={
  backgroundColor:"black",
  color:'white',
  marginTop:"150px"
}

const next={
  backgroundColor:"black",
  color:'white',
  marginTop:"150px",
  marginLeft:"300px"
}

const home={
  backgroundColor:"black",
  color:'white',
  marginTop:"150px",
  marginLeft:"300px"
}

export default function Sixes() {
  return (
    <div>
      <Navbar />

      <Typography style={title}>
        <h1>
        Air Jordan 6 Retro 'Infrared'
        </h1>
      </Typography>

      <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/sixs.webp")}
        alt="Jordan"
      />

      <Link to="/Jordan">
      <Button variant="contained" size="small" style={back}>
      <ArrowBackIcon />
      </Button>
      </Link>

      <Link to="/Jordan">
      <Button variant="contained" size="small" style={home}>
        <HomeIcon />
      </Button>
      </Link>

      <Link to="/Twos">
      <Button variant="contained" size="small" style={next}>
      <ArrowForwardIcon />
      </Button>
      </Link>
    </div>
  )
}