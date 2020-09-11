import React from 'react';
import logo from './img/LogoBig.png';

export const Welcome = () => {
  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div
              style={{ backgroundImage: `url(${logo})` }}
              className="categories__item categories__large__item"
            ></div>
          </div>
          <div className="col-lg-6">
            <div className="categories__text">
              <h1>Don Sabueso</h1>
              <h5>
                Porque el perro quiere su hueso te llevamos la comida de tu mascota a tu domicilio
                <br />
              </h5>
              <h5>
                (Tambien la del gato)
                <br />
                <br />
              </h5>
              <p>Pago a contra-entrega</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
