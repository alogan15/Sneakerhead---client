import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Toolbar';


const image={
  height: '350px',
  width: 'auto',
  marginTop:'125px',
  marginLeft: '170px'
}

const btn={
  backgroundColor:"black",
  color:'white',
  marginTop:"50px"
}

export default function OnesBlue() {
  return (
    <div>
      <Navbar />
      <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/ones.webp")}
        alt="Jordan"
      />

      <Link to="/Jordan">
      <Button variant="contained" size="small" style={btn}>
        Back
      </Button>
      </Link>
    </div>
  )
}