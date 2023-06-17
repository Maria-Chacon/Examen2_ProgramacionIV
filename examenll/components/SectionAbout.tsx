import React from 'react';
import Image from 'next/image';
import myImage from '../public/dm.jpg';

const SectionAbout: React.FC = () => {
  return (
    <section className="bg-light" id="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-3">Acerca del Chat GPT</h2>
            <p className="lead">
              Bienvenido a nuestro sistema de chat basado en inteligencia artificial (IA).
            </p>
            <p>
              Utilizamos el modelo de lenguaje Chat GPT para proporcionarte respuestas precisas y relevantes a tus preguntas y consultas en tiempo real.
              Nuestro sistema es capaz de entender una amplia variedad de temas y puede adaptarse a diferentes contextos para brindarte la información que necesitas.
            </p>
            <p>
              Ya sea que estés buscando respuestas a preguntas generales o necesites ayuda en áreas especializadas, el Chat GPT está diseñado para ayudarte en tu búsqueda.
            </p>
            <p>
              ¡Explora nuestro sistema de chat y descubre cómo puede facilitar tus interacciones y brindarte respuestas rápidas y confiables!
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <Image src={myImage} alt="Mi imagen" className="img-fluid rounded-circle" style={{marginLeft: '100px'}} width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
