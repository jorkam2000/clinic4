
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Box } from '@mui/material'

function Root() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Header />
        <Outlet />
        <Footer />
    </Box>
  )
}

export default Root
