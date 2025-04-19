import React from 'react';
import { ProductCard } from './productCard/ProductCard';
import { products } from 'entities/product/model/products';
import styles from './ProductList.module.scss';

export const ProductList: React.FC = () => (
  <section id="products" className={styles.products}>
    <h2>Каталог аренды</h2>
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);
