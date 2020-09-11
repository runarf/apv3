import React from 'react';

export const Header = () => {
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
            <img src="./img/Logo.png" height="50" alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <a href="#dogs">Perros</a>
          <a href="#cats">Gatos</a>
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
                    <a href="#dogs">Perros</a>
                  </li>
                  <li>
                    <a href="#cats">Gatos</a>
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
