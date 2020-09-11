import React from 'react';
import { Product } from './Product';
import { dogs, cats } from './productsInfo';

export const Products = () => {
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="row">
              {dogs.map((product, index) => (
                <Product id="dogs" key={index} product={product} />
              ))}
              {cats.map((product, index) => (
                <Product id="cats" key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
