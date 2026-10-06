/**
 * @file App.jsx
 * @description Componente raíz de enrutamiento y layout principal.
 */
import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import MachineModule from './pages/MachineModule';
import MaintenanceModule from './pages/MaintenanceModule';
import styles from './App.module.css';

/* Módulo temporal para páginas no desarrolladas */
const BlankModule = ({ title }) => (
  <div className={styles.blank_container}>
    <div className={styles.blank_content}>
      <Settings size={48} className={styles.blank_icon} />
      <h2 className={styles.blank_title}>Módulo: {title}</h2>
      <p className={styles.blank_text}>Contenido en desarrollo...</p>
    </div>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('fichas');
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const formatted = date.toLocaleDateString('es-ES', options);
    setCurrentDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
  }, []);

  // Simulación de Router básico
  const renderPage = () => {
    switch (currentRoute) {
      case 'fichas': return <MachineModule />;
      case 'planes': return <MaintenanceModule />;
      case 'inicio': return <BlankModule title="Inicio / Dashboard" />;
      case 'ajustes': return <BlankModule title="Ajustes del Sistema" />;
      default: return <MachineModule />;
    }
  };

  return (
    <div className={styles.app_container}>
      <Sidebar 
        activeModule={currentRoute} 
        setActiveModule={setCurrentRoute} 
        currentDate={currentDate}
      />

      <div className={styles.app_mainWrapper}>
        <Topbar />
        
        <main className={styles.app_mainContent}>
          <div className={styles.app_backgroundPattern}></div>
          <div className={styles.app_contentInner}>
              {renderPage()}
          </div>
        </main>
        
        <footer className={styles.app_footer}>
            <span>Software Desarrollado para SOLQUIVEN, S.A. - Planta Principal v2.0</span>
            <span>Versión CSS Modules Modularizada</span>
        </footer>
      </div>
    </div>
  );
}