import React from 'react';
import './ProductList.scss';
import { ProductCard } from './ProductCard';

export const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Продукт 1', description: 'Описание продукта 1' },
    { id: 2, name: 'Продукт 2', description: 'Описание продукта 2' },
    { id: 3, name: 'Продукт 3', description: 'Описание продукта 3' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
