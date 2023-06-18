import React from 'react';
import Image from 'next/image';
import myImage from '../public/dm.jpg';

const SectionAbout: React.FC = () => {
  return (
    <section className="bg-light" id="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-3">Acerca del Chat de Recetas DM</h2>
            <p className="lead">
              Bienvenido a nuestro sistema de chat basado en inteligencia artificial (IA).
            </p>
            <p>
              Utilizamos el modelo de lenguaje Chat GPT para proporcionarte recetas de cocina en tiempo real.
            </p>
            <p>
              Nuestro sistema es capaz de entender una amplia variedad de ingredientes, tipos de cocina, niveles de dificultad y cantidades para generar recetas personalizadas para ti.
            </p>
            <p>
              Simplemente ingresa los ingredientes deseados en el campo de texto separados por punto y coma (;), o selecciona las opciones disponibles en los listados desplegables.
            </p>
            <p>
              ¡Explora nuestro sistema de chat y descubre una nueva forma de obtener inspiración culinaria!
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
