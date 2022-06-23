import React, { useEffect, useState } from 'react'

import { deleteUser, getuser } from '../service/Api';
import { 
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import { Link} from 'react-router-dom';
const useStyles = makeStyles({
  table: {
      width: '90%',
      margin: '50px 0 0 50px',
  },
  thead: {
      '& > *': {
          fontSize: 20,
          background: '#000000',
          color: '#FFFFFF',
      }
  },
  row: {
      '& > *': {
          fontSize: 18
      }
  }
})

export default function AllUser() {
  const classes=useStyles()
  const [user,setUser]=useState([])
  
  useEffect(()=>{
    getallUSer()
  },[])

  const getallUSer=async()=>{
    const response= await getuser()
    console.log(response.data);
    setUser(response.data)
  }

  const deleteuser=async(id)=>{
    await deleteUser(id)
    getallUSer()
  }
  return (
    <div>
       <Typography variant="h3" style={{marginBottom:50}}> All Data Record</Typography>
      <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((users) => (
            <TableRow className={classes.row} key={users.id}>
              <TableCell>{users.id}</TableCell>
              <TableCell>{users.name}</TableCell>
              <TableCell>{users.email}</TableCell>
              <TableCell>{users.phone}</TableCell>
              <TableCell>{users.city}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" component={Link} to={`/editUser/${users.id}`}  style={{marginRight:10}} >Edit</Button>
                
                <Button variant="contained" onClick={()=>deleteuser(users.id)}  color="secondary" >Delete</Button>
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
