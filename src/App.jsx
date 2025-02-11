import { useState } from 'react'

import './App.css'
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';


const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  // State to track selected ingredients (burger stack)
  const [stack, setStack] = useState([]);

  // Add ingredient to the stack
  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack]); // New ingredient goes on top
  };

  // Remove an ingredient from the stack
  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index)); // Remove by index
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        {/* Ingredient List */}
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        
        {/* Burger Stack */}
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;