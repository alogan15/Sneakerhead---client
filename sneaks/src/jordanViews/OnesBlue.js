import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Toolbar';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const image={
  height: '350px',
  width: 'auto',
  marginTop:'125px',
  marginLeft: '170px'
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

export default function OnesBlue() {
  return (
    <div>
      <Navbar />

      <Typography style={title}>
        <h1>
          Air Jordan 1 Retro High OG
        </h1>
      </Typography>

      <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/ones.webp")}
        alt="Jordan"
      />

      <Link to="/Elevens">
      <Button variant="contained" size="small" style={back}>
      <ArrowBackIcon />
      </Button>
      </Link>

      <Link to="/Jordan">
      <Button variant="contained" size="small" style={home}>
        <HomeIcon />
      </Button>
      </Link>

      <Link to="/Sixes">
      <Button variant="contained" size="small" style={next}>
      <ArrowForwardIcon />
      </Button>
      </Link>
    </div>
  )
}