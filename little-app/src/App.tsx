import React from 'react';
import logo from './logo.svg';
import './App.css'
import { publicRoutes } from './router/indext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (

  <BrowserRouter>
              <Routes>
                  {publicRoutes.map((route, index) => {
                      const Page = route.component;
                      return (
                          <Route
                              key={index}
                              path={route.path}
                              element={<Page /> }
                              />
                      );
                  })}
              </Routes>
        </BrowserRouter>
  );
}

export default App;
