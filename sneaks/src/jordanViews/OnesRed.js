import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Navbar from '../Toolbar';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../components/Views.css';


const image={
  height: '350px',
  width: 'auto',
  marginTop:'125px',
  marginLeft:'160px',
  backgroundColor:'black'
}

const title={
  padding:'15px',
  marginLeft:'205px',
  color:'black'
}

const btn={
  backgroundColor:"black",
  color:'white',
  marginTop:"150px"
}

const next={
  backgroundColor:"black",
  color:'white',
  marginTop:"150px",
  marginLeft:"700px"
}


export default function OnesRed() {
  return (
    <div  className='backgroundColor'>
      <Navbar />

      <Typography style={title}>
        <h1>
          Air Jordan 1 Retro High OG
        </h1>
      </Typography>

      <CardMedia
        component="img"
        style={image}
        image={require("/Users/andrelogan/dev/Sneakerhead---client/sneaks/src/jordans/Jordan1.jpg")}
        alt="Jordan"
      />
      

      <Link to="/Jordan">
      <Button variant="contained" size="small" style={btn}>
      <HomeIcon />
      </Button>
      </Link>

      <Link to="/Elevens">
      <Button variant="contained" size="small" style={next}>
      <ArrowForwardIcon />
      </Button>
      </Link>
    </div>
  )
}