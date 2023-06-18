import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import logo from '../public/dm.jpg';


const CallToAction: React.FC = () => {
    return (
        <div className="calltoaction" id="call">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
                        <span className="fs-2 text-darck ls-md text-uppercase" style={{fontWeight: "bold"}}>
                            Comunícate con nosotras
                        </span>

                        <h2 className="mt-4 mb-3" style={{color: 'lightcoral' ,fontWeight: "bold"}}>
                        Si tienes alguna pregunta, inquietud o encuentras algún error, no dudes en contactarnos. 
                        Estaremos encantadas de ayudarte y brindarte la asistencia necesaria. 
                        Además, si deseas obtener más información sobre nuestros servicios, 
                        puedes hacerlo haciendo clic en 'Más información'.
                        </h2>

                        <div className="d-grid d-md-block">
                            <a href="#" className="contacButton mb-2 m-4">Contáctanos</a>
                            <a href="#" className="informationButton ">Más información</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CallToAction;






