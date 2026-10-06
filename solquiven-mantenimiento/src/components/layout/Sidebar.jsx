/**
 * @file Sidebar.jsx
 * @description Panel lateral de navegación principal del sistema.
 */
import React from 'react';
import { Home, Database, Calendar, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeModule, setActiveModule, currentDate }) => {
  const menuItems = [
    { id: 'inicio', icon: Home, label: 'INICIO', subLabel: 'Dashboard' },
    { id: 'fichas', icon: Database, label: 'FICHAS DE MÁQUINAS', subLabel: 'Datos y Fallas' },
    { id: 'planes', icon: Calendar, label: 'PLANES DE MANT.', subLabel: 'Preventivo' },
    { id: 'ajustes', icon: Settings, label: 'AJUSTES', subLabel: 'Sistema' },
  ];

  return (
    <aside className={styles.sidebar_container}>
      <div className={styles.sidebar_logoArea}>
        <span className={styles.sidebar_logoText}>S<span className={styles.sidebar_logoO}>O</span>LQUIVEN</span>
        <span className={styles.sidebar_logoSub}>SOLUCIONES QUÍMICAS</span>
      </div>

      <nav className={styles.sidebar_nav}>
        <ul className={styles.sidebar_ul}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveModule(item.id)}
                  className={`${styles.sidebar_btn} ${isActive ? styles.sidebar_btnActive : styles.sidebar_btnInactive}`}
                >
                  <Icon size={22} className={`${styles.sidebar_icon} ${isActive ? styles.sidebar_iconActive : styles.sidebar_iconInactive}`} />
                  <div>
                    <p className={styles.sidebar_label}>{item.label}</p>
                    <p className={`${styles.sidebar_subLabel} ${isActive ? styles.sidebar_subActive : styles.sidebar_subInactive}`}>{item.subLabel}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.sidebar_dateArea}>
        <div className={styles.sidebar_dateTag}>
           <Calendar size={14}/> {currentDate}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;