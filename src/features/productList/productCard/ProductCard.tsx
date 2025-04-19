import { FC } from 'react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  };
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h3>{product.name}</h3>
      <p className={styles.productAbout}>{product.description}</p>
      <div className={styles.productPrice}>
        <div className={styles.productPriceNum}>{product.price}₽</div>
        <span>в месяц</span>
      </div>
      <img src={product.image} alt="" />
    </div>
  );
};
