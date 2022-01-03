import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home';
import { BrowserRouter as Router,Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path='/' element={<Login/>}></Route>
            <Route exact path='/Register' element={<Signup/>}></Route>
            <Route exact path='/Home' element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;