
import React from 'react'

import { Box, Grid, Container, Typography, Button } from '@mui/material'

function Footer() {
  const elements = [
    {
      header: 'Help',
      links: ['Contact', 'Support', 'Privacy']
    },
    {
      header: 'Account',
      links: ['Login', 'Register', 'New']
    },
    {
      header: 'Messages',
      links: ['Backup', 'History', 'Roll']
    }
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column, idx) => {
      return (
        <Grid key={idx} item xs={12} md={4}>
          <Box borderBottom={1}>
            <Button sx={{ color: 'white', fontWeight: 'bold' }}>
              {column.header}
            </Button>
          </Box>
          {column.links.map((link, idx) => {
            return (
              <Box key={idx}>
                <Button sx={{ color: 'white' }}>{link}</Button>
              </Box>
            )
          })}
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <footer>
      <Box bgcolor="primary.main" color="white" padding={2}>
        <Container>
          <Grid container columnSpacing={2}>
            {generateFooterElements()}
          </Grid>
        </Container>
      </Box>
      <Box textAlign={'center'} py={2} m={0} bgcolor="black" color={'white'}>
        <Typography>© Clinic4 2024 - All Rights Reserved</Typography>
      </Box>
    </footer>
  )
}

export default Footer