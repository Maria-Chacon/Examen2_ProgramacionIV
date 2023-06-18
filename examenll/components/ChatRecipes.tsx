import React, { useState, useEffect } from 'react';
import ingredientsData from '../public/ingredients.json';

const ChatRecipes: React.FC = () => {
  const [inputParams, setInputParams] = useState('');
  const [response, setResponse] = useState('');
  const [ingredientListVisible, setIngredientListVisible] = useState(false);
  const [typeListVisible, setTypeListVisible] = useState(false);
  const [difficultyListVisible, setDifficultyListVisible] = useState(false);
  const [quantityListVisible, setQuantityListVisible] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const apiKey = "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";
  
  const ingredients = ingredientsData.ingredients;
  const types = ['Casera', 'Gourmet', 'Saludable'];
  const difficulties = ['Fácil', 'Media', 'Difícil'];
  const quantities = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    setInputParams('');
  }, [ingredientListVisible]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputParams(event.target.value);
  };

  const handleIngredientSelect = (ingredient: string) => {
    setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const handleIngredientRemove = (ingredient: string) => {
    setSelectedIngredients((prevIngredients) => prevIngredients.filter((item) => item !== ingredient));
  };

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
  };

  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
  };

  const handleQuantitySelect = (quantity: string) => {
    setSelectedQuantity(quantity);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ingredients = selectedIngredients.join(',');
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

    setSelectedIngredients([]);
    setSelectedType('');
    setSelectedDifficulty('');
    setSelectedQuantity('');
  };

  return (
    <div id="chat" className="container mt-5 chat">
      <h2 className="text-center">Chat</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe los ingredientes"
                  value={inputParams}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="input-group">
                  <button
                    className="menu"
                    type="button"
                    onClick={() => setIngredientListVisible(!ingredientListVisible)}
                  >
                    Ingredientes
                  </button>
                  {ingredientListVisible && (
                    <select
                      className="form-control"
                      onChange={(e) => handleIngredientSelect(e.target.value)}
                    >
                      <option value="">Selecciona un ingrediente</option>
                      {ingredients.map((ingredient: string) => (
                        <option key={ingredient} value={ingredient}>
                          {ingredient}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
              <div className="col">
                <div>
                  {selectedIngredients.map((ingredient) => (
                    <span key={ingredient} className="badge badge-secondary mr-2">
                      {ingredient}
                      <button
                        type="button"
                        className="btn-close btn-sm"
                        onClick={() => handleIngredientRemove(ingredient)}
                      />
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-auto">
                <button
                  className="principalButton mt-2"
                  type="button"
                  onClick={() => setIngredientListVisible(false)}
                >
                  Listo
                </button>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="input-group">
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
                      {types.map((type: string) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="input-group">
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
                      {difficulties.map((difficulty: string) => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div className="input-group">
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
                      {quantities.map((quantity: string) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <button type="submit" className="principalButton">
                  Generar Receta
                </button>
              </div>
            </div>
          </form>
          {response && (
            <div className="alert alert-info" role="alert">
              {response}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRecipes;
