import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import styles from './HomeModule.module.css';

// Importamos los logos de Vite correctamente
import logoIzq from '../assets/image-removebg-preview (55).png';
import logoCentro from '../assets/image-removebg-preview (57).png';
import logoDer from '../assets/image-removebg-preview (56).png';

const HomeModule = () => {
  return (
    <div className={styles.home_container}>
      
      {/* Sección Superior: Logos */}
      <div className={styles.logos_header}>
        <div className={styles.logo_box}>
          <img src={logoIzq}  alt="Logo Izquierdo" /> 
        </div>
        
        <div className={styles.logo_box}>
          <img src={logoCentro} style={{ maxWidth: '600%', maxHeight: '600%', marginTop: '1.5rem' }} alt="Logo Centro" /> 
        </div>

        <div className={styles.logo_box}>
          <img src={logoDer} alt="Logo Derecho" /> 
        </div>
      </div>

      {/* Sección Hero: Textos principales */}
      <div className={styles.hero_section}>
        <div className={styles.badge}>
          Solquiven, C.A. - Soluciones Químicas
        </div>
        
        <h1 className={styles.hero_title}>
          Modelo de análisis de <span className={styles.text_accent}>Confiabilidad</span> <br/>
          operacional para los equipos de envasado <br/>
          de la línea Solfresh en Solquiven, C.A.
        </h1>
        
        <p className={styles.hero_subtitle}>
          Optimización y control del ciclo de vida de los activos críticos en la 
          línea de producción, garantizando disponibilidad, calidad y seguridad operativa.
        </p>
      </div>

      {/* Componente del Carrusel */}
      <div className={styles.carousel_section}>
        <HeroCarousel />
      </div>

    </div>
  );
};

export default HomeModule;