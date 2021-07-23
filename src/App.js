import './App.css';
import React, { useState } from 'react';

function App() {

  const [quantity, setQuantity] = useState(null);
  const [caloriesPer100, setCaloriesPer100] = useState(null);
  const [count, setCount] = useState(null);

  return (
    <div className="App" style={{paddingTop: '20em'}}>
      <div className="field"> 
        <label>Cantitate (gr): </label>
        <input placeholder = "Cantitate (g)" type = "text" onChange = { (e) => setQuantity(e.target.value) } value={quantity} />
      </div>

      <div className="field"> 
        <label>Calorii/100(g) </label>
        <input placeholder = "Calorii/100(g)" type = "text" onChange = { (e) => setCaloriesPer100(e.target.value) } value={caloriesPer100} />
      </div>
      <div className="field" style={{paddingTop: '20px'}}>
        <button onClick={() => setCount( quantity * caloriesPer100 / 100 )}> 
          Calculate
        </button>
      </div>

      <h3>Rezultat calorii: {count}</h3>
    </div>
  );
}

export default App;
