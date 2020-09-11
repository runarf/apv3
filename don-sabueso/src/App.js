import React from 'react';
import logo from './img/LogoBig.png';
import Flagacan from './img/shop/Flagacan.jpg';
import './App.css';

import Dog_Adulto_25 from './img/shop/X-Dog_Adulto_25.png';
import Dog_Chow_Adultos from './img/shop/Dog_Chow_Adultos.jpg';
import Dog_Chow_RP_25 from './img/shop/Dog_Chow_RP_25.jpg';
import Pet_Can_25 from './img/shop/Pet_Can_25.png';
import El_Centinela_25 from './img/shop/El_Centinela_25.png';
import Companero_25 from './img/shop/Companero_25.jpg';
import Dog_Chow_Cachorros from './img/shop/Dog_Chow_Cachorros.jpg';
import Xdog_Basic_25 from './img/shop/Xdog_Basic_25.jpg';
import Poder_Canino_25 from './img/shop/Poder_Canino_25.jpg';
import Gatina_15 from './img/shop/Gatina_15.jpg';
import Pet_Cat_15 from './img/shop/Pet_Cat_15.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="footer__logo">
              <a href="./index.html">
                <img src="img/Logo.png" alt="" />
              </a>
              <p>Contactanos</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-8 col-sm-8">
            <div class="footer__social">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>

              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="footer__copyright__text">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Products = () => {
  return (
    <section className="shop spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="row">
              {products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const products = [
  {
    image: Flagacan,
    title: `Flagacan 25kg`,
    price: `$930`,
  },
  {
    location: 'img/shop/X-Dog_Adulto_25.png',
    image: Dog_Adulto_25,
    title: `X-Dog Adulto 25 kg`,
    price: `$ 720`,
  },
  {
    location: `img/shop/Dog_Chow_Adultos.jpg`,
    image: Dog_Chow_Adultos,
    title: `Dog Chow Adulto 25kg`,
    price: `$ 930.0`,
  },
  {
    location: `img/shop/Dog_Chow_RP_25.jpg`,
    image: Dog_Chow_RP_25,
    title: `Dog Chow R/P 25kg`,
    price: `$ 930.0`,
  },
  {
    location: `img/shop/Pet_Can_25.png`,
    image: Pet_Can_25,
    title: `Pet Can  25kg`,
    price: `$ 675`,
  },
  {
    location: `img/shop/El_Centinela_25.png`,
    image: El_Centinela_25,
    title: `El Centinela 25Kg`,
    price: `$ 555`,
  },
  {
    location: `img/shop/Companero_25.jpg`,
    image: Companero_25,
    title: `El Compañero 25Kg`,
    price: `$ 520`,
  },
  {
    location: `img/shop/Dog_Chow_Cachorros.jpg`,
    image: Dog_Chow_Cachorros,
    title: `Dog Chow Cachorros`,
    price: `$ 870`,
  },
  {
    location: `img/shop/Xdog_Basic_25.jpg`,
    image: Xdog_Basic_25,
    title: `X-dog Basic 25kg`,
    price: `$ 450`,
  },
  {
    location: `img/shop/Poder_Canino_25.jpg`,
    image: Poder_Canino_25,
    title: `Poder Canino 25kg`,
    price: `$ 450`,
  },
  {
    location: `img/shop/Gatina_15.jpg`,
    image: Gatina_15,
    title: `Gatina 15kg`,
    price: `$ 450`,
  },
  {
    location: `img/shop/Pet_Cat_15.png`,
    image: Pet_Cat_15,
    title: `Pet Cat 15kg`,
    price: `$ 490`,
  },
];

const Product = ({ product }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="product__item">
        <div
          className="product__item__pic product-image"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="label new">New</div>
          <ul className="product__hover">
            <li>
              <a href={product.image} className="image-popup">
                <span className="arrow_expand"></span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/5215568839532?text=Hola%20estoy%20interesado%20en%20Flagacan%2025kg">
                <span className="icon-whatsapp"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-instagram"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>
            <a href="#">{product.title}</a>
          </h6>

          <div className="product__price">{product.price}</div>
        </div>
      </div>
    </div>
  );
};

const Welcome = () => {
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

const Header = () => {
  return (
    <>
      <div id="preloder">
        <div className="loader"></div>
      </div>
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>

        <div className="offcanvas__logo">
          <a href="./index.html">
            <img src="img/Logo.png" height="50" alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <a href="#">Perros</a>
          <a href="#">Gatos</a>
        </div>
      </div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="img/Logo.png" height="50" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li>
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Perros</a>
                  </li>
                  <li>
                    <a href="#">Gatos</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>{' '}
    </>
  );
};
