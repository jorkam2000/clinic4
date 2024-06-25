import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { signUp } from '../../services/authService'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'

function SignUp() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [insurance_number, setNamber] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
  }

  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleNamber = (event) => {
    setNamber(event.target.value)
  }

  const handleSubmit = async () => {
    const formData = {
      name,
      lastName,
      phone,
      email,
      password,
      insurance_number,
    }

    const result = await signUp(formData)
    console.log(result)
  }

  const defaultTheme = createTheme()

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Clinic4
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  //console.log(email)
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => handleName(e)}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e) => handleLastName(e)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => handlePhone(e)}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="new-phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleEmail} // onChange={(e) => handleEmail(e)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => handlePassword(e)} //onChange=handlePassword
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => handleNamber(e)}
                  required
                  fullWidth
                  name="insurance"
                  label="Insurance"
                  type="insurance"
                  id="insurance"
                  autoComplete="new-insurance"
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default SignUp
