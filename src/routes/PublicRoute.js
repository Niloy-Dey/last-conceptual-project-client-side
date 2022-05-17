import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contract from '../pages/Contract';
import Login from '../pages/Login';

export const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/home", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/services", name: "Services", Component: Services },
    { path: "/contract", name: "Contract", Component: Contract },
    { path: "/login", name: "Login", Component: Login },
  ];
