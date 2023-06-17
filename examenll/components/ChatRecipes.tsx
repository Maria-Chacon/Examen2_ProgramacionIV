import React, { useState } from 'react';

const ChatRecipes: React.FC = () => {
  const [inputParams, setInputParams] = useState('');
  const [response, setResponse] = useState('');
  const apiKey = "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";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParams(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputParams) {
      setResponse('Por favor, ingresa los parámetros.');
      return;
    }

    const [ingredientes, tipo, dificultad, cantidadSalidas] = inputParams.split(';');

    setResponse('Haciendo la solicitud al API...');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: "Generar recetas;${ingredientes};${tipo};${dificultad};${cantidadSalidas} "},
          ],
        }),
      });

      const data = await response.json();

      if (data && data.choices && data.choices.length > 0) {
        const message = data.choices[0].message;

        if (message && message.content) {
          setResponse(message.content);
        } else {
          setResponse('Error al obtener la respuesta del API');
        }
      } else {
        setResponse('Error al obtener la respuesta del APIIII');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud al API:', error);
      setResponse('Error al hacer la solicitud al API');
    }

    setInputParams('');
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
                placeholder="Escribe los parámetros separados por ; (por ejemplo: ingredientes;tipo;dificultad;cantidadSalidas)"
                value={inputParams}
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
