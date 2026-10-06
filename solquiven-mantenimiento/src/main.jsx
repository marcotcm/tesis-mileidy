/**
 * @file main.jsx
 * @description Punto de entrada principal de la aplicación React.
 * Inicializa el árbol de componentes y carga los estilos globales.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);