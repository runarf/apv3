import React from 'react';
import logo from './img/LogoBig.png';
import './App.css';

import { Products } from './Products';

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
