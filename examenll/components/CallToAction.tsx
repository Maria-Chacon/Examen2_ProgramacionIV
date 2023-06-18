import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../public/dm.jpg';


const CallToAction: React.FC = () => {
    return (
        <div className="calltoaction" id="contact">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
                        <span className="fs-2 text-darck ls-md text-uppercase" style={{fontWeight: "bold"}}>
                            Solicita informacion de forma gratitua
                        </span>

                        <h2 className="mt-4 mb-3 text-white" style={{fontWeight: "bold"}}>
                            Contrata mis servicios, puedo aportar mucho valor a tú proyecto,
                            además estaré encantada de ayudarte y colaborar para que el
                            proyecto sea un éxito, ponte en contacto conmigo.
                        </h2>

                        <div className="d-grid d-md-block">
                            <a href="#" className="contacButton mb-2 m-4">Contactanos</a>
                            <a href="#" className="informationButton ">Mas informacion</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CallToAction;






