import React, { useState } from 'react';
import styles from './ProductGallery.module.scss';
import { Product } from 'shared/assets/types/product';

interface Props {
  product: Product;
}

export const ProductGallery: React.FC<Props> = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = product.media[currentIndex];

  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % product.media.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + product.media.length) % product.media.length,
    );
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.thumbnailList}>
        {product.media.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`${styles.thumbnailWrapper} ${
                isActive ? styles.active : ''
              }`}
              onClick={() => handleChange(index)}
            >
              {item.type === 'image' ? (
                <img src={item.src} className={styles.thumbnail} />
              ) : (
                <video src={item.src} className={styles.thumbnail} muted />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.mainViewer}>
        <button onClick={handlePrev} className={styles.navButton}>
          ‹
        </button>
        <div className={styles.mediaWrapper} onClick={handleNext}>
          {currentMedia.type === 'image' ? (
            <img src={currentMedia.src} className={styles.mainMedia} />
          ) : (
            <video
              src={currentMedia.src}
              controls
              className={styles.mainMedia}
            />
          )}
        </div>
        <button onClick={handleNext} className={styles.navButton}>
          ›
        </button>
      </div>

      <div className={styles.infoPanel}>
        <h2>{product.name}</h2>
        <div className={styles.price}>{product.price}</div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};
