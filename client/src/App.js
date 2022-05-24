import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import HomePage from './pages/homePage';
import Admin from './pages/admin';


function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/homePage' element={<HomePage/>} />
         
      </Routes>
      </Router>
  );
  }
    
  export default App;