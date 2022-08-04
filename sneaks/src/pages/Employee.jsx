import {EmployeeTable} from "../components/EmployeeTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const btn={
    padding:'15px',
    margin:'10px'
}
export const Employee =() => {
    const navigate = useNavigate();


    return(
        <>
           <Link to="/SignIn">
                <Button style={btn} variant="contained">Become Sneakerhead</Button>
           </Link>
            
            <EmployeeTable />
        </>
    )
}
