import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Toolbar';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';


const image={
  height: '350px',
  width: 'auto',
  marginTop:'125px',
  marginLeft: '150px'
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

const home={
  backgroundColor:"black",
  color:'white',
  marginTop:"150px",
  marginLeft:"300px"
}

export default function Threes(){
  return (
    <div>
      <Navbar />

      <Typography style={title}>
        <h1>
        Air Jordan 3 Retro '88'
        </h1>
      </Typography>

      <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/threes.webp")}
        alt="Jordan"
      />

      <Link to="/Twos">
      <Button variant="contained" size="small" style={back}>
        <ArrowBackIcon />
      </Button>
      </Link>

      <Link to="/Jordan">
      <Button variant="contained" size="small" style={home}>
        <HomeIcon />
      </Button>
      </Link>
    </div>
  )
}