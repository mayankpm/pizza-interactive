import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage'


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' element={<MenuPage/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
