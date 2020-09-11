import React from 'react';

export const Footer = () => {
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
