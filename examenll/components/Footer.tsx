import React from 'react';

const Footer: React.FC = () => {
  return (
    <div id="contacts">
      <footer className="bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p>© 2023 Dayana Gamboa</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/dayana.monge.16/">
                    <i className="bi bi-facebook redes"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/DayanaGamboa">
                    <i className="bi bi-github redes"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/da_monge_/">
                    <i className="bi bi-instagram redes"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-center text-md-start">
              <p>© 2023 María Chacón</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/mariajose.chaconmora?mibextid=ZbWKwL">
                    <i className="bi bi-facebook redes"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/Maria-Chacon">
                    <i className="bi bi-github redes"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com/ksmaria13?igshid=MzNlNGNkZWQ4Mg==">
                    <i className="bi bi-instagram redes"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
