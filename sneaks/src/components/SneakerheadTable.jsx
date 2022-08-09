import { useEffect, useState} from 'react';
import * as sneakerService from '../services/SneakerService';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const EmployeeTable = () => {
    const [sneakers, setSneakers]= useState([]);
   

    useEffect(()=> {
        sneakerService.getAllSneakers()
        .then(res => {
            setSneakers(res.data);
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
                    <TableCell>
                        Cart
                    </TableCell>
                    <TableCell align="right">
                        Size
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sneakers.map((sneaker)=> {
                            return(
                                <TableRow
                                    hover
                                    key={sneaker.id}
                                >
                                    <TableCell>
                                        {sneaker.id}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.email}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.street}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.city}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.state}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.zip}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.sneakerType}
                                    </TableCell>
                                    <TableCell>
                                        {sneaker.sneakerSize}
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