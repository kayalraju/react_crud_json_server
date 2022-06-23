import React from 'react'
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'
import {BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';

const useStyle = makeStyles({
  header: {
      background: '#45bed6'
  },
  tabs: {
      color: '#FFFFFF',
      marginRight: 20,
      textDecoration: 'none',
      fontSize: 20
  },
  tabs: {
      color: '#FFFFFF',
      marginRight: 20,
      textDecoration: 'none',
      fontSize: 20
  }
})

export default function Navbar() {
  const classes = useStyle();
  return (
    <div>
       <AppBar className={classes.header} position="static">
          <Toolbar>
          <NavLink className={classes.tabs} to="/">Mearn-Stack Crud</NavLink>
          <NavLink className={classes.tabs} to="/alluser">All-Use</NavLink>
          <NavLink className={classes.tabs} to="/adduser">AddUser</NavLink>
          
         
          </Toolbar>
      </AppBar>
    </div>
  )
}
