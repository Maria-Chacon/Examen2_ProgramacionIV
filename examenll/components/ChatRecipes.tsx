import React, { useState } from 'react';

const ChatRecipes: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!question) {
      setResponse('Por favor, ingresa los ingredientes.');
      return;
    }

    setResponse('Haciendo la solicitud al API...');

    
    setQuestion('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Chat</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe tu ingredientes aquí"
                value={question}
                onChange={handleInputChange}
              />
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
          {response && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Respuesta</h5>
                <p className="card-text">{response}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRecipes;
