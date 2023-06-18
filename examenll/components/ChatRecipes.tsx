import React, { useState } from 'react';

const ChatRecipes: React.FC = () => {
  const [inputParams, setInputParams] = useState('');
  const [response, setResponse] = useState('');
  const [ingredientListVisible, setIngredientListVisible] = useState(false);
  const [typeListVisible, setTypeListVisible] = useState(false);
  const [difficultyListVisible, setDifficultyListVisible] = useState(false);
  const [quantityListVisible, setQuantityListVisible] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const apiKey = "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";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParams(event.target.value);
  };

  const handleIngredientSelect = (ingredient: string) => {
    setSelectedIngredient(ingredient);
    setIngredientListVisible(false);
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setTypeListVisible(false);
  };

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setDifficultyListVisible(false);
  };

  const handleQuantitySelect = (quantity: string) => {
    setSelectedQuantity(quantity);
    setQuantityListVisible(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ingredients = selectedIngredient || inputParams;
    const type = selectedType;
    const difficulty = selectedDifficulty;
    const quantity = selectedQuantity;

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
            { role: 'user', content: `Generar recetas;${ingredients};${type};${difficulty};${quantity}` },
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
        setResponse('Error al obtener la respuesta del API');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud al API:', error);
      setResponse('Error al hacer la solicitud al API');
    }

    setInputParams('');
    setSelectedIngredient('');
    setSelectedType('');
    setSelectedDifficulty('');
    setSelectedQuantity('');
  };

  return (
    <div className="container mt-5 chat">
      <h2 className="text-center">Chat</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Escribe los ingredientes"
                value={inputParams}
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <button
                  className="menu"
                  type="button"
                  onClick={() => setIngredientListVisible(!ingredientListVisible)}
                >
                  Ingredientes
                </button>
                {ingredientListVisible && (
                  <select className="form-control" onChange={(e) => handleIngredientSelect(e.target.value)}>
                    <option value="">Ninguno</option>
                    <option value="tomate">Tomate</option>
                    <option value="fideos">Fideos</option>
                    <option value="pollo">Pollo</option>
                    {/* Agrega más ingredientes aquí */}
                  </select>
                )}
              </div>
              <div className="input-group-append">
                <button
                  className="menu"
                  type="button"
                  onClick={() => setTypeListVisible(!typeListVisible)}
                >
                  Tipo
                </button>
                {typeListVisible && (
                  <select className="form-control" onChange={(e) => handleTypeSelect(e.target.value)}>
                    <option value="">Ninguno</option>
                    <option value="casera">Casera</option>
                    <option value="gourmet">Gourmet</option>
                    <option value="saludable">Saludable</option>
                    {/* Agrega más tipos aquí */}
                  </select>
                )}
              </div>
              <div className="input-group-append">
                <button
                  className="menu"
                  type="button"
                  onClick={() => setDifficultyListVisible(!difficultyListVisible)}
                >
                  Dificultad
                </button>
                {difficultyListVisible && (
                  <select className="form-control" onChange={(e) => handleDifficultySelect(e.target.value)}>
                    <option value="">Ninguno</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Media">Media</option>
                    <option value="Difícil">Difícil</option>
                  </select>
                )}
              </div>
              <div className="input-group-append">
                <button
                  className="menu"
                  type="button"
                  onClick={() => setQuantityListVisible(!quantityListVisible)}
                >
                  Cantidad
                </button>
                {quantityListVisible && (
                  <select className="form-control" onChange={(e) => handleQuantitySelect(e.target.value)}>
                    <option value="">Ninguno</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                )}
              </div>
              <button className="principalButton" type="submit">
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

