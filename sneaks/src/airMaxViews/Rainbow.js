import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Toolbar';

const image={
  height: '315px',
  width: 'auto',
  marginTop:'125px',
  marginLeft: '150px'
}

const btn={
  backgroundColor:"black",
  color:'white',
  marginTop:"50px"
}

export default function Rainbow() {
  return (
    <div>
      <Navbar />
      <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/airmax/denim.webp")}
        alt="AirMax"
      />
       <Link to="/AirMax">
      <Button variant="contained" size="small" style={btn}>
        Back
      </Button>
      </Link>
      
    </div>
  )
}