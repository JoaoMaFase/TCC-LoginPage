import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginModal from './LoginModal.js'
import {Brow} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginModal/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
