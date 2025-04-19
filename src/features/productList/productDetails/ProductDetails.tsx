import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from 'entities/product/model/products';

import styles from './ProductDetails.module.scss';

export const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Продукт не найден</div>;

  return (
    <div className={styles.productDetails}>
      <button onClick={() => navigate(-1)}>← Назад</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.fullDescription}</p>
    </div>
  );
};
