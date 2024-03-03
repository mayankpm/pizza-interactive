import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './Pages/MenuPage'
import Manager from './Pages/Manager';


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/pizza' element={<MenuPage/>} />
            <Route path='/' element={<Manager/>} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
