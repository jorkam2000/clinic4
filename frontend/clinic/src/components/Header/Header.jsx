import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    //localStorage.removeItem('token')
    //localStorage.removeItem('role')
    localStorage.clear()
    navigate('/login')
  }
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
          {localStorage.getItem('token') ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Box>
              <Link to="/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup">
                <Button color="inherit">SignUp</Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
