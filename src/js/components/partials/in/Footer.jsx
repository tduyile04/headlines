import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">headlines</h5>
            <p className="grey-text text-lighten-4">
              Designed by: Duyile Tolulope Patrick(afrocode) <br />
              With code, coffee and andela motivation
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Tools</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">React Js</a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">Flux</a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">NewsAPI</a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Materialize
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2017 Copyright headlines-all rights reserved
          <a className="grey-text text-lighten-4 right" href="#!">
            Github resource
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
