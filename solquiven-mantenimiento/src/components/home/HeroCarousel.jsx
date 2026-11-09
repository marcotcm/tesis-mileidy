import React, { useState } from 'react';
import styles from './HeroCarousel.module.css';
import { carouselData } from '../../data/carouselData.js';

const HeroCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Duplicamos el arreglo para crear el efecto de scroll infinito sin cortes
  const doubledData = [...carouselData, ...carouselData];

  return (
    <>
      <div className={styles.carousel_wrapper}>
        <div className={`${styles.carousel_track} ${selectedImage ? styles.paused : ''}`}>
          {doubledData.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className={styles.carousel_slide}
              onClick={() => setSelectedImage(item.src)}
            >
              <img src={item.src} alt={item.alt} className={styles.slide_img} />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Negro (Lightbox) */}
      {selectedImage && (
        <div className={styles.lightbox_overlay} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Vista ampliada" className={styles.lightbox_img} />
        </div>
      )}
    </>
  );
};

export default HeroCarousel;