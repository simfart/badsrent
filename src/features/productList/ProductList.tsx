import React from 'react';
import { products } from 'entities/product/model/products';
import styles from './ProductList.module.scss';
import { ProductGallery } from 'widgets/productGallery';

export const ProductList: React.FC = () => (
  <section id="products" className={styles.products}>
    <h2>Каталог аренды</h2>
    <div>
      {products.map((p) => (
        <ProductGallery key={p.id} product={p} />
      ))}
    </div>
  </section>
);
