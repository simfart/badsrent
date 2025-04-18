import { FC } from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
  };
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};
