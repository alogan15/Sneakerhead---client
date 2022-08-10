import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SneakerMenu from './components/SneakerMenu';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Typography from '@mui/material/Typography';


const nav={
    backgroundColor:'black',
    
}


function Navbar() {
    return (
        <AppBar position="relative" style={nav}>
        <Toolbar>
        <DirectionsRunIcon />
          <Typography variant="h6" noWrap marginLeft="20px">
            Sneakerhead
          </Typography>

          <SneakerMenu />

        </Toolbar>
      </AppBar>
    )
} 

export default Navbar;