import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import LandingPage from './container/LandingPage';
import LoginPage from './container/LoginPage';
import { Routes } from 'react-router-dom';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/login' element={<LoginPage />}></Route>
        <Route exact path='*' element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
