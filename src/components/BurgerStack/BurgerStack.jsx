// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from '../Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        <ul>
          {stack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              onClick={() => removeFromBurger(index)}
              actionLabel="X"
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default BurgerStack;