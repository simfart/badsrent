import { FC } from 'react';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <img src={product.image} alt="" />
    </div>
  );
};
