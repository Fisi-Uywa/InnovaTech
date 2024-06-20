import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../logoprincipal.svg';
import {useState} from 'react';

const url = "https://innovatech-0rui.onrender.com";

const loginUrl = url + '/auth/login';

export default function SignInSide() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    fetch(
      loginUrl,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email?email: "No ingresado",
        password: password ? password : "No ingresado"
      })
    }
    ).then(res => res.json()).then(data =>{
      console.log(data);
      console.log(data.status);
      if(data.status ===200){
        alert('Usuario logueado');
        window.localStorage.setItem('UW-logged-session', {
          id: data.id,
          nombre: data.nombre,
          email: data.email,
          insignias: data.insignias,
          token: data.token
        });
        window.location.href = '/';
      }
      else{
        alert('Error al loguear usuario');
        setEmail(()=> "");
        setPassword(()=> "");
      }
      }).catch(error =>{
        console.log(error)
      })
  };

  return (
    <Grid container component="main" sx={{ height: {md:'100vh', xs:'100vh'} }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1544923408-75c5cef46f14?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} square>
      <Box
        sx={{
          my: 4,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '200px', height: '100px' }}>
          <Logo style={{ width: '200px', height: '100px' }}/>
        </Box>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            autoComplete="email"
            autoFocus
            value ={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#66bb6a',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#66bb6a'
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            value ={password}
            onChange = {(e) =>{setPassword(e.target.value)}}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#66bb6a',
                },
              },
              '& .MuiInputLabel-root': {
                '&.Mui-focused': {
                  color: '#66bb6a'
                },
              },
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Acepto terminos y condiciones"
            //Terminos y condiciones de serfor
            sx={{width: '100%'}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            
            sx={{ my: 2, backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#66bb6a' }}}
          >
            Iniciar Sesión
          </Button>
          <Grid container>
            <Grid item>
              <Link to = "/Registrar">
                {"No tienes una cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
          
        </Box>
      </Box>
    </Grid>
  </Grid>
  );
}
