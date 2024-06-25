import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Sidebar />
          <Link style={{ textDecoration: 'none' }} to="/">
            <Typography variant="h6" component="div">
              Clinic4
            </Typography>
          </Link>
          <Box>
            <Link to='/login'>
            <Button color="inherit">Login</Button>
            </Link>
            <Link to='/signup'>
            <Button color="inherit">SignUp</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
