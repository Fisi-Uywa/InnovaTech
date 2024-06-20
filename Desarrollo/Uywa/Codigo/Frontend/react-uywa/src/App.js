import './App.css';
import React from "react";
import ResponsiveAppBar from './components/Navigation/NavBar';
import Home from "./pages/Home";
import RealizarAlerta from "./pages/RealizarAlerta";
import VerAlerta from "./pages/VerAlertaGoogle";
import InicioSesion from './components/Login/InicioSesion';
import Registrar from './components/Login/Registrar'
import Footer from './components/Footer/Footer';
import Reportes from './pages/ReportesMod';
import Eventos from './pages/Eventos';
import ModeradorPrincipal from './pages/Moderador';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/iniciar-sesion' element={<InicioSesion/>}/>
          <Route path='/registrar' element={<Registrar/>}/>
          <Route element={
            <>
            <ResponsiveAppBar />
            <Outlet />
            </>
          }>
          <Route path="/" element={<Home />} />
          <Route path="/realizar-alerta" element={<RealizarAlerta />} />
          <Route path='/ver-alerta' element={<VerAlerta/>} />
          <Route path='/moderador' element={<ModeradorPrincipal/>}/>
          <Route path="/moderador-reportes" element={<Reportes/>}/>
          <Route path="/ver-eventos" element={<Eventos/>}/>
          </Route>
        </Routes>

      </div>
    </Router>
    <Router>
      <Footer />
    </Router>
  </>

  );
}

export default App;