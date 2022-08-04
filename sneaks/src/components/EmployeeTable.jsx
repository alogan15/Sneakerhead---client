import { useEffect, useState} from 'react';
import * as employeeService from '../services/EmployeeService';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const EmployeeTable = () => {
    const [employees, setEmployees]= useState([]);
    

    useEffect(()=> {
        employeeService.getAllEmployees()
        .then(res => {
            setEmployees(res.data);
        })
    }, [])
  

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Street
                    </TableCell>
                    <TableCell>
                        City
                    </TableCell>
                    <TableCell>
                        State
                    </TableCell>
                    <TableCell>
                        Zip
                    </TableCell>
                    <TableCell align="right">
                        Cart
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        employees.map((employee)=> {
                            return(
                                <TableRow
                                    hover
                                    key={employee.id}
                                >
                                    <TableCell>
                                        {employee.id}
                                    </TableCell>
                                    <TableCell>
                                        {employee.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {employee.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {employee.email}
                                    </TableCell>
                                    <TableCell>
                                        {employee.street}
                                    </TableCell>
                                    <TableCell>
                                        {employee.city}
                                    </TableCell>
                                    <TableCell>
                                        {employee.state}
                                    </TableCell>
                                    <TableCell>
                                        {employee.zip}
                                    </TableCell>
                                    
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}