import React from 'react';
import styles from './HeroCarousel.module.css';
import carouselData from '../../data/carouselData.json';

const HeroCarousel = () => {
  return (
    <div className={styles.carousel_wrapper}>
      <div className={styles.carousel_track}>
        {carouselData.map((item) => (
          <div key={item.id} className={styles.carousel_slide}>
            {/* Si aún no tienes las fotos, esto mostrará un placeholder con el color corporativo */}
            {item.src.includes('ruta/a/tu/foto') ? (
              <div className={styles.placeholder_img}>
                <span>Foto {item.id}</span>
              </div>
            ) : (
              <img src={item.src} alt={item.alt} className={styles.slide_img} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;