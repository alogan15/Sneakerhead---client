import {EmployeeTable} from "../components/SneakerheadTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AppBar from '@mui/material/AppBar';


const btn={
    padding:'15px',
    margin:'10px',
    color:'white',
    backgroundColor:'black'

}

const nav={
    backgroundColor:'black'
}

export const Employee =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/SignIn")
    }

    return(
        <>
            <AppBar position="relative" style={nav}>
                <Toolbar>
                    <DirectionsRunIcon />
                <Typography variant="h6" noWrap marginLeft="20px">
                        Sneakerhead
                </Typography>
                    <Link to="/SignIn">
                    <Button style={btn} variant="contained" onClick={e => addUser()}>Become Sneakerhead</Button>
                    </Link>
                </Toolbar>
            </AppBar>
          
            
            <EmployeeTable />
        </>
    )
}
