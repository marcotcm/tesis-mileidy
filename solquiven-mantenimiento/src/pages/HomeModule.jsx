import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import styles from './HomeModule.module.css';

const HomeModule = () => {
  return (
    <div className={styles.home_container}>
      
      {/* Sección Superior: Logos */}
      <div className={styles.logos_header}>
        <div className={styles.logo_box}>
          <span className={styles.logo_hint}>Ruta Logo Izq</span>
         <img src="../assets/image-removebg-preview (55).png" alt="Logo Izquierdo" /> 
        </div>
        
        <div className={styles.logo_box}>
          <span className={styles.logo_hint}>Ruta Logo Centro</span>
           <img src="../assets/image-removebg-preview (57).png" alt="Logo Centro" /> 
        </div>

        <div className={styles.logo_box}>
          <span className={styles.logo_hint}>Ruta Logo Der</span>
          <img src="../assets/image-removebg-preview (56).png" alt="Logo Derecho" /> 
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