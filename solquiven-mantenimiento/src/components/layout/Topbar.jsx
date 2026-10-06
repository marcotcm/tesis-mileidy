/**
 * @file Topbar.jsx
 * @description Componente que renderiza la barra superior de navegación.
 */
import React from 'react';
import styles from './Topbar.module.css';

const Topbar = () => (
  <header className={styles.topbar_header}>
    <div className={styles.topbar_left}>
      <h1 className={styles.topbar_title}>SISTEMA DE GESTIÓN DE MANTENIMIENTO</h1>
    </div>
    <div className={styles.topbar_right}>
      <p className={styles.topbar_company}>SOLQUIVEN</p>
      <p className={styles.topbar_subtitle}>Soluciones Químicas</p>
    </div>
  </header>
);

export default Topbar;